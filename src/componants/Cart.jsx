import React, { useState } from "react";
import './Cart.css'

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
                            <img width={"100%"} src="http://cdn.grofers.com/app/images/products/normal/pro_247758.jpg?ts=1647250193" alt="" />
                        </div>
                        <div className="item-details">
                            <div className="item-details-head">Safeda Mango</div>
                            <div className="item-details-price">₹301 <span>₹378</span></div>
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
                            <img width={"100%"} src="http://cdn.grofers.com/app/images/products/normal/pro_247758.jpg?ts=1647250193" alt="" />
                        </div>
                        <div className="item-details">
                            <div className="item-details-head">Safeda Mango</div>
                            <div className="item-details-price">₹301 <span>₹378</span></div>
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
                            <span>₹527</span>
                        </div>
                        <div>
                            <span>product discount</span>
                            <span>-₹81</span>
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
                            <span>₹446</span>
                        </div>
                    </div>
                    <hr/>
                    <div className="cart-bill-promo">promo code can be applied on payments screen</div>
                </div>
                <div className="cart-pay">
                    <div className="cart-payment">
                        <span>2 items</span>
                        <div className="cart-pay-total">₹446 <span>₹527</span></div>
                        <div className="cart-pay-text">proceed to pay <i className="uil uil-angle-right-b"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Cart };