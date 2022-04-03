import React from "react";
import "./header.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MobileFriendlyOutlinedIcon from '@mui/icons-material/MobileFriendlyOutlined';

const Header = () => {
    return (
      
        <div className="header max-width">
            
            <a href="#">
            <img src="https://blinkit.com/images/header/blinkit-logo-05a0b5f.png" alt="blinkit_logo" className="header-logo"/>
            </a>
        <div className="header-mid">
        <div className="header-search-container">
            <div className="location-wrapper">
              {/* vigneshPrabhu - add onClick here for location */}
                        <div className="location_text"  >
                            <h5>delivery in 25 minutes</h5>
                              <span>Hallow Pul, Kurla, Mumbai
                  <i className="fi fi-rr-caret-down absolute-center "></i>
                </span>
                </div>
            </div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for products"
            />
          </div>
        </div>

        <div className="header-right">
         
          <div className="header-login">login</div>
                    <div className="header-cart">
                            <span className="header-cart-icon"><ShoppingCartOutlinedIcon /></span>
                            
                            <span className="header-cart-text">my cart</span> 
                    </div>
                    <div className="header-get-app">
                        <span className="header-mobile-icon">
                            <MobileFriendlyOutlinedIcon/>
                    </span>
                            
                            <span className="header-mobile-text">get the app</span> 
                    </div>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
