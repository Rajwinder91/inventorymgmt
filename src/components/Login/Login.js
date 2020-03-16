import React, { Component } from 'react';
class footer extends Component {
    render() {
      return (
        <div class="container-fluid h-100">
        <div class="row justify-content-center align-items-center h-100">
            <div class="col col-sm-6 col-md-6 col-lg-4 col-xl-3">
                <form action="">
                <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="form-group">
                        <input _ngcontent-c0="" class="form-control form-control-lg"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="User email" type="text"/>
                    </div>
                    </div>
                    <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="form-group">
                        <input class="form-control form-control-lg" placeholder="Password" required   pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" type="password"/>
                    </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-info btn-lg btn-block">Sign In</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
        );
    }
  }
  
  export default footer;