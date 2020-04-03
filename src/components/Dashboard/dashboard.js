import React, { Component } from 'react';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';
import DashboardSidebar from './dashboardSidebar';
import axios from 'axios';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();
 
class dashboard extends Component { 

  //Set state values
  state = {
     highestSoldProducts:'',
     lowestSoldProducts: '',
     currentIncomingProducts:''
  } 

   //Get Dashboard API
  componentDidMount() {

      //Get Highest Sold Products
      axios({
          method: 'GET',
          responseType: 'json',
          url: `http://18.216.15.198:3000/api/sales/getmostsoldproduct?companyid=${user.CompanyId}`,
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer '+token
          }         
      })
      .then(response => {
          //console.log(response.data.success);
          if(response.data.success == 1){
            if(response.data.data.length > 0){
              this.setState({highestSoldProducts: response.data.data[0].Quantity});
            }
          }else{
            this.setState({errorMessage: response.data.message });
          }          
      })        
      .catch(error => {
          this.setState({errorMessage:  error.response.data.message});
      })

      //Get Lowest Sold Products
      axios({
        method: 'GET',
        responseType: 'json',
        url: `http://18.216.15.198:3000/api/sales/getlowestsoldproduct?companyid=${user.CompanyId}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }         
      })
      .then(response => {
          //console.log(response.data.success);
          if(response.data.success == 1){
            if(response.data.data.length > 0){
              this.setState({lowestSoldProducts: response.data.data[0].Quantity});
            }
          }else{
            this.setState({errorMessage: response.data.message });
          }          
      })        
      .catch(error => {
          this.setState({errorMessage:  error.response.data.message});
      })

      //Current Incoming Products
      axios({
        method: 'GET',
        responseType: 'json',
        url: `http://18.216.15.198:3000/api/product/incoming_products?CompanyId=${user.CompanyId}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }         
      })
      .then(response => {
          //console.log(response.data.success);
          if(response.data.success == 1){
            if(response.data.data){
              this.setState({currentIncomingProducts: response.data.data});
            }
          }else{
            this.setState({errorMessage: response.data.message });
          }          
      })        
      .catch(error => {
          this.setState({errorMessage:  error.response.data.message});
      })
  }
    render() {
        return (
            <div class="container-fluid  pt-5 mt-3">
              <div class="row">
                <DashboardSidebar/>
                <div class="col-md-12 margin-dashboard px-4"> 
                    { this.state.errorMessage &&
                        <p className="alert alert-danger"> { this.state.errorMessage } </p>
                    }
                    <h1 class="display-4 d-none d-sm-block text-primary"> Welcome {user.Fname}!</h1>
                    <p class="lead d-none d-sm-block">Inventory management.</p>
                    <div class="row mb-3">
                      <div class="col-xl-4 col-sm-6 py-2">
                          <div class="card bg-success text-white h-100">
                              <div class="card-body bg-success">
                                  <div class="rotate">
                                      <i class="fa fa-user fa-4x"></i>
                                  </div>
                                  <h6 class="text-uppercase">Highest Sold Products</h6>
                                  <h1 class="display-4">{this.state.highestSoldProducts ? this.state.highestSoldProducts : 0}</h1>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-sm-6 py-2">
                          <div class="card text-white bg-danger h-100">
                              <div class="card-body bg-danger">
                                  <div class="rotate">
                                      <i class="fa fa-list fa-4x"></i>
                                  </div>
                                  <h6 class="text-uppercase">Lowest Sold Products</h6>
                                  <h1 class="display-4">{this.state.lowestSoldProducts ? this.state.lowestSoldProducts : 0}</h1>
                              </div>
                          </div>
                      </div>
                      <div class="col-xl-4 col-sm-6 py-2">
                          <div class="card text-white bg-info h-100">
                              <div class="card-body bg-info">
                                  <div class="rotate">
                                      <i class="fa fa-twitter fa-4x"></i>
                                  </div>
                                  <h6 class="text-uppercase">Current Incoming Products</h6>
                                  <h1 class="display-4">{this.state.currentIncomingProducts ? this.state.currentIncomingProducts : 0}</h1>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>          
        );
    }
}
             
export default dashboard;