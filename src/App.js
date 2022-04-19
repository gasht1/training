import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  //https://fakestoreapi.com/products
  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
  };
  fakestore();
  return (
    <div className="container">
      <div className="box">
        <div className="content">
          <h2>title</h2>
          <p>describtion</p>
        </div>
        <h5>image source</h5>
      </div>
    </div>
  );
};
export default App;
