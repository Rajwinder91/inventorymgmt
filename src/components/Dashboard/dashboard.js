import React, { Component } from 'react';
import { getUser, removeUserSession } from '../Utils/common';

/* Get User From Session */
const user = getUser();
const handleLogout = (props) => {
    removeUserSession();
    window.location.href ='/login';
}
 
class dashboard extends Component { 
    render() {
        return (
            <div class="container-fluid">
              <div class="row">
                <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                  <div class="sidebar-sticky">
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <a class="nav-link active" href="#">
                          <span data-feather="home"></span>
                          Dashboard <span class="sr-only">(current)</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <span data-feather="file"></span>
                          Suppliers
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <span data-feather="shopping-cart"></span>
                          Customers
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <span data-feather="users"></span>
                          Categories
                        </a>
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
                <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                    <h1 class="text-primary"> Welcome {user.Fname}!</h1>
                    <p>Inventory management software is a software system for tracking inventory levels, orders, sales and deliveries. It can also be used in the manufacturing industry to create a work order, bill of materials and other production-related documents.</p>
                </main>
              </div>
            </div>          
        );
    }
}
             
export default dashboard;