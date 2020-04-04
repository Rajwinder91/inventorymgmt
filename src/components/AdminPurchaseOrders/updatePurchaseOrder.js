import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';

import axios from 'axios';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();



class updatePurchaseOrder extends Component {

    /*********************** */
    //Set State values
    state = {
        suppliersList:[] ,
        productSupplier: " ",
        currency:"",
        discountrate:"",
       
        //do ethe khali//this .state.
    }
    
/********************************* */
 //Fetch Country, Supplier and Category List
 componentDidMount() { 

    console.log(token);
    
    let initialSuppliers = [];
  
    //Supplier API
    axios({
        method: 'POST',
        responseType: 'json',
        url: `http://18.216.15.198:3000/api/supplier/getsuppliers`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        },
        data: {
            "CompanyId" : user.CompanyId
        }          
    })
    .then(response => {
        console.log(response.data.success);
        if(response.data.success == 1){
            initialSuppliers = response.data.data.map((supplier) => { 
                return {id: supplier.SupplierId, suppliername: supplier.SupplierName} //do hor//get supplier di api oda oh get 
            })
            this.setState({
                suppliersList: [{id: '', suppliername: 'Please select supplier'}].concat(initialSuppliers)
            })
            
        }else{
            this.setState({
                suppliersList: []
            })
        }
        
    })        
    .catch(error => {
        console.log("Error:"+ error)
        this.setState({errorMessage: error.response});
    })

    
}




/************************************ */
/*
handleChange(event) {

    console.log("Hello");
    let initialProvinces = [];
    this.setState({
       country: event.target.value,
       errorMessage: event.target.value === "" ? "You must select your country" : ""
    });

    axios({
        method: 'POST',
        responseType: 'json',
        url: 'http://18.218.124.225:3000/api/supplier/getsupplierbyId?SupplierId=9',
        data: {
            "country_id" : event.target.value
        }            
    })
    .then(response => {
        //console.log(response.data.success);
        if(response.data.success === 1){
            initialProvinces = response.data.data.map((supplier) => {
                return {value: supplier.SupplierId, display: supplier.DiscountRate} 
            })
            this.setState({
                supplier: [{value: '', display: ''}].concat(initialProvinces)
            })
        }else{
            this.setState({
                supplier: []
            })
        }
    })        
    .catch(error => {
        console.log("Error:"+ error.response)
        this.setState({
            supplier: []
        })
       this.setState({errorMessage: error.response});
    })
}
*/
/********************************/



    // Start Render Function
    render() {       
      return ( 
        <div class="container-fluid">
            <div class="row">
                <DashboardSidebar/>
                <div class="col-md-9 ml-sm-auto col-lg-10 px-4">                    
                       
                    <div class="float-left"><h3 class="text-primary">Delete Purchase Order</h3></div>                 
                    <form method="post" name="register"  id="SupplierForm">                           
                        <div class="float-right">        
                            <input type="reset" class="btn btn-primary mb-2"  value="Cancel"/>
                            &nbsp;&nbsp;  <input type="submit" class="btn btn-primary mb-2"  value="Save"/>
                        </div>
                        <br></br> <br></br> <br></br>
                        <div class="row register-form">
                            <div class="col-md-6">
                            <div class="form-group">


                                    <select name="selectSupplier" class="form-control" required
                                        value={this.state.productSupplier}
                                        onChange={this.handleChange}                              
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
                        </div> 
                        <div class="form-group row">  
                           <div class="col-md-6">  
                                                      
                                <div class="form-group">
                                <div class="input-group-prepend">
                                    <input type="text" class="form-control" name="currency" placeholder="Currency"/>
                                    <div class="input-group-text">CAD</div>
                                        </div>
                                    </div>
                                </div>                                         
                          
                           <div class="col-md-6"> 
                                <div class="form-group">
                                    <div class="input-group-prepend">
                                    <input type="text" class="form-control" name="discountrate" 
                                     value={this.state.discountrate}
                                      placeholder="Discount Rate"/> 
                                    <div class="input-group-text">%</div>
                                    </div>
                                   
                                </div>
                                </div>
                                                                        
                            </div>
                                <div class="col-md-3">
                                    <input type="submit" class="btn btn-primary mb-2"   value="Add"/>
                                   &nbsp;&nbsp; <input type="submit" class="btn btn-primary mb-2"  value="Delete"/>
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
  
  export default updatePurchaseOrder;