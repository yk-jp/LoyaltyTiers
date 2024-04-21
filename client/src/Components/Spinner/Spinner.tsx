import React from "react";

export default function Spinner() {
  const spinner = require("../../assets/Spinner.gif");
  return (
    <div className="spinner">
      <div>
        <h2 className="text-align-center">Loading... </h2>
        <img src={spinner} alt="" />
      </div>
    </div>
  );
}
