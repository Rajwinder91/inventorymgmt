import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';

class createSupplier extends Component {
    render() {       
      return ( 
        <div class="container-fluid">
            <div class="row">
                <DashboardSidebar/>
                <div class="col-md-9 ml-sm-auto col-lg-10 px-4">                    
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="text-primary">Create Supplier</h3>
                        <div  class="top_button">         
                                    <input type="submit" class="btn btn-primary mb-2"  value="Cancel"/>
                                    &nbsp;&nbsp;  <input type="submit" class="btn btn-primary mb-2"  value="Save"/>
                        </div>
                        <form method="post" name="register" onSubmit={this.submitHandler}>
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" required name="supp_name" pattern="[a-zA-Z][a-zA-Z ]{2,}" placeholder="Supplier Name*"/>
                                    </div>
                                                                        
                                    <div class="form-group">
                                        <input type="text" minlength="10" maxlength="10" required name="phone" class="form-control" placeholder=" Phone Number*" />
                                    </div>                                      
                                </div>
                                <div class="col-md-6">
                                <div class="form-group">
                                        <input type="email" class="form-control" required name="emailAddress" placeholder="Email Address*"  />
                                    </div>
                            <div class="input-group mb-2">
                                    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Discount Rate"/>
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">%</div>
                                    </div>
                                </div>                                                   
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                        <select name="country"  class="form-control">
                                            <option selected disabled>Country*</option>
                                            <option value="1">Canada</option>
                                            <option value="2">India</option>
                                            <option value="3">Test</option>
                                        </select>              
                                    </div> 
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                        <select name="province"  class="form-control">
                                            <option class="hidden"  selected disabled>Province*</option>
                                            <option value="1">Quebec</option>
                                            <option value="2">Ottawa</option>
                                            <option value="3">Punjab</option>
                                        </select>  
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                            <input type="text" name="city" class="form-control" required placeholder="City*"/>
                                        </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                    <textarea class="form-control" name="address1" rows="3" required >Address 1*</textarea>
                                    </div>
                                    <div class="form-group">
                                    <textarea class="form-control" name="address2" rows="3" >Address 2</textarea>
                                    </div>
                                </div>    
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="postalCode" class="form-control" /* pattern="[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]"*/ required placeholder="Postal Code*"/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>          
             
      );
    }
  }
  
  export default createSupplier;