import React from "react";
import "./spinner.css";

const spinner = () => {
  return (
    <section className="flex flex-col items-center space-y-2">
      <span className="spinner"></span>
      <p>Loading....</p>
    </section>
  );
};

export default spinner;
