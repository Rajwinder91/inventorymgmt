import React, { Component } from 'react';
import { getUser, removeUserSession } from '../Utils/common';

/* Get User From Session */
const user = getUser();
const handleLogout = (props) => {
    removeUserSession();
    window.location.href ='/login';
}
class afterLoginNav extends Component {
    render() {
      return (  
            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                    <span className="nav-link">Welcome {user.Fname}</span>
                </li>
                <li className="nav-item">
                    <a href="javascript:void(0)" className="nav-link" onClick={handleLogout}>Logout</a>
                </li>
        </ul>  
      );
    }
}

export default afterLoginNav;