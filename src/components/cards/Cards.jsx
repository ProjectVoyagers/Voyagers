import React from "react";
import './Cards.css'




export const Cards = (props) => {

  return (
    <>
      <div className="card">
          <div className="container">
            <h4><b><img src={props.img} alt="" /></b></h4>
            <p>{props.title}</p>
            <p>{props.desc}</p>
            <p>{props.price}</p>
          </div>
      </div>
    </>
  );
};


