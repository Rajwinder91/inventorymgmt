import React, { Component } from 'react';
import logo from '../../images/logo.png';
import axios from 'axios';
import Select from 'react-select'; 
import CountryList from "./countryList"
import ProvinceList from "./provinceList"
const countries = [
    { label: "India", value: 1 },
    { label: "Canada", value: 2 },
    { label: "America", value: 3 },
    { label: "Iran", value: 4 },
    { label: "New", value: 5 },
    { label: "Test", value: 6 },
  ];

class signup extends Component {   
    state = {
        fname: '',
        lname: '',
        emailAddress: '',
        phone: '',
        password: '',
        country: '1',
        companyName: '',
        companyUrl: '',
        logo:'logo.jpg',
        address1: '',
        address2: '',
        city: '',
        province: '1',
        postalCode: ''

    }
    

    ChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitHandler = e => {
        console.log(this.state);
        e.preventDefault();
        console.log(this.state);
        try{
            axios({
                method: 'POST',
                responseType: 'json',
                url: `http://18.218.124.225:3000/api/companyuser/createCompany`,
                data: {
                    "Fname" : this.state.fname,
                    "Lname" : this.state.lname,
                    "Email": this.state.emailAddress,
                    "PhoneNumber": this.state.phone,
                    "Password": this.state.password,
                    "CountryId": this.state.country,
                    "CompanyName": this.state.companyName,
                    "Website": this.state.companyUrl,
                    "Logo": this.state.logo,
                    "Address1": this.state.address1,
                    "Address2": this.state.address2,
                    "City": this.state.city,
                    "ProvinceId": this.state.province,
                    "PostalCode": this.state.postalCode
                }
                
              })
               .then(response => {
                console.log("Response"+response.data.message);
               })
               .catch(error => {
                console.log("Error"+error);
               });
        } catch (error) {
            console.error(error);
        }
    };
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
                        <h3 class="text-primary">Let's get started..</h3>
                        <form method="post" name="register" onSubmit={this.submitHandler}>
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" required name="fname" placeholder="First Name*" value={this.state.fname} onChange={e => this.ChangeHandler(e)}/>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" required name="emailAddress" placeholder="Email Address*" value={this.state.emailAddress} onChange={e => this.ChangeHandler(e)} />
                                    </div>                                       
                                    <div class="form-group">
                                        <input type="text" minlength="10" maxlength="10" required name="phone" class="form-control" placeholder=" Phone Number*" value={this.state.phone} onChange={e => this.ChangeHandler(e)} />
                                    </div>                                       
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="lname" required placeholder="Last Name*" value={this.state.lname}  onChange={e => this.ChangeHandler(e)}/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" minlength="8" required name="password" placeholder="Password*" value={this.state.password} onChange={e => this.ChangeHandler(e)}/>
                                    </div>                                        
                                    <div class="form-group">
                                        <select name="country" value={this.state.country} onChange={e => this.ChangeHandler(e)} class="form-control">
                                            <option selected disabled>Country*</option>
                                            <option value="1">Canada</option>
                                            <option value="2">India</option>
                                            <option value="3">Test</option>
                                        </select>              
                                    </div>              
                                </div>
                                <div className="col-md-12 register-heading">
                                    <h3 class="text-primary"> Company Details</h3>                                
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="companyName" class="form-control" required placeholder="Company Name*" value={this.state.companyName} onChange={e => this.ChangeHandler(e)}/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="companyUrl" class="form-control" placeholder="Company Url" value={this.state.companyUrl} onChange={e => this.ChangeHandler(e)}/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                    <textarea class="form-control" name="address1" rows="3" required value={this.state.address1} onChange={e => this.ChangeHandler(e)}>Address 1*</textarea>
                                    </div>
                                    <div class="form-group">
                                    <textarea class="form-control" name="address2" rows="3" value={this.state.address2} onChange={e => this.ChangeHandler(e)}>Address 2</textarea>
                                    </div>
                                </div>    
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="city" class="form-control" required placeholder="City*" value={this.state.city} onChange={e => this.ChangeHandler(e)}/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="postalCode" class="form-control" /* pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"*/ required placeholder="Postal Code*" value={this.state.postalCode} onChange={e => this.ChangeHandler(e)}/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select name="province" value={this.state.province} onChange={e => this.ChangeHandler(e)} class="form-control">
                                            <option class="hidden"  selected disabled>Province*</option>
                                            <option value="1">Quebec</option>
                                            <option value="2">Ottawa</option>
                                            <option value="3">Punjab</option>
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