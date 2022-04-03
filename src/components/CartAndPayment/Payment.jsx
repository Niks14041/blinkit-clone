import React from "react";
import './Payment.css';
import { useNavigate } from "react-router-dom";

function Payment() {

    const navigate = useNavigate();

    const handleSubmit = () =>{
        alert("Payment Successfull");
        navigate("/")
    }
    return (
        <div className="pay">
            <div className="pay-main">
                <div className="pay-left">
                    <div className="pay-left-head">Payment</div>
                    <div className="pay-total-div">
                        <div className="color">
                            <span>Total Amount</span>
                            <span>₹446</span>
                        </div>
                        <div className="pay-total-line"></div>
                        <div>
                            <span>Amount Payable</span>
                            <span>₹446</span>
                        </div>
                    </div>
                    <div className="pay-card-box">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="card-number">Card Number</label>
                            <input type="number" className="card-number" placeholder="Card Number" maxLength={16} />
                            <label htmlFor="valid-through" className="valid">Valid Through</label>
                            <input type="num" className="card-date" maxLength={2} placeholder="MM" />
                            <input type="num" className="card-date" placeholder="YY" maxLength={2} />
                            <label htmlFor="cvv" className="cvv">CVV</label>
                            <input type="num" className="card-cvv" maxLength={4} />
                            <input type="submit" className="card-pay-btn" value={"PayNow"}/>
                        </form>
                    </div>
                </div>
                <div className="pay-right">
                    <div className="pay-right-head">
                        <span>My Cart</span>
                        <span>2 items</span>
                    </div>
                    <div className="pay-right-item">
                        <div className="pay-right-pro">
                            <div className="pay-item-img">
                                <img width={"100%"} src="https://cdn.grofers.com/app/images/products/sliding_image/11020a.jpg" alt="" />
                            </div>
                            <div className="pay-item-details">
                                <div className="item-det-head">Cadbury Dairy Milk Home</div>
                                <div className="item-det-price">₹145</div>
                            </div>
                        </div>
                        <div className="pay-right-pro">
                            <div className="pay-item-img">
                                <img width={"100%"} src="https://cdn.grofers.com/app/images/products/sliding_image/11020a.jpg" alt="" />
                            </div>
                            <div className="pay-item-details">
                                <div className="item-det-head">Cadbury Dairy Milk Home</div>
                                <div className="item-det-price">₹145</div>
                            </div>
                        </div>
                        <div className="pay-right-pro">
                            <div className="pay-item-img">
                                <img width={"100%"} src="https://cdn.grofers.com/app/images/products/sliding_image/11020a.jpg" alt="" />
                            </div>
                            <div className="pay-item-details">
                                <div className="item-det-head">Cadbury Dairy Milk Home</div>
                                <div className="item-det-price">₹145</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;