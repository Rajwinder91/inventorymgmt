import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';
import { NavLink } from "react-router-dom";
import axios from 'axios';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();
 
class getSuppliers extends Component { 
    
    //Set state values
    state = {
        suppliersList: []
    }
  
    //Get all Supplier API
    componentDidMount() {
        let initialSuppliers = [];
        axios({
            method: 'POST',
            responseType: 'json',
            url: `http://18.218.124.225:3000/api/supplier/getsuppliers`,
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
                initialSuppliers = response.data.data.map((supplier) => { console.log(supplier.SupplierId);
                    return {id: supplier.SupplierId, suppliername: supplier.SupplierName, supplieremail: supplier.SupplierEmail, suppliercity: supplier.City} 
                })
                this.setState({
                    suppliersList: initialSuppliers
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
                            <div class="float-left"><h3 class="text-primary">Suppliers</h3></div>
                            <div class="float-right"><NavLink to="/createSupplier" className="btn btn-primary">Create Supplier</NavLink></div>
                        </div>                    
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <table class="table table-bordered table-striped mb-0">
                                <thead>
                                    <tr>
                                    <th scope="col">Supplier Id</th>
                                    <th scope="col">Supplier Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.suppliersList.map(supplier => (
                                        <tr>
                                        <th scope="row">{supplier.id}</th>
                                        <td>{supplier.suppliername}</td>
                                        <td>{supplier.supplieremail}</td>
                                        <td>{supplier.suppliercity}</td>
                                        <td><NavLink to={`/updateSupplier?supplierId=${supplier.id}`}><img src="https://img.icons8.com/bubbles/50/000000/edit.png" title="Update Supplier"/></NavLink></td>
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
             
export default getSuppliers;