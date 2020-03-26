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
            console.log(response.data.success);
            if(response.data.success === 1){
                initialCategory = response.data.data.map((category) => { console.log(category.categoryId);
                    return {id: category.categoryId, categoryname: category.catename, tags: category.tags, Sku:category.cateSKU} 
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
        /*function refreshPage() {
            window.location.reload(false);
        }
        */
        return (
            <div class="container-fluid">
                <div class="row">
                    <DashboardSidebar/>
                    <div class="col-md-9 ml-sm-auto col-lg-10 px-4">                 
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3 class="text-primary">Category</h3>
                            <div class="top_button">
                                <div class="form-group">
                                    <NavLink to="/createCategory" className="btn btn-primary">Create Category</NavLink>
                                </div>
                            </div>
                        </div>                    
                        <div class="table-wrapper-scroll-y my-custom-scrollbar">
                            <table class="table table-bordered table-striped mb-0">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Category Name</th>
                                    <th scope="col">SKU</th>
                                    <th scope="col">Tags</th>
                                  
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.CategoryList.map(category => (
                                        <tr>
                                        <th scope="row">{category.id}</th>
                                        <td>{category.categoryname}</td>
                                        <td>{category.tags}</td>
                                        <td>{category.Sku}</td>
                                        <td><NavLink to={`/editCategory?categoryId=${category.id}`} className="btn btn-primary">Edit Category</NavLink></td>
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