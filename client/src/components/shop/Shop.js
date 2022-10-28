import React from "react";
import { CartProvider } from "react-use-cart";

import CardDetails from "../cards/CardDetails";
import data from "../data/Data";


const Shop = ({ props }) => {


    //const [count,setcount]=useState(0);

    return (
        <>
            <CartProvider>
                <div className='container-fluid'>
                    <div className="nav-content">
                        <ul className="navbar-nav m-auto">
                            <li className="mb-2 m-auto mb-lg-0"><h3>Shop</h3></li>
                            
                        </ul>
                    </div>
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

            </CartProvider>
        </>
    );
};

export default Shop;