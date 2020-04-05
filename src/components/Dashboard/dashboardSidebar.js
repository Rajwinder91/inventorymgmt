import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class dashboardSidebar extends Component {
    render() {       
      return ( 
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/getSuppliers" className="nav-link">Supplier</NavLink>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="shopping-cart"></span>
                        Customers
                    </a>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/getCategories" className="nav-link">Category</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/getProducts" className="nav-link">Products</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/getCategories" className="nav-link">
                            <svg class="bi bi-columns" width="2em" height="1.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M15 2H1v12h14V2zM1 1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V2a1 1 0 00-1-1H1z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M7.5 14V2h1v12h-1zm0-8H1V5h6.5v1zm7.5 5H8.5v-1H15v1z" clip-rule="evenodd"/>
                            </svg>
                           Category
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/getProducts" className="nav-link">
                            <svg class="bi bi-layout-text-window" width="2em" height="1.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M11 15V4h1v11h-1zm4.5-11H.5V3h15v1zM3 6.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>
                            </svg>
                            Products
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/salesOrders" className="nav-link">
                            <svg class="bi bi-grid" width="2em" height="1.4em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zM2.5 2a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zM1 10.5A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm6.5.5A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3zm1.5-.5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3z" clip-rule="evenodd"/>
                            </svg>
                            Sales Orders
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/deliveries" className="nav-link">Deliveries</NavLink>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Inventory Logs
                    </a>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/userSettings" className="nav-link">User Settings</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/updateCompanySettings" className="nav-link">Company Settings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}
                 
export default dashboardSidebar;