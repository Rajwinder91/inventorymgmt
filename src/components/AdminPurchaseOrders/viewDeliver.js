import React, { Component } from 'react';
import DashboardSidebar from '../Dashboard/dashboardSidebar';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';
import { NavLink } from "react-router-dom";
import axios from 'axios';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();

class viewDeliver extends Component { 
    //Set state values
    state = {
        OrderList: [],
        errorMessage: '',
        successMsg: ''
    }

    componentDidMount() {
        const purchaseOrderId = new URLSearchParams(this.props.location.search).get('purchaseOrderId');
        let initialOrder = [];

        //Supplier API
        axios({
            method: 'POST',
            responseType: 'json',
            url: `http://18.216.15.198:3000/api/purchaseorder/getpurchaseorders?PurchaseOrderId=`+purchaseOrderId,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            data: {
                "CompanyId" : 1
            }          
        })
        .then(response => {
            console.log(response.data.success);
            if(response.data.success == 1){
                initialOrder = response.data.data.map((order) => { 
                    return {id: order.SupplierId, orderStatus: order.SupplierName, creationdate: order, products:order.products} 
                })
                this.setState({
                    OrderList: [{id: '', suppliername: 'Select supplier'}].concat(initialOrder)
                })
                
            }else{
                this.setState({
                    OrderList: []
                })
            }
            
        })        
        .catch(error => {
            console.log("Error:"+ error)
            this.setState({errorMessage: error.response});
        })
    }
    render() {
        return (
            <div class="container-fluid">
            <div class="row">
                <DashboardSidebar/>
                <div class="col-md-9 ml-sm-auto col-lg-10 px-4">    
                    <div class="headings">
                        <div class="float-left"><h3 class="text-primary">Deliveries/#PPO9888</h3></div>
                    </div> 
                    <div class="row register-form">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Delivery Status</label>
                                <input type="text" class="form-control" disabled value="Delivered"/>
                            </div>
                            <div class="form-group">
                                <label>Delivery Id</label>
                                <input type="text" class="form-control" disabled value="#PPO9888"/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Creation date </label>
                                <input type="text" class="form-control" disabled value="28 March 2020"/>
                            </div>
                        </div>
                    </div> 
                    <div class="table-wrapper-scroll-y my-custom-scrollbar">
                        <table class="table table-bordered table-striped mb-0">
                            <thead>
                                <tr>
                                    <th scope="col">SKU</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.OrderList.map(order => (
                                    <tr>
                                        <td>{order.id}</td>
                                        <td>{order.supplierName}</td>
                                        <td>{order.date}</td>
                                        <td>{order.totalUnits}</td>
                                        <td>${order.totalPrice}</td>
                                        <td>{order.status}</td>
                                    </tr>
                                ))
                                }                         
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>   
        </div>
    );
    }
//End render Function
}
         
export default viewDeliver;