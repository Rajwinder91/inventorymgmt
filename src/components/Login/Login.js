import React, { Component } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/common';
class login extends Component {
    state = {
        email: '',
        password: ''
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
            url: 'http://18.218.124.225:3000/api/companyuser/authcompanyuser',
            data: {
                "email" : this.state.email,
                "password" : this.state.password
            }                
        })
        .then(response => {
            console.log("Response"+response.data.message);
            setUserSession(response.data.token, response.data.data.Fname);
            this.props.history.push("/dashboard");
        })
        .catch(error => {
            console.log("Error"+error);
            console.log("Something went wrong. Please try again later.");
        });
    };
    render() {
        return (
            <div class="row">      
                <div class="col-md-3"></div>  
                <div class="col-md-6">            
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="text-primary">Sign in to Account</h3>                  
                        <form onSubmit={this.submitHandler}>
                            <div class="form-group">
                                <div class="form-group">
                                    <input class="form-control"  name="email" value={this.state.email} onChange={e => this.ChangeHandler(e)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required placeholder="User Email*" type="text"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-group">
                                    <input class="form-control" name="password" value ={this.state.password}  onChange={e => this.ChangeHandler(e)}  placeholder="Password*" required   type="password"/>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btnRegister">Sign In</button>
                            </div>
                            <div class="form-group">
                                <p className="forgot-password text-left">
                                 <a href="#"> Forgot password?</a>
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