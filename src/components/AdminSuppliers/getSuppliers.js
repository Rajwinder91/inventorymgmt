import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';

 
class getSuppliers extends Component { 
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <DashboardSidebar/>
                    <div class="col-md-9 ml-sm-auto col-lg-10 px-4">   
                    </div>
                </div>
            </div>
        );
    }
}
             
export default getSuppliers;