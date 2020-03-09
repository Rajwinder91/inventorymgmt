import React, { Component } from 'react';
class header extends Component {
    render() {
      return (
            <header>
              <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
                <div className="navbar-header">    
                  <a className="navbar-brand" href="#"><strong>Inventory Management</strong></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="javascript:void(0)">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0)">Signup</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="javascript:void(0)">Login</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
        );
    }
  }
  
  export default header;