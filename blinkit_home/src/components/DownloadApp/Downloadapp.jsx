import React from 'react'
import "../Body/Body"

function Downloadapp() {
    return (
        <>
             <hr></hr>
            <div className="download-app-container">
            
              <div className="download-app-image">
                  <div className="download-app-img-loader">
                      <img src="https://blinkit.com/images/home/blinkit-get-app-993fc22.png" alt="Download blinkit app" />
                  </div>
              </div>
              <div className="download-app-link">
                  <h1>get the blinkit app</h1>
                  <p>We will send you a link, open it on your phone to download the app</p>
                  <div className="radio-div">
                      <span>
                      <input type="radio" />
                  <label htmlFor="email">email</label>
                      </span>
    
                      <span>
                      <input type="radio" />
                  <label htmlFor="number">phone</label>
                  </span>
                
                  </div>
                  <div className="input-email">
                      <input type="text"placeholder='Email'/>
                      <button className='share-link-btn'>
                          share app link
                      </button>
                  </div>
                  <div className="download-app-store">
                      <p>Download app from</p>
                      <div className="app-images">
                          <span>
                              <img src="https://blinkit.com/images/home/app-store_1x-b88bb81.png" alt="from store" />
                          </span>
                          <span>
                              <img src="https://blinkit.com/images/home/google-play_1x-9335bb6.png" alt="from google play" />
                          </span>
                      </div>
                  </div>
                  
              </div>
              
</div>
      </>
  )
}

export default Downloadapp