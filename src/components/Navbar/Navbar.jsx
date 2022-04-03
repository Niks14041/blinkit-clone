import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<div id='background'>
    <div className='navbar'>
      <div><Link to={"/vegetables&fruits/fruits"}>vegetables & fruits</Link></div>
      <div><Link to={"/dairy&eggs/milk"}>dairy, bread & eggs</Link> </div>
      <div>backery & biscuits</div>
      <div>tea, coffeee & health drinks</div>
      <div>munchies</div>
    </div>
</div>
  )
}

export default Navbar