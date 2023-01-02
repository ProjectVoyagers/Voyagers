import { useCart } from "react-use-cart";
import "./Cart.css";
import GooglePayButton from "@google-pay/button-react";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import axios from "axios";

import { useNavigate, NavLink } from "react-router-dom";
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

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  console.log(email);

  let total = cartTotal;
  total.toString();

  const sendEmail = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "http://localhost:5000/sendreceipt",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      data: {
        name,
        items,
        email,
        address,
      },
    });
  };

  // function handleclick(){
  //   navigate("/thanks"),
  //   sendEmail();
  // }
  if (isEmpty)
    return (
      <>
        {" "}
        <Navbar />
        <h5 className="text-center py-5">
         Your Cart is Empty.Please Go to Shop Section{" "}
        </h5>
      </>
    );
  return (
    <>
      <Navbar />
      <div className="container-fluid py-3">
        <div className="row align-items-start">
          <div className="col align-items-start">
            <div className="col py-1 ">
              <h4 className="text-center py-3 text-decoration">
                Billing Address
              </h4>
              <div className="py-4">
                <form className="row g-3 py-5">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label for="firstName">First name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label for="lastName">Last name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="lastName"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        {" "}
                        Valid last name is required.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="firstName">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      {" "}
                      Valid first name is required.{" "}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="address">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder=""
                      required
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <div className="invalid-feedback">
                      {" "}
                      Please enter your shipping address.{" "}
                    </div>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="same-address"
                    />
                    <label className="custom-control-label" for="same-address">
                      Shipping address is the same as my billing address
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="save-info"
                    />
                    <label class="custom-control-label" for="save-info">
                      Save this information for next time
                    </label>
                  </div>

                  <h4 className="mb-1">Payment</h4>
                  <div className="mb-1">
                    <GooglePayButton
                      environment="TEST"
                      paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                          {
                            type: "CARD",
                            parameters: {
                              allowedAuthMethods: [
                                "PAN_ONLY",
                                "CRYPTOGRAM_3DS",
                              ],
                              allowedCardNetworks: ["MASTERCARD", "VISA"],
                            },
                            tokenizationSpecification: {
                              type: "PAYMENT_GATEWAY",
                              parameters: {
                                gateway: "example",
                                gatewatMerchantId: "exampleGatewayMerchantId",
                              },
                            },
                          },
                        ],
                        merchantInfo: {
                          merchantId: "12345678901234567890",
                          merchantName: "Demo Merchant",
                        },
                        transactionInfo: {
                          totalPriceStatus: "ESTIMATED",
                          totalPriceLabel: "Total",
                          totalPrice: total.toString(),
                          countryCode: "US",
                          currencyCode: "USD",
                        },
                        shippingAddressRequired: true,
                        callbackIntents: ["PAYMENT_AUTHORIZATION"],
                      }}
                      onLoadPaymentData={(paymentRequest) => {
                        console.log("Success", paymentRequest);
                      }}
                      onPaymentAuthorized={(paymentData) => {
                        console.log("Payment Authorised Success", paymentData);
                        return { transactionState: "SUCCESS" };
                      }}
                      existingPaymentMethodRequired="false"
                      buttonColor="black"
                      buttonType="Buy"
                    />
                  </div>

                  <button
                    type="submit"
                    class="text-warning"
                    onClick={sendEmail}
                  >
                    <NavLink to="/thanks" smooth={true} duration={500}>
                      Continous to Checkout
                    </NavLink>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col py-1">
              <h4 className="text-center py-3 text-decoration">Your Items</h4>
              <div>
                <div className="d-flex justify-content-center py-3">
                  <p className="position-relative fw-bolder text-title">
                    Cart{" "}
                    <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1">
                      {totalUniqueItems}
                    </span>
                  </p>
                  <p className="fw-bolder text-title">
                    Total Items{" "}
                    <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1">
                      {totalItems}
                    </span>
                  </p>
                </div>
                <div>
                  <table className="table table-light table-hover m-2">
                    <tbody>
                      {items.map((item, index) => {
                        return (
                          <tr key={index} className="align-middle">
                            <td>
                              <img
                                src={item.pic}
                                className="img-cart"
                                alt={item.title}
                              />
                            </td>
                            <td>{item.title}</td>
                            <td>${item.price}</td>
                            <td>Quantity: {item.quantity}</td>
                            <td>
                              <button
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity - 1)
                                }
                                className="btn btn-outline-danger ms-0"
                              >
                                -
                              </button>
                              <button
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity + 1)
                                }
                                className="btn btn-outline-success ms-0"
                              >
                                +
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="btn btn-outline-danger ms-0"
                              >
                                x
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="d-flex justify-content-between py-5">
                  <button
                    onClick={() => emptyCart()}
                    className="btn btn-outline-danger"
                  >
                    Clear All
                  </button>
                  <h4>Total Price: ${cartTotal}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
