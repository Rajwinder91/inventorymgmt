import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { getToken } from '../Utils/common';
import logo from '../../images/logo.png';
import BeforeLoginNav from './beforeLoginNav';
import AfterLoginNav from './afterLoginNav';

/* Get User Token From Session */
const userToken = getToken();
let navigation;
if(userToken){
  navigation = <AfterLoginNav/>; 
}else{
  navigation = <BeforeLoginNav/>;
}

class header extends Component {
    render() {
      return (        
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-info zindex">
            <div className="navbar-header">    
              <NavLink to="/" className=""><strong><img className="logoImg" src={logo} alt="Inventory Management"/></strong></NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarCollapse">             
              {navigation}
            </div>
          </nav>          
        </header>
      );
    }
  }
  
  export default header;