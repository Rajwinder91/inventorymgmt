import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect } from "react-router-dom";
import { setUserSession } from '../Utils/common';
let searchParams = new URLSearchParams(window.location.search);
console.log(searchParams.has('success'));
console.log(searchParams.get('success'));

class login extends Component {
   
    state = {
        email: '',
        password: '',
        successMsg: '',
        errorMessage: ''
    }
    
    ChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    submitHandler = e => {
        //console.log(this.state);
        e.preventDefault();       
        axios({
            method: 'POST',
            responseType: 'json',
            url: 'http://18.216.15.198:3000/api/companyuser/authcompanyuser',
            data: {
                "email" : this.state.email,
                "password" : this.state.password
            }                
        })
        .then(response => {
            //debugger;
            //console.log('1'+response.data.success);
            this.setState({successMsg: response.data.message})
            setUserSession(response.data.token, response.data.data);
            window.location.href ='/dashboard';
        })
        .catch(error => {
            //debugger;
            this.setState({errorMessage: error.response.data.message});
        });
    };
    render() {
        return (
            <div class="row loginbody">      
                <div class="col-md-3"></div>  
                <div class="col-md-6">            
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="text-primary">Sign in to Account</h3> 
                        { this.state.errorMessage &&
                            <p className="alert alert-danger"> { this.state.errorMessage } </p>
                        } 
                        { this.state.successMsg &&
                            <p className="alert alert alert-success"> { this.state.successMsg } </p>
                        }             
                        <form onSubmit={this.submitHandler}>
                            <div class="form-group">
                                <div class="form-group">
                                    <input class="form-control"  name="email" value={this.state.email} onChange={e => this.ChangeHandler(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required placeholder="User Email*" type="text"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-group">
                                    <input class="form-control" name="password" value ={this.state.password}  onChange={e => this.ChangeHandler(e)}  placeholder="Password*" minlength="8" required pattern="^(?=.*\d).{8,15}$" title="Password must be between 8 and 15 digits long and include at least one numeric digit."  type="password"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btnRegister">Sign In</button>
                            </div>
                            <div class="form-group">
                                <p className="forgot-password text-left">   
                                 <NavLink to="/forgotpassword"> Forgot password?</NavLink> 
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default login;