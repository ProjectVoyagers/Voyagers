
import { useCart } from 'react-use-cart';
import './Cart.css';
const Cart = () => {

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
          <>
            <div className='container-fluid py-3'>
                <div className='row align-items-start'>
                    <div className='col align-items-start'>
                        <div className='col py-1 '>
                            <h4 className="text-center py-3 text-decoration">Billing Address</h4>
                            <div className='py-4'>
                                <form className="row g-3 py-5" >
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label for="firstName">First name</label>
                                            <input type="text" className="form-control" id="firstName" placeholder="" required />

                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label for="lastName">Last name</label>
                                            <input type="text" class="form-control" id="lastName" placeholder="" required="" />
                                            <div className="invalid-feedback"> Valid last name is required. </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="firstName">UserName</label>
                                        <input type="text" class="form-control" id="firstName" placeholder="" required="" />
                                        <div className="invalid-feedback"> Valid first name is required. </div>
                                    </div>
                                    <div className="mb-3">
                                        <label for="address">Address</label>
                                        <input type="text" class="form-control" id="address" placeholder="" required="" />
                                        <div className="invalid-feedback"> Please enter your shipping address. </div>
                                    </div>

                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="same-address" />
                                        <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                                    </div>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="save-info" />
                                        <label class="custom-control-label" for="save-info">Save this information for next time</label>
                                    </div>

                                    <h4 className="mb-3">Payment</h4>
                                    <div className="d-block my-3">
                                        <div className="custom-control custom-radio">
                                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="" />
                                            <label className="custom-control-label" for="credit">Credit card</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="" />
                                            <label className="custom-control-label" for="debit">Debit card</label>
                                        </div>
                                        <div className="custom-control custom-radio">
                                            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="" />
                                            <label className="custom-control-label" for="paypal">PayPal</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label for="cc-name">Name on card</label>
                                            <input type="text" class="form-control" id="cc-name" placeholder="" required="" />
                                            <small className="text-muted">Full name as displayed on card</small>
                                            <div class="invalid-feedback"> Name on card is required </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label for="cc-number">Credit card number</label>
                                            <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                            <div className="invalid-feedback"> Credit card number is required </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 mb-3">
                                            <label for="cc-expiration">Expiration</label>
                                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" />
                                            <div className="invalid-feedback"> Expiration date required </div>
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label for="cc-cvv">CVV</label>
                                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" />
                                            <div className="invalid-feedback"> Security code required </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className="col py-1">
                            <h4 className="text-center py-3 text-decoration">Your Items</h4>
                            <div >
                                <div className="d-flex justify-content-center py-3">
                                    <p className='position-relative fw-bolder text-title'>Cart <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                                    <p className='fw-bolder text-title'>Total Items <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p>
                                </div>
                                <div>
                                    <table className="table table-light table-hover m-2">
                                        <tbody>
                                            {items.map((item, index) => {
                                                return (
                                                    <tr key={index} className='align-middle'>
                                                        <td><img src={item.img} className='img-cart' alt={item.title} /></td>
                                                        <td>{item.title}</td>
                                                        <td>${item.price}</td>
                                                        <td>Quantity: {item.quantity}</td>
                                                        <td>
                                                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn btn-outline-dark ms-0'>-</button>
                                                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn btn-outline-dark ms-0'>+</button>
                                                            <button onClick={() => removeItem(item.id)} className='btn btn-outline-danger ms-0'>x</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex justify-content-between py-5">
                                    <button onClick={() => emptyCart()} className="btn btn-outline-danger">Clear All</button>
                                    <h4>Total Price: ${cartTotal}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
