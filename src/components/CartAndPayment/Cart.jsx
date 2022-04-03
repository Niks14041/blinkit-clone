import React, { useState } from "react";
import './Cart.css'
import {Link} from "react-router-dom"

function Cart() {
    const [count,setCount] = useState(1);
    return (
        <div className="cart">
            <div className="cart-div">
                <div className="my-cart">
                    <span>my cart</span>
                    <span><i className="uil uil-times"></i></span>
                </div>
                <div className="cart-item-count">
                    <span>shipment 1 of 1</span>
                    <span>1 item</span>
                </div>
                <div className="cart-item-head">
                    <div className="cart-del">delivery in 13 minutes</div>
                    <div className="cart-st">from Super Store - Gurgaon Gwal Pahari ES31</div>
                </div>
                <div id="cart-items">
                    <div className="cart-pro">
                        <div className="item-img">
                            <img width={"100%"} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/336515a.jpg" alt="" />
                        </div>
                        <div className="item-details">
                            <div className="item-details-head">Green Apple</div>
                            <div className="item-details-price">₹53 <span>₹88</span></div>
                            <div className="item-details-weight">
                                3 pieces
                                <div className="item-details-count">
                                    <button onClick={() => {if(count > 1){setCount(count-1)}}}>-</button>
                                    <span>{count}</span>
                                    <button onClick={() => {setCount(count+1)}}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-pro">
                        <div className="item-img">
                            <img width={"100%"} src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=250,h=250/app/images/products/sliding_image/311058a.jpg" alt="" />
                        </div>
                        <div className="item-details">
                            <div className="item-details-head">Avacado</div>
                            <div className="item-details-price">₹391 <span>₹482</span></div>
                            <div className="item-details-weight">
                                3 pieces
                                <div className="item-details-count">
                                    <button onClick={() => {if(count > 1){setCount(count-1)}}}>-</button>
                                    <span>{count}</span>
                                    <button onClick={() => {setCount(count+1)}}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-bill">
                    <div className="cart-bill-head">bill details</div>
                    <div className="cart-bill-details">
                        <div>
                            <span>MRP</span>
                            <span>₹570</span>
                        </div>
                        <div>
                            <span>product discount</span>
                            <span>-₹91</span>
                        </div>
                        <div>
                            <span>packaging charge</span>
                            <span>free</span>
                        </div>
                        <div>
                            <span>delivery charges</span>
                            <span>free</span>
                        </div>
                        <div className="cart-bill-totalPrice">
                            <span>bill total</span>
                            <span>₹444</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="cart-bill-promo">promo code can be applied on payments screen</div>
                </div>
                <div className="cart-pay">
                    <div className="cart-payment">
                        <span>2 items</span>
                        <div className="cart-pay-total">₹444 <span>₹570</span></div>
                        <div className="cart-pay-text"><Link to="/payment">proceed to pay</Link><i className="uil uil-angle-right-b"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Cart };