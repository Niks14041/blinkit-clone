import React from 'react'
import './bankcard.css'

function Bankcard({title, tax, code, img}) {
    return (
    
        <div className="bank-main">
            <div className="bank-desc">
                <h5 className="bank-title">{title}</h5>
                <p className="bank-min-txn">
                    {tax}
                </p>
                <p className="bank-code">
                    {code}
                </p>

            </div>
            <div className="bank-img">
                <img src={img} alt="" />

            </div>
                
        </div>
                      
)
}

export default Bankcard