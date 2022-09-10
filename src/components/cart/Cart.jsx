
import { useCart } from 'react-use-cart';
import './Cart.css';
const Cart = () => {
    
    const proceeditems=()=>{
        console.log("Item proceeded"); //that will go to checkout page (will be implemented)
    } 

    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if(isEmpty) return <h5 className='text-center py-5'>My Cart is Empty.</h5>
    return (
        <div className='container-fluid py-3'>
            <div className="row justify-content-center">
                <h4 className="text-center py-3 text-decoration-underline">My Cart</h4>
                <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
                    <div className="d-flex justify-content-center py-3">
                        <p className='position-relative fw-bolder text-title'>Cart <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                        <p className='fw-bolder text-title'>Total Items <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p>
                    </div>
                    <div>
                        <table className="table table-light table-hover m-0">
                            <tbody>
                                {items.map((item, index) => {
                                    return(
                                        <tr key={index} className='align-middle'>
                                            <td><img src={item.img} className='img-cart' alt={item.title} /></td>
                                            <td>{item.title}</td>
                                            <td>${item.price}</td>
                                            <td>Quantity: {item.quantity}</td>
                                            <td>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-outline-dark ms-1'>-</button>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-outline-dark ms-1'>+</button>
                                                <button onClick={() => removeItem(item.id)} className='btn btn-outline-danger ms-5'>Remove Item</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-between py-5">
                        <button onClick={() => emptyCart()} className="btn btn-outline-danger">Clear All</button>
                        <h3>Total Price: ${cartTotal}</h3>
                    </div>
                    <div className=" text-center">
                        <button onClick={()=>proceeditems()} className="btn success">Checkout To Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
