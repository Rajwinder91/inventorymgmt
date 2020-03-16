import React, { Component } from 'react';
import logo from '../../images/logo.png';
class signup extends Component {
    render() {
         return (
            <div class="row">
                <div class="col-md-3">
                    <img className="logoImg" src={logo} alt="Inventory Management"/>
                    <h3>Inventory Management System</h3>
                    <p>Inventory and Order Management Software for your small business</p>
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                    </ul>
                </div>
                <div class="col-md-9">                    
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3>Let's get started..</h3>
                        <form method="post" name="register">
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" required name="fname" placeholder="First Name*" value="" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" required name="emailAddress" placeholder="Email Address*" value="" />
                                    </div>                                       
                                    <div class="form-group">
                                        <input type="text" minlength="10" maxlength="10" required name="phone" class="form-control" placeholder=" Phone Number*" value="" />
                                    </div>                                       
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="lname" required placeholder="Last Name*" value="" />
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" minlength="8" required name="password" placeholder="Password*" value="" />
                                    </div>                                        
                                    <div class="form-group">
                                        <select name="country" class="form-control">
                                            <option class="hidden" selected disabled>Country*</option>
                                        </select>
                                    </div>              
                                </div>
                                <div className="col-md-12 register-heading">
                                    <h3> Company Details</h3>                                
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="companyName" class="form-control" required placeholder="Company Name*" value="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="companyUrl" class="form-control" placeholder="Company Url" value="" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                    <textarea class="form-control" name="adddress1" rows="3" required>Address 1*</textarea>
                                    </div>
                                    <div class="form-group">
                                    <textarea class="form-control" name="adddress2" rows="3">Address 2</textarea>
                                    </div>
                                </div>    
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="city" class="form-control" required placeholder="City*" value="" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="postalCode" class="form-control"  pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]" required placeholder="Postal Code*" value="" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select name="province" class="form-control">
                                            <option class="hidden"  selected disabled>Province*</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div class="form-group">
                                        <input type="submit" class="btnRegister"  value="Open My Account"/>
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
export default signup;