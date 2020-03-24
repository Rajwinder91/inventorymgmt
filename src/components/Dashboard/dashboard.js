import React, { Component } from 'react';
import { getUser } from '../Utils/common';
import DashboardSidebar from './dashboardSidebar';

/* Get User From Session */
const user = getUser();
 
class dashboard extends Component { 
    render() {
        return (
            <div class="container-fluid">
              <div class="row">
                <DashboardSidebar/>
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