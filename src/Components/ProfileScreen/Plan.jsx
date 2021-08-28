import React from "react";
import Spinner from "../Loader";

const Plan = ({ data, currentPkg, loadData, loading }) => {
  console.log(loading);
  return (
    <div className="plan">
      <div className="plan__info">
        <h5>{data.name}</h5>
        <h6>{data.description}</h6>
      </div>

      {loading !== data?.prices?.priceId ? (
        <button
          onClick={() => !currentPkg && loadData(data?.prices?.priceId)}
          className={currentPkg ? "disabled" : ""}
        >
          {currentPkg ? "Current Package" : "Subscribe"}
        </button>
      ) : (
        <Spinner width="100px" bg="transparent" height="50px" h={50} />
      )}
    </div>
  );
};

export default Plan;
