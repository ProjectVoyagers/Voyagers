import React,{} from "react";
import { CartProvider } from "react-use-cart";

import CardDetails from "../cards/CardDetails";
import data from "../data/Data";
import Cart from "../cart/Cart";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Shop = () => {
 
   
    return (
        <>
            <CartProvider>
                <div className='container-fluid'>
                    <h3 className='text-center mt-5 text-uppercase'>Shop Page</h3>
                    <div className="container py-4">
                        <div className="row">
                            {data.products.map((item, index) => {
                                return (
                                    <CardDetails img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                                )
                            })}

                        </div>
                    </div>
                </div>
                <Cart />
            </CartProvider>
        </>
    );
};

export default Shop;