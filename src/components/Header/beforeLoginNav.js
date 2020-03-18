import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class beforeLoginNav extends Component {
    render() {
      return (  
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
      );
    }
}

export default beforeLoginNav;