import React, { Component } from 'react';
import DashboardSidebar from '../../components/Dashboard/dashboardSidebar';

class userSettings extends Component {

    //Call render function
    render() {       
        return ( 
            <div class="container-fluid">
                <div class="row">
                    <DashboardSidebar/>
                    <div class="col-md-9 ml-sm-auto col-lg-10 px-4">                    
                        
                        <div class="float-left"><h3 class="text-primary">User Settings</h3></div>                       
                        <form method="post" name="register" >
                            <div class="float-right">
                            <input type="submit" class="btn btn-primary mb-2"  value="Cancel"/>
                                &nbsp;&nbsp;  <input type="submit" class="btn btn-primary mb-2"  value="Update"/>
                            </div>
                            <br></br> <br></br> <br></br>
                            <div class="row register-form">                                
                            <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" required pattern="[A-Za-z]{1,20}" title="Firstname should only contain lowercase and uppercase letters. e.g. John" name="fname" placeholder="First Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" required name="emailAddress" placeholder="Email Address*"  />
                                    </div> 
                                    <div class="form-group">
                                        <input type="password" class="form-control" minlength="8" required pattern="^(?=.*\d).{8,15}$" title="Password must be between 8 and 15 digits long and include at least one numeric digit." name="Currentpassword" placeholder="Current Password" />
                                    </div>
                                    
                                    <div class="form-group">
                                        <input type="password" class="form-control" minlength="8" required pattern="^(?=.*\d).{8,15}$" title="Password must be between 8 and 15 digits long and include at least one numeric digit." name="confirmpassword" placeholder="Confirm Password" />
                                    </div>                                      
                                                           
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="lname" required pattern="[A-Za-z]{1,20}" title="Lastname should only contain lowercase and uppercase letters. e.g. Wuf" placeholder="Last Name" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" minlength="10" maxlength="10" required name="phone" class="form-control" placeholder=" Phone Number"  />
                                    </div> 
                                    <div class="form-group">
                                        <input type="password" class="form-control" minlength="8" required pattern="^(?=.*\d).{8,15}$" title="Password must be between 8 and 15 digits long and include at least one numeric digit." name="newpassword" placeholder="New Password" />
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