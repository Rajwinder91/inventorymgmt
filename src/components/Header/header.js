import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
class header extends Component {
    render() {
      return (        
            <header>
              <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
                <div className="navbar-header">    
                  <NavLink to="/" className="navbar-brand"><strong><img className="logoImg" src={logo} alt="Inventory Management"/></strong></NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarCollapse">             
                  <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                      <NavLink to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/signup" className="nav-link">Signup</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">Login</NavLink>                      
                    </li>
                  </ul>            
                </div>
              </nav>          
            </header>
        );
    }
  }
  
  export default header;