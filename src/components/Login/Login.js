import React, { Component } from 'react';
import axios from 'axios';
class login extends Component {
    constructor() {
        super();
        this.state ={
            email: "",
            password:""
        };
      }
      ChangeHandler=(e)=>{this.setState({[e.target.name]:e.target.value})};
      submitHandler=e=>{
            e.preventDefault();
            console.log(this.state);
            axios.post('http://18.218.124.225:3000/api/companyuser/authcompanyuser',this.state);
      
        /* .then(response =>{
             console.log(response);
         })
         .catch(error=>{
             console.log(error);
         })*/
      }
    render() {
        const{email,password}=this.state;
        return (
            <div class="container-fluid h-100">
                <div class="row justify-content-center align-items-center h-100">
                    <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <form onSubmit={this.submitHandler}>
                            <div class="form-group row">
                                <label for="inputEmail3" class="label">Email</label>
                                <div class="form-group">
                                    <input  class="form-control form-control-lg"  name="email"value={this.state.email} onChange={this.ChangeHandler} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  placeholder="User Email" type="text"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword3" class="label">Password</label>
                                <div class="form-group">
                                    <input class="form-control form-control-lg" name="password" value ={this.state.password}  onChange={this.ChangeHandler} /*pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"*/ placeholder="Password" required   type="password"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-info btn-lg btn-block">Sign In</button>
                            </div>
                            <div class="form-group">
                                <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
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