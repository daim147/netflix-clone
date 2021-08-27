import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserAuth } from "../../features/userSlice";
import { database } from "../../Firebase";
import "./Plans.css";
const Plans = () => {
  const [products, setProducts] = useState([]);
  const [subscribe, setSubscribe] = useState(null);
  const { user } = useSelector(selectUserAuth);
  const { uid } = user;
  useEffect(() => {
    database
      .collection("customers")
      .doc(uid)
      .collection("subscriptions")
      .get()
      .then((query) => {
        query.forEach(async (subscribtion) => {
          setSubscribe({
            role: subscribtion.data().role,
            current_period_end: subscribtion.data().current_period_end.seconds,
            current_period_start:
              subscribtion.data().current_period_start.seconds,
          });
        });
      });
  }, [uid]);
  console.log(subscribe);
  useEffect(() => {
    database
      .collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapShot) => {
        const products = {};
        querySnapShot.forEach(async (product) => {
          products[product.id] = product.data();
          const priceSnap = await product.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[product.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  const loadData = async (id) => {
    console.log("HELO", uid);
    const docRef = await database
      .collection("customers")
      .doc(uid)
      .collection("checkout_sessions")
      .add({
        price: id,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      if (error) {
        alert("An Error occured" + error.message);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51JT92SSCAPLP3gOzVCs22DgUYSXK19dhvLQcwAsFdFmTgvVCQ47X9qIYQsdfx4ZksV2A8mSOQq4UsHTJEfuSKSuV00C9yGTHMK"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plans">
      {subscribe && (
        <p>
          Renewal Date:{" "}
          {new Date(subscribe?.current_period_end * 1000).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([id, data]) => {
        const currentPkg = data?.name
          ?.toLowerCase()
          .includes(subscribe?.role.toLowerCase());
        return (
          <div key={id} className="plan">
            <div className="plan__info">
              <h5>{data.name}</h5>
              <h6>{data.description}</h6>
            </div>
            <button
              onClick={() => !currentPkg && loadData(data?.prices?.priceId)}
              className={currentPkg ? "disabled" : ""}
            >
              {currentPkg ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Plans;
