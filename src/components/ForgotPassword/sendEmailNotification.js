import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class sendEmailNotification extends Component {
    render() {
      return (
        <div class="row">      
            <div class="col-md-3"></div>  
            <div class="col-md-6">            
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <h3 class="text-primary">Forgot Password</h3>                  
                    <form>
                        <div class="form-group">
                            <div class="form-group">
                                <input class="form-control"  name="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required placeholder="User Email*" type="text"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btnRegister">Email new password</button>
                        </div>
                        <div class="form-group">
                            <p className="forgot-password text-left">   
                              <NavLink to="/login"> Back to Login?</NavLink> 
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
  }  
  export default sendEmailNotification;