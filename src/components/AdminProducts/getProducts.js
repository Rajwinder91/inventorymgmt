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
        productsList: []         
    }
  
    //Get all Supplier API
    componentDidMount() {

        let initialProducts = [];
        axios({

            method: 'POST',
            responseType: 'json',
            url: `http://18.218.124.225:3000/api/product/getproducts`,
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
                initialProducts = response.data.data.map((product) => { console.log(product.SupplierId);
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
            this.setState({errorMessage: error.response});
        })

        // get the delete product API's
        axios({

            method: 'PUT',
            responseType: 'json',
            url: `http://18.218.124.225:3000/api/product/deleteproduct`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            },
            data: {
                "CompanyId" : 1,
                "productId" : 1
                //"CompanyId" : user.CompanyId
            }          
        })
        

        .then(response => {
            console.log(response.data.success);
            if(response.data.success == 1){
                initialProducts = response.data.data.map((product) => { console.log(product.productId);
                    //return response.json();
                    return {id: product.ProductId}/*{, productName: product.ProductName, productSku: product.SKU, productInventory: product.Inventory ,productCat: product.category} */
                })

                this.setState({
                    productsList: initialProducts
                })
                
            }else{
                this.setState({
                    productsList: []
                })
            }
            //this.handleDelete = this.handleDelete.bind(this);
        })        
        .catch(error => {
            console.log("Error:"+ error)
            this.setState({errorMessage: error.response});
        })
        

        
    }
    
   /*
    delete(productId) {
       console.log(productId);
      // window.location.href ='/getProduct'; 
    }*/

    delete(productId){
           // console.log("remove"+ productId);
           //const product= this.state.product.filter(product =>{
             //  return product !== productId;
           this.setState(state =>({
               data: state.data.filter((productsList,product) =>product !== productId)
           }));
            }

           //this.setState({
           //    productsList: [...product]
           //})
        
    //Start render Function
    render() {
        /*function refreshPage() {
            window.location.reload(false);
        }
        */
        return (
            <div class="container-fluid">
                <div class="row">
                    <DashboardSidebar/>
                    <div class="col-md-9 ml-sm-auto col-lg-10 px-4">   
                        <div class="headings">
                            <div class="float-left"><h3 class="text-primary">Products</h3></div>
                            <div class="float-right"><NavLink to="/createProduct" className="btn btn-primary">Create Product</NavLink></div>
                        </div>                   
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
                                            <td><NavLink to={`/updateProduct?productId=${product.id}`}><img src="https://img.icons8.com/bubbles/50/000000/edit.png" title="Update Product"/></NavLink> | 
                                            <NavLink to={`/getProducts?productId=${product.id}`}><img src="https://img.icons8.com/bubbles/50/000000/delete-sign.png" title="Delete Product" 
                                            onclick={()=> this.delete(product)}
                                            /></NavLink></td>
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