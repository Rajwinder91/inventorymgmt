import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';
import axios from 'axios';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';

const user = getUser();
const token = getToken();

class updatePurchase_order extends Component{


    //Call render function
    render(){

            return ( 
                <div class="container-fluid">
                    <div class="row">
                        <DashboardSidebar/>
                        <div class="col-md-9 ml-sm-auto col-lg-10 px-4">                    
                            { this.state.errorMessage &&
                                <p className="alert alert-danger"> { this.state.errorMessage } </p>
                            } 
                            { this.state.successMsg &&
                                <p className="alert alert alert-success"> { this.state.successMsg } </p>
                            } 
                            <div class="float-left"><h3 class="text-primary">Update Purchase order</h3></div>                      
                            <form method="post" name="register" onSubmit={this.submitHandler} id="SupplierForm">
                                <div class="float-right">         
                                    <input type="reset" class="btn btn-primary mb-2"  onClick={this.cancelCourse} value="Cancel"/>
                                    &nbsp;&nbsp;  <input type="submit" class="btn btn-primary mb-2"  value="Update"/>
                                </div>
                                <br></br> <br></br> <br></br>
                                <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select name="purchaseSupplier" class="form-control" required
                                            value={this.state.purchaseSupplier}
                                            onChange={e =>
                                                this.setState({
                                                    purchaseSupplier: e.target.value,
                                                errorMessage:
                                                    e.target.value === ""
                                                    ? "You must select supplier"
                                                    : ""
                                                })
                                            }                                            
                                            >
                                            {this.state.suppliersList.map(supplier => (
                                                <option
                                                key={supplier.id}
                                                value={supplier.id}
                                                >
                                                {supplier.suppliername}
                                                </option>
                                            ))}
                                        </select> 
                                    </div>
                                </div>
                                <div class="col-md-6">                                   
                                    <div class="input-group mb-2">
                                        <input type="text" class="form-control" required name="Currency" value={this.state.Currency} onChange={e => this.ChangeHandler(e)} placeholder="Currency*"/> 
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">CAD</div>
                                            <div class="input-group-text">USD</div>
                                            <div class="input-group-text">Euro</div>
                                            <div class="input-group-text">Pound</div>
                                            <div class="input-group-text">Rupee</div>
                                        </div>
                                    </div>                                                   
                                </div>
                                <div class="input-group mb-2">
                                        <input type="text" class="form-control" name="purchaseDiscount" value={this.state.purchaseDiscount} onChange={e => this.ChangeHandler(e)} placeholder="Discount Rate"/>
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">%</div>
                                        </div>
                                    </div> 
                                    <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" required name="productName" value={this.state.productName} onChange={e => this.ChangeHandler(e)} pattern="[a-zA-Z][a-zA-Z ]{2,}" placeholder="Product Name*"/>
                                      </div>
                                   </div>
                                   <div class="col-md-6">                                   
                                    <div class="input-group mb-2">
                                        <input type="text" class="form-control" name="quantity" required value={this.state.quantity} onChange={e => this.ChangeHandler(e)} placeholder="Quantity*"/> 
            
                                    </div> 
                                    <div class="col-md-6">                                   
                                    <div class="input-group mb-2">
                                        <input type="text" class="form-control" required name="productPurchasePrice" value={this.state.productPurchasePrice} onChange={e => this.ChangeHandler(e)} placeholder="Purchase price*"/> 
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">CAD</div>
                                        </div>
                                    </div>                                                   
                                </div>

                                    <div class="input-group mb-2">
                                        <input type="text" class="form-control" name="total_price" required value={this.state.totalPrice} onChange={e => this.ChangeHandler(e)} placeholder="Total Price*"/> 
            
                                    </div>   

                                </div>

                                </div>
                            </form>
                        </div>
                    </div> 
                </div>    
            );
        }
    }

export default updatePurchase_order;