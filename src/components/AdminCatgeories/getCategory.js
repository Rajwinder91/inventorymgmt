import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';
import { NavLink } from "react-router-dom";
import axios from 'axios';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();
 
class getCategory extends Component { 
    
    //Set state values
    state = {
        CategoryList: []
    }
  
    //Get all Supplier API
    componentDidMount() {
        let initialCategory = [];
        axios({

            method: 'POST',
            responseType: 'json',
            url: `http://18.218.124.225:3000/api/category/getcategories`,
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
                initialCategory = response.data.data.map((category) => {
                    return {id: category.CategoryId, categoryname: category.categoryname, tags: category.tags, Sku:category.SKU} 
                })
                this.setState({
                    CategoryList: initialCategory
                })
                
            }else{
                this.setState({
                    CategoryList: []
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
        return (
            <div class="container-fluid">
                <div class="row">
                    <DashboardSidebar/>
                    <div class="col-md-9 ml-sm-auto col-lg-10 px-4"> 
                        <div class="headings">
                            <div class="float-left"><h3 class="text-primary">Categories</h3></div>
                            <div class="float-right"><NavLink to="/createCategory" className="btn btn-primary">Create Category</NavLink></div>
                        </div>                   
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <table class="table table-bordered table-striped mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Categogy Id</th>
                                        <th scope="col">Category Name</th>
                                        <th scope="col">SKU</th>
                                        <th scope="col">Tags</th>   
                                        <th scope="col">Actions</th>                                 
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.CategoryList.map(category => (
                                        <tr>
                                            <td>{category.id}</td>
                                            <td>{category.categoryname}</td>                                            
                                            <td>{category.Sku}</td>
                                            <td>{category.tags}</td>
                                            <td><NavLink to={`/editCategory?categoryId=${category.id}`}><img src="https://img.icons8.com/bubbles/50/000000/edit.png" title="Update Category"/></NavLink></td>
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
             
export default getCategory;