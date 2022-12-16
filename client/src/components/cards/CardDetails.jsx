import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { useCart } from 'react-use-cart';
import Shop from '../shop/Shop';

const countcart=createContext(0)
const CardDetails = (props) => {

    const { addItem } = useCart();
    const [disable,setDisable]=useState(false);
    const [text,settext]=useState("Add to Cart");
    const [count,setcount]=useState(0);
    
    function cde(){
        setDisable(true)
        settext("Added")
        addItem(props.item)
        setcount(count++)
    }
    return (
        <>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4">
                <div className="card h-100 shadow rounded">
                    <img src={props.img} alt="" className="card-img-top img-fluid" />
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5 className="card-title">{props.title}</h5>
                            <span className="fw-bolder">${props.price}</span>
                        </div>
                        <div className="d-flex justify-content-start">
                            <p className="card-text">{props.desc}</p>
                        </div>
                        <div className="d-grid justify-content-middle">
                            <button type="button" class="btn btn-success"  disabled={disable}  onClick={() => cde()}>{text}</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default CardDetails

