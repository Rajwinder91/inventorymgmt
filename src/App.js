import React, { Component } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Content from './components/BodyPart/content';
import './css/bootstrap.min.css';
import './css/sticky-footer-navbar.css';
import './css/style.css';
import SignUp from "./components/Signup/signup"
import ForgotPass from "./components/ForgotPassword/sendEmailNotification";
import NotFoundPage from "./components/PageNotFound/pageNotFound"
import {
  BrowserRouter ,
  Route,
  Switch,
  Redirect

} from "react-router-dom";
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
                {/* Load Body Component */}
                <main role="main" class="container content">
                  <Switch>               
                      <Route exact path="/" component={Content}/>
                      <Route  exact path="/404" component={NotFoundPage}/>
                      <Route  exact path="/signup" component={SignUp}/>
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