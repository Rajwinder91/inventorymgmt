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
                        <NavLink to="/salesOrders" className="nav-link">Sales Orders</NavLink>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Stock Level
                    </a>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/getPurchaseOrders" className="nav-link">Purchase Orders</NavLink>
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