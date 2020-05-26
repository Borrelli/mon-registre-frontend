import React from "react";
import ReactLoader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const Loader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "80vh",
    }}
  >
    <ReactLoader type="ThreeDots" color="#00BFFF" height={100} width={100} />
  </div>
);
