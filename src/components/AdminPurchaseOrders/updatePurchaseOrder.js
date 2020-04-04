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
        purchaseTotalOrder: '',
        quantity: '',
        totalprice: '',
        productName:'',
        productPurchasePrice: '',
        currency:'',
        purchaseProduct:'',
        purchaseSupplier:'',
        suppliersList:[] ,
        productSupplier: " ",
        discountrate:"",
       
        //do ethe khali//this .state.
    }
    
/********************************* */
 //Fetch Country, Supplier and Category List
 componentDidMount() { 

    let initialSuppliers = [];
    const purchase_ord_Id = new URLSearchParams(this.props.location.search).get('purchase_ord_Id');
  
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
                return {id: supplier.SupplierId, suppliername: supplier.SupplierName} 
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

    //Get Purchase order by id API
    axios({
        method: 'GET',
        responseType: 'json',
        url: `http://18.216.15.198:3000/api/purchaseorder/getpurchaseorderbyid?CompanyId=${user.CompanyId}&PurchaseOrderId=${purchase_ord_Id}`,
       
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+token
        }         
    })
    .then(response => {
        
        if(response.data.success == 1){console.log(response.data.data[0]);
            this.setState({ 
                productName: response.data.data[0].ProductName,
                productPurchasePrice: response.data.data[0].PurchasePrice,
                purchaseTotalOrder: response.data.data[0].PurchaseOrderTotal,
                totalPrice: response.data.data[0].Total,
                quantity: response.data.data[0].Quantity,
                currency: response.data.data[0].Currency,
                purchaseProduct: response.data.data[0].ProductId,
                purchaseSupplier:response.data.data[0].SupplierId,
                discountrate:response.data.data[0].DiscountRate,
          })
        }
        
    })        
    .catch(error => {
        console.log("Error:"+ error)
        this.setState({errorMessage: error.response.data.message});
    })

    
}

    //Update product api
    submitHandler = e => {
        const purchase_ord_Id = new URLSearchParams(this.props.location.search).get('purchase_ord_Id');
        const data = new FormData() 
        data.append('purchase_ord_id', purchase_ord_Id)
        data.append('ProductName', this.state.productName)        
        data.append('PurchasePrice', this.state.productPurchasePrice)
        data.append('PurchaseOrderTotal', this.state.purchaseTotalOrder)        
        data.append('Total', this.state.totalPrice)
        data.append('Quantity', this.state.quantity)        
        data.append('CurrencyCurrency', this.state.currency)
        data.append('ProductId', this.state.purchaseProductpurchaseProduct)
        data.append('SupplierId', this.state.productSupplier)
        data.append('DiscountRate', this.state.discountrate)
        data.append('CompanyId', user.CompanyId)
        e.preventDefault();
        axios({
            method: 'PUT',
            responseType: 'json',
            url: `http://18.216.15.198:3000/api/purchaseorder/edit`,data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
            
        })
        .then(response => {
            if(response.data.success === 0){
                this.setState({errorMessage: response.data.message});
            }else{
                this.setState({successMsg: response.data.message})
                window.location.href ='/getPurchaseOrders';
            }                
        })
        .catch(error => {
            //console.log("Error"+error);
            this.setState({errorMessage: error.response.data.message});
        });
    };



    // Start Render Function
    render() {       
      return ( 
        <div class="container-fluid">
            <div class="row">
                <DashboardSidebar/>
                <div class="col-md-9 ml-sm-auto col-lg-10 px-4">                    
                       
                    <div class="float-left"><h3 class="text-primary">Delete Purchase Order</h3></div>                 
                    <form method="post" name="register"  id="SupplierForm" onSubmit={this.submitHandler}>                           
                        <div class="float-right">        
                            <input type="reset" class="btn btn-primary mb-2"  value="Cancel"/>
                            &nbsp;&nbsp;  <input type="submit" class="btn btn-primary mb-2"  value="Update"/>
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