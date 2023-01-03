import React from "react";
import { CartProvider } from "react-use-cart";

import CardDetails from "../cards/CardDetails";
import data from "../data/Data";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './shop.css';
    
const Shop = ({ props }) => {


    //const [count,setcount]=useState(0);

    return (
        <>
            <div className="shop_wrapper">
                <h1 className="shop_header"> Shop </h1>
                <CartProvider>
                    <div className='shop_container-fluid'>
                        <div className="nav-content">
                            
                        </div>
                        <div className="shop_container py-4">
                            <div className="row">
                                {data.products.map((item, index) => {
                                    return (
                                        <CardDetails img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </CartProvider>
            </div>                
        </>
    );
};

export default Shop;
