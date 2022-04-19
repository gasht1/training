import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
const [update, setupdate] = useState([])

console.log(update);
useEffect(() => {

  fakestore();
 
}, [])

  


  //https://fakestoreapi.com/products
  const fakestore = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    //console.log(response);
    const data= await response.json();
    //console.log(data);
    setupdate(data);

  };
 //
  return (
    <div className="container">
      {update.map((income)=>{
        return(
          <>
          <div className="box">
        <div className="content">
        <h2>{income.title}</h2>
          <p>{income.description}</p>
        </div>
        <img src={income.image} alt="hi" />
      </div>
      </>
        )
      })}
      
    </div>
  );
};
export default App;
