import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';
import { NavLink } from "react-router-dom";
import axios from 'axios';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();

class changePurchaseOrderStatus extends Component { 
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
                        <div class="float-left"><h3 class="text-primary">Purchase Order/#PPO9888</h3></div>
                    </div> 
                    <div class="row register-form">
                        <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" disabled value="Active"/>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-primary btn-block">Receive Purchase</button>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-danger btn-block">Cancel Purchase</button>
                            </div>
                        </div>
                        <div class="col-md-6 row">
                            <div class="col-md-4">
                                <label>Supplier: </label><br/><br/><br/>
                                <label>Creation Date: </label><br/><br/>
                                <label>Currency: </label><br/>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" class="form-control" value="Supplier"/><br/>
                                    <input type="text" class="form-control" value="28 March 2020"/><br/>
                                    <input type="text" class="form-control" value="CAD"/><br/>
                                </div>
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
         
export default changePurchaseOrderStatus;