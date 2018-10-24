import React, {Component} from 'react';
import "../style/navbar.css"
import {NavLink,Link} from 'react-router-dom';
import Signup from '../component/signup.js'
class Navbar extends Component
{
	render()
	{
		return(

			<nav className="navbar navbar-expand-md py-0   fixed-top">
<div className="container-fluid">


  <NavLink className="navbar-brand" to="/home.js">
  <img src={require('../asset/SwachCoin.jpg')} alt="" id="logo" />
  </NavLink>
 
  <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="nav navbar-nav navbar-right ml-auto">
    <li className="nav-item">
        <NavLink className="nav-Link" to="/">Home</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-Link" to="/About">About Us</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-Link" to="/share.js">Team</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-Link" to="/share.js">Features</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-Link" to="/share.js">Wallet</NavLink>
      </li> 
      <li className="nav-item">
        <NavLink className="nav-Link" to="/Home">Contact Us</NavLink>
      </li>  
      <li className="nav-item">
        <NavLink className="nav-Link" to="/Signup" data-toggle="modal" data-target="#myModal">Login</NavLink>
      </li> 
    </ul>
      <Signup/>
    </div>

  </div> 
</nav>


			);
	}
}

export default Navbar