import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserAuth } from "../../features/userSlice";
import { database } from "../../Firebase";
import Plan from "./Plan";
import "./Plans.css";
const Plans = () => {
  const [products, setProducts] = useState([]);
  const [subscribe, setSubscribe] = useState(null);
  const [loading, setLaoding] = useState(null);
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
    console.log(id);
    setLaoding(id);
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
        setLaoding(null);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51JT92SSCAPLP3gOzVCs22DgUYSXK19dhvLQcwAsFdFmTgvVCQ47X9qIYQsdfx4ZksV2A8mSOQq4UsHTJEfuSKSuV00C9yGTHMK"
        );
        await stripe.redirectToCheckout({ sessionId });
        setLaoding(null);
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
          <Plan
            key={id}
            id={id}
            data={data}
            currentPkg={currentPkg}
            loadData={loadData}
            loading={loading}
          />
        );
      })}
    </div>
  );
};

export default Plans;
