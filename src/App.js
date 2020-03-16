import React, { Component } from 'react';

/* Start Load Components */
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/BodyPart/content';
import Login from './components/Login/login';
import SignUp from "./components/Signup/signup"
import ForgotPass from "./components/ForgotPassword/sendEmailNotification";
import NotFoundPage from "./components/PageNotFound/pageNotFound"
/* End Load Components */

/* Start Load CSS */
import './css/bootstrap.min.css';
import './css/sticky-footer-navbar.css';
import './css/style.css';
/* Start Load CSS */

import {
  BrowserRouter ,
  Route,
  Switch,
  Redirect

} from "react-router-dom";

/* Start App Class*/
class App extends Component {
    render() {
      return ( 
      <html lang="en">
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="description" content="Manage the Inventory of the Store"/>
            <meta name="author" content="Rajwinder-Manjinder-Kuljit"/>
            <link rel="icon" href="favicon.ico"/>
            <title>Inventory Management</title>
          </head>          
            <BrowserRouter>
              <body>           
                {/* Load Header Component */}
                  <Header/>
                {/* Load Home,Login,Signup and Notfound Components */}
                <main role="main" class="container content">
                  <Switch>               
                      <Route exact path="/" component={Home}/> 
                      <Route exact path="/login" component={Login}/>                      
                      <Route  exact path="/signup" component={SignUp}/>
                      <Route  exact path="/404" component={NotFoundPage}/>
                      <Redirect to="/404" />
                  </Switch> 
                </main>  
              </body>
            </BrowserRouter>           
            {/* Load Footer Component */}
            <Footer />
        </html>
      );
    }
  }  
  export default App;