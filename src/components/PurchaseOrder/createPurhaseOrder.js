import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';

import axios from 'axios';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();



class createPurchaseOrder extends Component {
    
    // Start Render Function
    render() {       
      return ( 
        <div class="container-fluid">
            <div class="row">
                <DashboardSidebar/>
                <div class="col-md-9 ml-sm-auto col-lg-10 px-4">                    
                       
                    <div class="float-left"><h3 class="text-primary">Create Purchase Order</h3></div>                 
                    <form method="post" name="register"  id="SupplierForm">                           
                        <div class="float-right">        
                            <input type="reset" class="btn btn-primary mb-2"  value="Cancel"/>
                            &nbsp;&nbsp;  <input type="submit" class="btn btn-primary mb-2"  value="Save"/>
                        </div>
                        <br></br> <br></br> <br></br>
                        <div class="row register-form">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Search For A Supplier</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div> 
                            </div> 
                        </div> 
                        <div class="form-group row">  
                           <div class="col-md-6">  
                                                      
                                <div class="form-group">
                                <div class="input-group-prepend">
                                    <input type="text" class="form-control" name="currency"  placeholder="Currency"/>
                                    <div class="input-group-text">CAD</div>
                                        </div>
                                    </div>
                                </div>                                         
                          
                           <div class="col-md-6"> 
                                <div class="form-group">
                                    <div class="input-group-prepend">
                                    <input type="text" class="form-control" name="supplierDiscount"  placeholder="Discount Rate"/> 
                                    <div class="input-group-text">%</div>
                                    </div>
                                </div>
                                </div>
                                                                        
                            </div>
                           
                <div class="table-wrapper-scroll-y my-custom-scrollbar">

                    <table class="table table-bordered table-striped mb-0">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Select Product</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select></td>
                                    <td><input type="text" placeholder="Price"/></td>  
                                    <td><input type="text" placeholder="Quantity"/></td>
                                    <td><input type="text" placeholder="Total"/></td>
                                    <td><button type="button" class="btn btn-primary">Delete</button></td>
                        </tr>
                        <tr>
                            <td> <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Select Product</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select></td>
                                    <td><input type="text" placeholder="Price"/></td>  
                                    <td><input type="text" placeholder="Quantity"/></td>
                                    <td><input type="text" placeholder="Total"/></td>
                                    <td><button type="button" class="btn btn-primary">Delete</button></td>
                        </tr>
                        <tr>
                            <td> <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Select Product</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select></td>
                                    <td><input type="text" placeholder="Price"/></td>  
                                    <td><input type="text" placeholder="Quantity"/></td>
                                    <td><input type="text" placeholder="Total"/></td>
                                    <td><button type="button" class="btn btn-primary">Delete</button></td>
                        </tr>
                        <tr>
                            <td> <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Select Product</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select></td>
                                    <td><input type="text" placeholder="Price"/></td>  
                                    <td><input type="text" placeholder="Quantity"/></td>
                                    <td><input type="text" placeholder="Total"/></td>
                                    <td><button type="button" class="btn btn-primary">Delete</button></td>
                        </tr>
                    </tbody>
                    </table>

                    </div>   
                            
                    
                    </form>
                </div>
            </div> 
        </div>          
             
      );
    }
    // End Render Function
  }
  
  export default createPurchaseOrder;