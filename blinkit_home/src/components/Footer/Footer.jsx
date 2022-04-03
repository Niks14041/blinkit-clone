import React from 'react'
import './Footer.css'
import PaymentImage from '../HomeImages/payment-method.png'
import facebook from '../HomeImages/facebook.png'
import instagram from '../HomeImages/instagram.png'
import LinkedIn from '../HomeImages/linkedin.png'
import tweeter from '../HomeImages/twitter.png'
function Footer() {
  return (
      <>
          <hr />
          <div className="footer-container">
              
              <div className="footer-top">
                  {/* <img src={firstImage} alt="" /> */}
                    <div className="first-para">
                  <p className='footer-head-bold'>We deliver everything in 10 minutes</p>
             <p className='top-sub-para'>blinkit is India’s fastest online shopping platform. Get fresh groceries and much more delivered online instantly.</p>
              </div>
              <div className="second-para">
                  <p className="footer-head-bold">
                  Single app for all your daily needs
                  </p>
                  <p className='top-sub-para'>
                  Order thousands of products at just a tap: milk, eggs, bread, cooking oil, ghee, atta, rice, fresh fruits and vegetables, spices, fresh meat, seafood, frozen veg and non-veg food, chocolates, chips, biscuits, maggi, cold drinks, shampoos, soaps, body wash, pet food, diapers, electronics, sanitizers, masks, sanitary napkins, health products, hygiene products, organic products and gourmet products, and much more from your neighbourhood stores.
                  </p>
              </div>
              <div className="third-para">
                  <p className="footer-head-bold">Available in following cities</p>
                      <p className='top-sub-para'>
                          The delivery service is operational in Agra, Ahmedabad, Aligarh, Allahabad, Bengaluru, Bhiwadi, Bijnor, Chandigarh, Chennai, Delhi, Durgapur, Faridabad, Gauriganj, Gonda, Gurugram, Guwahati, Hisar, Hyderabad, Jaipur, Jamshedpur, Kanpur, Kolkata, Kota, Lucknow, Mathura, Meerut, Mohali, Moradabad, Mumbai, Noida, Panchkula, Panipat, Pune, Raebareli, Rohtak, Sonipat, Vadodara, Zirakpur</p>
              </div>

              </div>
              <div className="footer-four-flex-box">
                  <div className="delivery-box">
                      <div className="delivery-img">
                       <img src="https://blinkit.com/images/home/express-delivery-icon-93fce76.png" alt="" />

                      </div>
                      <div className="delivery-text">
                          <p className="footer-head-bold">10 minute grocery now
                              <span>
                                  <p className='top-sub-para'>
                                  Get your order delivered to your doorstep at the earliest from dark stores near you.
                                  </p>
                                  </span>
                          </p>
                          {/* <p className='top-sub-para'></p> */}

                      </div>
                  </div>
                  <div className="price-box">
                      <div className="price-img">
                          <img src="https://blinkit.com/images/home/footer-best-price-icon-90b5bd7.png" alt="" />
                      </div>
                      
                      <div className="price-text">
                          <p className="footer-head-bold">Best Prices & Offers
                            <span>
                              <p className='top-sub-para'>
                              Cheaper prices than your local supermarket, great cashback offers to top it off.
                              </p>
                            </span>
                          </p>
                      </div>
                  </div>
                  <div className="assortment-box">
                      <div className="assortment-img">
                          <img src="https://blinkit.com/images/home/footer-genuine-products-icon-d2756ce.png" alt="" />
                      </div>
                      <div className="assortment-text">
                          <p className="footer-head-bold">
                          Wide Assortment
                            <span>
                              <p className='top-sub-para'>
                              Choose from 5000+ products across food, personal care, household & other categories.
                              </p>
                            </span>
                          </p>
                      </div>
                  </div>
                  <div className="return-box">
                      <div className="return-img">
                          <img src="https://blinkit.com/images/home/footer-easy-returns-icon-02b777e.png" alt="" />
                      </div>
                      <div className="return-text">
                      <p className="footer-head-bold">
                      Easy Returns
                            <span>
                              <p className='top-sub-para'>
                              Not satisfied with a product? Return it at the doorstep & get a refund within hours.
                              </p>
                            </span>
                          </p>
                      </div>
                  </div>
              </div>
              <div className="footer-mid">
                  <div className="footer-mid-left">
                    
                      <div className="categories-left">
                      <div className="footer-head-bold">
                          <p>
                              Categories
                             
                          </p>
                          </div>
                          <div className="categories-text">
                              <div className="categories-text-left">
                             
                              <li>
                                 <a href="">vegetables & fruits</a>
                            
                              </li>
                              <li>
                                 <a href="">munchies</a>

                              </li>
                              <li>
                                 <a href="">breakfast & instant food</a>

                              </li>
                              <li>
                                 <a href="">cold drinks & juices</a>

                              </li>
                              <li>
                                 <a href="">atta, rice & dal</a>

                              </li>
                              <li>
                                 <a href="">sauces & spreads</a>

                              </li>
                              <li>
                                 <a href="">organic & healthy living</a>

                              </li>
                              <li>
                                 <a href="">baby care</a>

                              </li>
                              <li>
                                 <a href="">cleaning essentials</a>

                              </li>
                              <li>
                                 <a href="">personal care</a>

                              </li>
                              </div>
                              <div className="categories-text-right">
                              <ul>
                              <li>
                                  <a href="">dairy, bread & eggs</a>
                              </li>
                              <li>
                                  <a href="">bakery & biscuits</a>
                              </li>
                              <li>
                                  <a href="">tea, coffee & health drinks</a>
                              </li>
                              <li>
                                  <a href="">sweet tooth</a>
                              </li>
                              <li>
                                  <a href="">masala, oil & more</a>
                              </li>
                              <li>
                                  <a href="">chicken, meat & fish</a>
                              </li>
                              <li>
                                  <a href="">gourmet & world food</a>
                              </li>
                              <li>
                                  <a href="">pharma & wellness</a>
                              </li>
                              <li>
                                  <a href="">home & office</a>
                              </li>
                              <li>
                                  <a href="">pet care</a>
                              </li>
                          </ul>
                              </div>
                              
                          </div>
                      </div>
                      
                  </div>
                  <div className="footer-mid-right">
                      <div className="footer-company">
                      <p className="footer-head-bold">
                      Company
                      </p>
                          
                              <li>
                                  <a href="">About</a>
                              </li>
                              <li>
                                  <a href="">Careers</a>
                              </li>
                              <li>
                                  <a href="">Blog</a>
                              </li>
                              <li>
                                  <a href="">Press</a>
                              </li>
                              <li>
                                  <a href="">Lead</a>
                              </li>
                              <li>
                                  <a href="">Lead</a>
                              </li>

                          

                      </div>
                      <div className="for-cunsumers">
                      <p className="footer-head-bold">
                      For Consumers
                      </p>
                      
                              <li>
                                  <a href="">Privacy</a>
                              </li>
                              <li>
                                  <a href="">Terms</a>
                              </li>
                              <li>
                                  <a href="">FAQs</a>
                              </li>
                              <li>
                                  <a href="">Security</a>
                              </li>
                              <li>
                                  <a href="">Mobile</a>
                              </li>
                              <li>
                                  <a href="">Contact</a>
                              </li>

                         

                      </div>
                  
                  <div className="for-partners">
                  <p className="footer-head-bold">
                  For Partners
                      </p>
                  
                              <li>
                                  <a href="">Partner</a>
                              </li>
                              <li>
                                  <a href="">Express</a>
                              </li>
                              <li>
                                  <a href="">Local</a>
                              </li>
                              <li>
                                  <a href="">Spotlight</a>
                              </li>
                              <li>
                                  <a href="">Warehouse</a>
                              </li>
                              <li>
                                  <a href="">Deliver</a>
                              </li>

                          
                          </div>
                  </div>
              </div>
              <div className="footer-follow-us">
                  <div className="footer-follow-us-left">
                  <div className="follow-us-text">
                      <p>Follow us</p>
                  </div>
                  <div className="facebook-icon">
                      <a href="https://www.facebook.com/blinkit.india/">
                         <img src={facebook} alt="" />
                      </a>

                  </div>
                  <div className="tweeter-icon">
                      <a href="https://twitter.com/account/access">
                          <img src={tweeter} alt="" />
                      </a>
                  </div>
                  <div className="instagram-icon">
                  <a href="https://www.instagram.com/letsblinkit/">
                          <img src={instagram} alt="" />
                      </a>

                  </div>
                  <div className="linkedin-icon">
                      <a href="https://www.linkedin.com/company/grofers/">
                          <img src={LinkedIn} alt="" />
                      </a>

                  </div>
                      <div className="tweeter-care">
                          <img src={tweeter} alt="" />
                          <span>@blinkitcares</span>
                      </div>
                      <div className="tweeter-eng">
                          <img src={tweeter} alt="" />
                          <span>@blinkiteng</span>
                      </div>
                      <div className="download-app-text-p">
                      <p>Download app</p>
                      </div>
                         <div className="app-images">
                          <div>
                              <img src="https://blinkit.com/images/home/app-store_1x-b88bb81.png" alt="from store" />
                          </div>
                          <div>
                              <img src="https://blinkit.com/images/home/google-play_1x-9335bb6.png" alt="from goog;e paly" />
                          </div>
                      </div>

            </div>
                 
                 
              </div>
              <hr />
              <div className="footer-bottom">
                  <div className="brand-available">
                      <p className='footer-head-bold'>Brands available on blinkit</p>
                      <p>
                          <a href="">grofers Happy Day</a><a href="">grofers Happy Home</a><a href="">grofers Mother's Choice</a><a href="">g Fresh</a><a href="">O'range</a>
                          <a href="">Savemore</a><a href="">24 Mantra</a><a href="">Aashirvaad</a><a href="">Act II</a> <a href="">Amul</a><a href="">Axe</a> <a href="">Bambino</a> <a href="">Best Value</a> <a href="">Bingo</a> <a href="">Bisleri</a> <a href="">Boost</a> <a href="">Bournvita</a> <a href="">Britannia</a> <a href="">Brooke Bond</a> <a href="">Bru</a>
                          Cadbury Cheetos Cinthol Closeup Coca-Cola Colgate Dabur Danone Del Monte Dettol Dhara Dove Durex English Oven Everest Fiama Di Wills Garnier Gatorade Gillette Glucon-D Grocery Gowardhan Hajmola Haldiram's Head & Shoulders Heinz Himalaya Horlicks India Gate Kellogg's Kinley Kissan Knorr L'Oreal Lay's Lijjat Limca Lipton Maggi Madhur McCain MDH Mirinda Minute Maid Mother Dairy Mountain Dew MTR Nescafe Nestle Nivea Nutella Oral-B Oreo Palmolive Pantene Paper Boat Parachute Parle Patanjali Pears Pepsi Pepsodent Pillsbury Princeware Rajdhani Real Red Bull Safal Saffola Shakti Bhog Smith & Jones Sprite Stayfree Sundrop Sunfeast Sunsilk Taj Mahal Tang Tata sampann Tata tea Tetley Thums Up Tropicana Twinings Uncle Chipps Unibic Vaseline Veet Wagh Bakri Wai Wai Whisper Whole Farm
                      </p>
                  </div>
                  <div className="payment-partner">
                      <img src={PaymentImage} alt="" />
                  </div>
              </div>
              
              <div className="footer-last-text-div">
              <hr />
                  <p>
                  "Blinkit " is owned & managed by "Grofers India Private Limited” and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
                  </p>
                  <hr />
                  <p>
                  By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2016-2022 © Grofers India Pvt Ltd. All rights reserved.
                  </p>
              </div>

          </div>
          

      </>
  )
}

export default Footer