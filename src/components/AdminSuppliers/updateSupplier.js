import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';
import axios from 'axios';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();

class updatrSupplier extends Component {

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
export default updatrSupplier;