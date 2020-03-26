import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';
import axios from 'axios';
import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';

/* Get User and Token From Session */
const user = getUser();
const token = getToken();

class editCategory extends Component {

    //Set the update supplier state values
    state = {
        catename: '',
        Tags: '',
        cateSKU: ''
    }
    handleChange = this.handleChange.bind(this);  
    
    componentDidMount() { 
            
        const categoryid = new URLSearchParams(this.props.location.search).get('categoryId');

        //Get category by id API
        axios({
            method: 'GET',
            responseType: 'json',
            url: `http://18.218.124.225:3000/api/category/getcategorybyId?CategoryId=${categoryid}&CompanyId=${user.CompanyId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }         
        })
        .then(response => {
            
            if(response.data.success === 1){console.log(response.data.data[0].categoryname);
                this.setState({ 
                    categoryname: response.data.data[0].catename,
                    tags: response.data.data[0].Tags,
                    SKU: response.data.data[0].cateSKU,
                    categoryId: response.data.data[0].categoryId
              })
            }
            
        })        
        .catch(error => {
            console.log("Error:"+ error)
            this.setState({errorMessage: error.response});
        })
    }


    //Cancel Button functionality
    cancelCourse = () => {     
        window.location.href ='/getCategory';   
    }

    //Get form values on chnage handler
    ChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    };

    //Submit supplier form after clicking on save button || Call Update supplier api
    submitHandler = e => {
        const categoryid = new URLSearchParams(this.props.location.search).get('categoryId');
        e.preventDefault();
            axios({
                method: 'PUT',
                responseType: 'json',
                url: `http://18.218.124.225:3000/api/category/editcategory`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token
                },
                data: {
                    "categoryId"  : categoryid,
                    "categoryname" : this.state.catename,
                    "tags" : this.state.Tags,
                    "SKU": this.state.cateSKU,
                    
                }
                
            })
            .then(response => {
                if(response.data.success === 0){
                    this.setState({errorMessage: response.data.message});
                }else{
                    this.setState({successMsg: response.data.message})
                    window.location.href ='/getCategory';
                }                
            })
            .catch(error => {
                //console.log("Error"+error);
                this.setState({errorMessage: error.response.data.message});
            });
    };

    //Call render function
    render() {
        return (
          <div class="container-fluid">
              <div class="row">
                  <DashboardSidebar/>
                  <div class="col-md-9 ml-sm-auto col-lg-10 px-4">                    
                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          { this.state.errorMessage &&
                              <p className="alert alert-danger"> { this.state.errorMessage } </p>
                          } 
                          { this.state.successMsg &&
                              <p className="alert alert alert-success"> { this.state.successMsg } </p>
                          } 
                      <h3 class="text-primary h3cate">Edit Category</h3>
                          <div className="col-md-12">
                              <form method="post" name="register" onSubmit={this.submitHandler}>
                                  <div  class="top_button">         
                                      <input type="submit" class="btn btn-primary mb-2" onClick={this.cancelCourse} value="Cancel"/>
                                      &nbsp;&nbsp;  <input type="submit" class="btn btn-primary mb-2"  value="Save"/>
                                  </div>
                         
                                      <div class="col-md-9">                    
                                          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                              <div class="create_cate">  
                                  
                                                  <div class="row register-form">
                                                       <div class="col-md-6">
                                                          <div class="form-group">
                                                           <input type="text" class="form-control input-lg" required name="catename" value={this.state.catename} onChange={e => this.ChangeHandler(e)} placeholder="Category Name*"/>
                                                          </div>
                                                      </div>
                              
                              
                                                      <div class="form-group">
                                                           <input type="text" class="form-control input-lg" name="cateSKU" value={this.state.cateSKU} onChange={e => this.ChangeHandler(e)} required placeholder="SKU*"/>
                                                      </div>  
                                                               
                                                  
                                                      <div class="col-md-6">
                                                          <div class="form-group">
                                                               <input type="text" required name="Tags" value={this.state.Tags} onChange={e => this.ChangeHandler(e)} class="form-control input-lg" placeholder="Tags"/>
                                                          </div> 
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                   </div>
                           </form>
                      </div>
                  </div>
              </div>
          </div> 
      </div>    
     );
    }
}
export default editCategory;