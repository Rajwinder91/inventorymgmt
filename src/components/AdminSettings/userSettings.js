import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';
import axios from 'axios';

import { getUser } from '../Utils/common';
import { getToken } from '../Utils/common';

const user = getUser();
const token = getToken();

class userSettings extends Component {
    state ={
        fname:'',
        lname:'',
        emailAddress: '',
        phone: '',
        currentpassword: '',
        newpassword:'',
        confirmpassword:'',
        errorMessage: '',
        successMsg:'',
    }

    componentDidMount() { 
        //Get user profile by id API
        //const uderid = new URLSearchParams(this.props.location.search).get('userid');
        axios({
            method: 'GET',
            responseType: 'json',
            url: `http://18.216.15.198:3000/api/customeruser/getuserdetailsbyid?userid`,
            
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }         
        })
        .then(response => {            
            if(response.data.success == 1){console.log(response.data.data);
                this.setState({ 
                    fstname:response.data.data.fname,
                    lstname:response.data.data.lname,
                    emailAddress: response.data.data.email,
                    phone:response.data.data.phonenumber
              })
            }
            
        })        
        .catch(error => {
            console.log("Error:"+ error)
            this.setState({errorMessage: error.response});
        })
    }

    //Reset Button functionality
    cancelCourse = () => { 
        this.setState({
            fname: '',
            lname :'',
            emailAddress: '',
            phone: '',
            currentpassword: '',
            newpassword:'',
            confirmpassword:'',
        });
    }
    // Get form values on change handler
    ChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    };
    
    //Update user api
    submitHandler = e =>{
        const data = new FormData() 
        data.append('fname', user.fname)
        data.append('lname', this.state.lname)
        data.append("email" , this.state.emailAddress)
        data.append("phonenumber", this.state.phone)        
        data.append("password", this.state.currentpassword)
          
        e.preventDefault();
        axios({
            method: 'POST',
            responseType: 'json',
            url: `http://18.216.15.198:3000/api/companyuser/edituser`,data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }            
        })
        .then(response => {
            if(response.data.success == 0){
                this.setState({errorMessage: response.data.message});
            }else{
                this.setState({successMsg: response.data.message})
            }                
        })
        .catch(error => {
            //console.log("Error"+error);
            this.setState({errorMessage: error.response.data.message});
        });
    };
            updateButton() {
                if (this.state.currentPassword.trim().length == 0) {
                    console.log("Please enter current password");
                } else if (this.state.newPassword.trim().length == 0) {
                    console.log("Please enter new password");
                } else if (this.state.newPassword != this.state.confirmPassword) {
                    console.log("Password dose not match");
                } else {
                    this.changePassword();
                }
            }

            

    //Call render function
    render() {       
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
                        
                        <div class="float-left"><h3 class="text-primary">User Settings</h3></div>                       
                        <form method="post" name="register" onSubmit={this.submitHandler}>
                            <div class="float-right">
                            <input type="submit" class="btn btn-primary mb-2"  value="Cancel" onClick={this.cancelCourse} />
                                &nbsp;&nbsp;  <input type="submit" class="btn btn-primary mb-2"  value="Update" onclick={this.updateButton}/>
                            </div>
                            <br></br> <br></br> <br></br>
                            <div class="row register-form">                                
                            <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" required pattern="[A-Za-z]{1,20}" title="Firstname should only contain lowercase and uppercase letters. e.g. John" name="fname" value={this.state.fname} onChange={e => this.ChangeHandler(e)} placeholder="First Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" required name="emailAddress" placeholder="Email Address*" value={this.state.emailAddress} onChange={e => this.ChangeHandler(e)} />
                                    </div> 
                                    <div class="form-group">
                                        <input type="password" class="form-control" minlength="8" required pattern="^(?=.*\d).{8,15}$" title="Password must be between 8 and 15 digits long and include at least one numeric digit." name="currentpassword" placeholder="Current Password" value={this.state.currentpassword} onChange={e => this.ChangeHandler(e)} />
                                    </div>
                                    
                                    <div class="form-group">
                                        <input type="password" class="form-control" minlength="8" required pattern="^(?=.*\d).{8,15}$" title="Password must be between 8 and 15 digits long and include at least one numeric digit." name="confirmpassword" placeholder="Confirm Password" value={this.state.confirmpassword} onChange={e => this.ChangeHandler(e)} />
                                    </div>                                      
                                                           
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="lname" required pattern="[A-Za-z]{1,20}" title="Lastname should only contain lowercase and uppercase letters. e.g. Wuf" value={this.state.lname}  onChange={e => this.ChangeHandler(e)} placeholder="Last Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" minlength="10" maxlength="10" required name="phone" class="form-control" placeholder=" Phone Number" value={this.state.phone} onChange={e => this.ChangeHandler(e)}  />
                                    </div> 
                                    <div class="form-group">
                                        <input type="password" class="form-control" minlength="8" required pattern="^(?=.*\d).{8,15}$" title="Password must be between 8 and 15 digits long and include at least one numeric digit." name="newpassword" placeholder="New Password" value={this.state.newpassword} onChange={e => this.ChangeHandler(e)} />
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

export default userSettings