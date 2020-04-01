import React, { Component } from 'react';
import logo from '../../images/logo.png';
import inventoryimg1 from '../../images/inventory.jpg';
import inventoryimg2 from '../../images/inventory1.jpg';
import inventoryimg3 from '../../images/inventory2.jpg';
import axios from 'axios';

class signup extends Component {   
   
    state = {
        fname: '',
        lname: '',
        emailAddress: '',
        phone: '',
        password: '',
        country: '',
        companyName: '',
        companyUrl: '',
        companyLogo: '',
        address1: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        errorMessage: '',
        successMsg:'',
        countries: [],
        provinces: []
    }
    
    handleChange = this.handleChange.bind(this);    
    
    selectImages = (event) => {
        this.setState({ companyLogo: event.target.files[0]})
    }

    componentDidMount() {
        let initialCountries = [];
        fetch(`http://18.216.15.198:3000/api/countries/country`)
        .then(response => {
            return response.json();
            }).then(data => {           
                initialCountries = data.data.map((country) => {
                return {value: country.CountryId, display: country.name}
                
            });
            this.setState({
                countries: [{value: '', display: 'Please select your country'}].concat(initialCountries)
            })            
        })
        .catch(error => {
            this.setState({errorMessage: error.response});
        })        
    }

    handleChange(event) {

        let initialProvinces = [];
        this.setState({
           country: event.target.value,
           errorMessage: event.target.value === "" ? "You must select your country" : ""
        });

        axios({
            method: 'POST',
            responseType: 'json',
            url: `http://18.216.15.198:3000/api/provinces/province`,
            data: {
                "country_id" : event.target.value
            }            
        })
        .then(response => {
            //console.log(response.data.success);
            if(response.data.success === 1){
                initialProvinces = response.data.data.map((province) => {
                    return {value: province.ProvinceId, display: province.name} 
                })
                this.setState({
                    provinces: [{value: '', display: 'Please select your province'}].concat(initialProvinces)
                })
            }else{
                this.setState({
                    provinces: []
                })
            }
        })        
        .catch(error => {
            console.log("Error:"+ error.response)
            this.setState({
                provinces: []
            })
           this.setState({errorMessage: error.response});
        })
    }
    ChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    };

    submitHandler = e => {
        e.preventDefault();
        const data = new FormData() 
        data.append('Fname', this.state.fname)
        data.append('Lname', this.state.lname)
        data.append('Email', this.state.emailAddress)        
        data.append('Password', this.state.password)
        data.append('PhoneNumber', this.state.phone)        
        data.append('CompanyName', this.state.companyName)
        data.append('Website', this.state.companyUrl)        
        data.append('Logo', this.state.companyLogo)
        data.append('Address1', this.state.address1)
        data.append('Address2', this.state.address2)        
        data.append('City', this.state.city)
        data.append('CountryId', this.state.country)
        data.append('ProvinceId', this.state.province)
        data.append('PostalCode', this.state.postalCode)       
        axios({
            method: 'POST',
            responseType: 'json',
            url: `http://18.216.15.198:3000/api/companyuser/createCompany`, data
        })
        
        .then(response => {
            //console.log("Response"+response.data.success);
            if(response.data.success === 0){
                this.setState({errorMessage: response.data.message});
            }else{
                this.setState({successMsg: response.data.message})
                window.location.href ='/login';
            }                
        })
        .catch(error => {
            //console.log("Error"+error);
            this.setState({errorMessage: error.response.data.message});
        });
    };
    render() {
        return (
            <div class="row">
                <div class="col-md-3 sidebarborder">
                    <img className="logoImg" src={logo} alt="Inventory Management"/>
                    <h3>Inventory Management System</h3>
                    <p>Inventory and Order Management Software for your small business</p>
                    <ul class="signupsidebar">
                        <li>
                            <img className="invenImg float-left " src={inventoryimg1} alt="Inventory Management img1"/> <p class="signup_p1"> &nbsp;Inventory management system is a tool that allows you to track goods quantity.</p>
                        </li>
                        <li>
                            <img className="invenImg" src={inventoryimg2} alt="Inventory Management img2"/> &nbsp;<p class="signup_p2"> &nbsp;Maintain just the right amount of inventory for each product.</p>
                        </li>
                        <li>
                            <img className="invenImg" src={inventoryimg3} alt="Inventory Management img3"/> &nbsp;<p class="signup_p3"> &nbsp;Receive alerts and notifications when there’s over- or under-stocking. </p>
                        </li>
                    </ul>
                </div>
                <div class="col-md-9">                    
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        { this.state.errorMessage &&
                            <p className="alert alert-danger"> { this.state.errorMessage } </p>
                        } 
                        { this.state.successMsg &&
                            <p className="alert alert alert-success"> { this.state.successMsg } </p>
                        } 
                        <h3 class="text-primary">Let's get started..</h3>
                        <form method="post" name="register" onSubmit={this.submitHandler}>
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" required pattern="[A-Za-z]{1,20}" title="Firstname should only contain lowercase and uppercase letters. e.g. John" name="fname" placeholder="First Name*" value={this.state.fname} onChange={e => this.ChangeHandler(e)}/>
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
                                        <input type="text" class="form-control" name="lname" required pattern="[A-Za-z]{1,20}" title="Lastname should only contain lowercase and uppercase letters. e.g. Wuf" placeholder="Last Name*" value={this.state.lname}  onChange={e => this.ChangeHandler(e)}/>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" minlength="8" required pattern="^(?=.*\d).{8,15}$" title="Password must be between 8 and 15 digits long and include at least one numeric digit." name="password" placeholder="Password*" value={this.state.password} onChange={e => this.ChangeHandler(e)}/>
                                    </div>                                        
                                    <div class="form-group">   
                                        <select name="country" class="form-control" required
                                            value={this.state.country}
                                            onChange={this.handleChange}                                            
                                            >
                                            {this.state.countries.map(country => (
                                                <option
                                                key={country.value}
                                                value={country.value}
                                                >
                                                {country.display}
                                                </option>
                                            ))}
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
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text logoStyle" id="inputGroupFileAddon01">Comapny Logo*</span>
                                        </div>
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" required onChange={this.selectImages}/>
                                            <label class="custom-file-label" for="inputGroupFile01">{this.state.companyLogo.name}</label>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                                <br/>
                                <div class="col-md-12">
                                    <div class="form-group">
                                    <textarea class="form-control" placeholder="Address 1*" name="address1" rows="3" required value={this.state.address1} onChange={e => this.ChangeHandler(e)}>Address 1*</textarea>
                                    </div>
                                    <div class="form-group">
                                    <textarea class="form-control" placeholder="Address 2" name="address2" rows="3" value={this.state.address2} onChange={e => this.ChangeHandler(e)}>Address 2</textarea>
                                    </div>
                                </div>    
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="city" class="form-control" required placeholder="City*" value={this.state.city} onChange={e => this.ChangeHandler(e)}/>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="postalCode" class="form-control"  required pattern="[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]" title="Postal Code should only contain letters and digits. e.g. G3H6A3" placeholder="Postal Code*" value={this.state.postalCode} onChange={e => this.ChangeHandler(e)}/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                    <div class="form-group">   
                                        <select name="province" class="form-control" required
                                            value={this.state.province}
                                            onChange={e =>
                                                this.setState({
                                                province: e.target.value,
                                                errorMessage:
                                                    e.target.value === ""
                                                    ? "You must select your province"
                                                    : ""
                                                })
                                            }
                                            >
                                            {this.state.provinces.map(province => (
                                                <option
                                                key={province.value}
                                                value={province.value}
                                                >
                                                {province.display}
                                                </option>
                                            ))}
                                        </select>
                                    </div>            
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