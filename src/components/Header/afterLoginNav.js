import React, { Component } from 'react';
import { getUser, removeUserSession } from '../Utils/common';
import { NavLink } from "react-router-dom";

/* Get User From Session */
const user = getUser();
const handleLogout = (props) => {
    removeUserSession();
    window.location.href ='/login';
}
class afterLoginNav extends Component {
    render() {
      return (  
        <nav className="navbar navbar-expand-md navbar-dark bg-info zindex">
            <div className="navbar-header">    
                <NavLink to="/" className=""><strong><img className="logoImg" src={user.Logo} alt="Inventory Management"/></strong></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                        <span className="nav-link">Welcome {user.Fname}</span>
                    </li>
                    <li className="nav-item">
                        <a href="javascript:void(0)" className="nav-link" onClick={handleLogout}>Logout</a>
                    </li>
                </ul>  
            </div> 
        </nav>
      );
    }
}

export default afterLoginNav;