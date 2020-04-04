import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';
import { NavLink } from "react-router-dom";
import axios from 'axios';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();

class getProducts extends Component { 
   
    //Set state values
    state = {
        productsList: [],
        categoriesList: [],
        suppliersList:[],
        productName: '',
        productSku: '',
        productCat: '',
        productSupplier : '',
        errorMessage: '',
        successMsg: ''
    }
    //Get all Supplier API
    componentDidMount() {
        
        let initialProducts = [];
        let initialCategories = [];
        let initialSuppliers = [];

        let url = '';
        if(this.state.productName || this.state.productSku || this.state.productCat || this.state.productSupplier){
            url =`http://18.216.15.198:3000/api/product/getproducts?ProductName=`+this.state.productName+'&&SKU='+this.state.productSku+'&&category='+this.state.productCat+'&&SupplierName='+this.state.productSupplier;
        }else{
            url =`http://18.216.15.198:3000/api/product/getproducts`;
        }
        axios({

            method: 'POST',
            responseType: 'json',
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            data: {
                "CompanyId" : user.CompanyId
            }          
        })
        .then(response => {
            //console.log(response.data.success);
            if(response.data.success == 1){
                initialProducts = response.data.data.map((product) => { //console.log(product.SupplierId);
                    return {id: product.ProductId, productName: product.ProductName, productSku: product.SKU, productInventory: product.Inventory ,productCat: product.category} 
                })
                this.setState({
                    productsList: initialProducts
                })
                
            }else{
                this.setState({
                    productsList: []
                })
            }
            
        })        
        .catch(error => {
            console.log("Error:"+ error)
            this.setState({errorMessage: error.response.data.message});
        })


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
            this.setState({errorMessage: error.response.data.message});
        })

        //Catgeory API
        axios({
            method: 'POST',
            responseType: 'json',
            url: `http://18.216.15.198:3000/api/category/getcategories`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            data: {
                "CompanyId" : user.CompanyId
            }          
        })
        .then(response => {
            //console.log(response.data.success);
            if(response.data.success == 1){
                initialCategories = response.data.data.map((category) => { 
                    return {id: category.CategoryId, categoryname: category.categoryname} 
                })
                this.setState({
                    categoriesList: [{id: '', categoryname: 'Please select catgeory'}].concat(initialCategories)
                })
                
            }else{
                this.setState({
                    categoriesList: []
                })
            }
            
        })        
        .catch(error => {
            console.log("Error:"+ error)
            this.setState({errorMessage: error.response.data.message});
        })
    }

    ChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    submitHandler = e => {
        e.preventDefault(); 
        this.componentDidMount();
    }

    reset = () => { 
        this.setState({            
            productName: '',
            productSku: '',
            productCat: '',
            productSupplier : ''
        });
    }

    //Delete API
    delete(ProductId) { 
        
        axios({
            method: 'PUT',
            responseType: 'json',
            url: `http://18.216.15.198:3000/api/product/deleteproduct`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            data: {
                "ProductId" : ProductId
            }          
        })
        .then(response => {
            console.log("Response"+response.data);
            if(response.data.success === 0){
                this.setState({errorMessage: response.data.message});
            }else{
                this.setState({successMsg: response.data.message})
                window.location.href ='/getProducts';
            }                
        })
        .catch(error => {
            console.log("Error"+error);
            this.setState({errorMessage: error.response.data.message});
        });  
    }
    //Start render Function
    render() {
        function myFunction() {
            var x = document.getElementById("productFilter");
            if (x.style.display === "none") {
                x.style.display = "flex";
            } else {
                x.style.display = "none";
            }
        }
        return (
            <div class="container-fluid  pt-5 mt-3">
                <div class="row">
                    <DashboardSidebar/>
                    <div class="col-md-9 ml-sm-auto col-lg-10 px-4">    
                        <div class="headings">
                            <div class="float-left"><h3 class="text-primary">Products</h3></div>
                            <div class="float-right"><NavLink to="/createProduct" className="btn btn-primary">Create Product</NavLink></div>
                        </div> 
                        <form method="post" name="register" class="formClass" onSubmit={this.submitHandler}>
                            <div class="float-right">
                                <button  class="btn btn-primary" onClick={myFunction}>Display/Hide Filter</button>&nbsp;&nbsp;
                                <button  class="btn btn-primary" onClick={this.reset}>Reset</button>
                            </div> 
                            <br/><br/><br/><br/>
                            <div id="productFilter" class="row register-form">                                
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <input type="text" class="form-control input-lg" name="productName" value={this.state.productName} onChange={e => this.ChangeHandler(e)} placeholder="Product Name"/>
                                    </div>
                                </div> 
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <input type="text" class="form-control input-lg" name="productSku" value={this.state.productSku} onChange={e => this.ChangeHandler(e)} placeholder="Product Sku"/>
                                    </div>
                                </div>  
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <select name="productCat" class="form-control"
                                            value={this.state.productCat}
                                            onChange={e =>
                                                this.setState({
                                                productCat: e.target.value,
                                                errorMessage:
                                                    e.target.value === ""
                                                    ? "You must select category"
                                                    : ""
                                                })
                                            }                                            
                                            >
                                            {this.state.categoriesList.map(category => (
                                                <option
                                                key={category.id}
                                                value={category.categoryname}
                                                >
                                                {category.categoryname}
                                                </option>
                                            ))}
                                        </select>   
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <select name="productSupplier" class="form-control"
                                            value={this.state.productSupplier}
                                            onChange={e =>
                                                this.setState({
                                                productSupplier: e.target.value,
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
                                                value={supplier.suppliername}
                                                >
                                                {supplier.suppliername}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>                              
                                <div class="col-md-3">
                                    <input type="submit" class="btn btn-primary mb-2"  value="Execute"/>
                                </div>
                            </div>  
                        </form>   
                        { this.state.errorMessage &&
                            <p className="alert alert-danger"> { this.state.errorMessage }</p>
                        } 
                        { this.state.successMsg &&
                            <p className="alert alert alert-success"> { this.state.successMsg }</p>
                        }                
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <table class="table table-bordered table-striped mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Id</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">SKU</th>
                                        <th scope="col">Inventory</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.productsList.map(product => (
                                        <tr>
                                            <td>{product.id}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.productSku}</td>
                                            <td>{product.productInventory}</td>
                                            <td>{product.productCat}</td>
                                            <td><NavLink to={`/updateProduct?productId=${product.id}`}><img src="https://img.icons8.com/bubbles/50/000000/edit.png" title="Update Product"/></NavLink> |  <a href="#" onClick={this.delete.bind(this, product.id)}><img src="https://img.icons8.com/bubbles/50/000000/delete-sign.png" title="Delete Product"/></a></td>
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
             
export default getProducts;