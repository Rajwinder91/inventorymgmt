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
                        <NavLink to="/getCategory" className="nav-link">Category</NavLink>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="bar-chart-2"></span>
                        Products
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Sales Orders
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Stock Level
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Purchase Order
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Deliveries
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Inventory Logs
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        User Settings
                    </a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">
                        <span data-feather="layers"></span>
                        Company Settings
                    </a>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}
                 
export default dashboardSidebar;