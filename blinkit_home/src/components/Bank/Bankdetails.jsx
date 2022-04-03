import React,{ useState} from 'react'
import './bankcard.css'
import Bankcard from './Bankcard'
import {Bank} from './Bankdetailsdata'

function Bankdetails() {
 const [bank, setBank] = useState(Bank)
  return (
      <>
          <section className='main-product-section'>
          <h5>bank & wallet offers</h5>
              <div className="product-items">
                  {
                      bank.map((curItem) => {
                          return <Bankcard key={curItem.id} {...curItem}/>
                      
                    })

                  }
               </div>
          </section>
      </>
  )
}

export default Bankdetails