import React, { Component } from 'react';
class sendEmailNotification extends Component {
    render() {
      return (
        <section id="cover" class="min-vh-100">
          <div id="cover-caption">
            <div class="row text-white">
              <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <h1 class="display-4 py-2 text-truncate">Forgot Password</h1>
                  <div class="px-2">
                    <form class="justify-content-center">
                      <div class="form-group">
                        <label class="sr-only">Email Address:</label>
                        <input type="text" class="form-control" placeholder="Enter your email address"/>
                      </div>
                      <button type="submit" class="btn btn-primary btn-lg">Forgot Password</button>         
                    </form>
                  </div>
              </div>
            </div>
          </div>
        </section>
        );
    }
  }  
  export default sendEmailNotification;