import React, { Component } from 'react';

/* Start Load Components */
import NotFoundPage from "./components/PageNotFound/pageNotFound";
import PrivateRoute from './components/Utils/privateRoute';
import PublicRoute from './components/Utils/publicRoute';

//Public pages
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/BodyPart/content';
import Login from './components/Login/login';
import SignUp from "./components/Signup/signup";
import ForgotPass from "./components/ForgotPassword/sendEmailNotification";

//Dashboard Components
import Dashboard from "./components/Dashboard/dashboard";

//Supplier Components
import GetSupplier from './components/AdminSuppliers/getSuppliers';
import CreateSupplier from './components/AdminSuppliers/createSupplier';
import UpdateSupplier from './components/AdminSuppliers/updateSupplier';

//Catgory Components
import GetCategory from './components/AdminCatgeories/getCategory';
import CreateCategory from './components/AdminCatgeories/createCategory';
import EditCategory from './components/AdminCatgeories/editCategory.js';

//Product Components
import GetProducts from './components/AdminProducts/getProducts';
import CreateProduct from './components/AdminProducts/createProduct';
import UpdateProduct from './components/AdminProducts/updateProduct';

//Sales order Components
import SalesOrders from './components/AdminSalesOrders/salesOrder';

//Devileries Components
import Deliveries from './components/AdminDeliveries/purchaseOrdersDelivery';
import ViewDelivery from './components/AdminDeliveries/viewDeliver';
import ChangePurchaseStatus from './components/AdminDeliveries/changePurchaseOrderStatus';
import GetPurchaseOrders from './components/AdminPurchaseOrders/getPurchaseOrders';
/* End Load Components */

/* Start Load CSS */
import './css/bootstrap.min.css';
import './css/dashboard.css';
import './css/sticky-footer-navbar.css';
import './css/style.css';
/* End Load CSS */

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
                      <PublicRoute exact path="/login" component={Login}/>                      
                      <PublicRoute  exact path="/signup" component={SignUp}/>
                      <PublicRoute  exact path="/forgotpassword" component={ForgotPass}/>
                      <PrivateRoute  exact path="/dashboard" component={Dashboard}/>
                      <PrivateRoute  exact path="/getSuppliers" component={GetSupplier}/>
                      <PrivateRoute  exact path="/createSupplier" component={CreateSupplier}/>                      
                      <PrivateRoute  exact path="/updateSupplier" component={UpdateSupplier}/>                      
                      <PrivateRoute  exact path="/getProducts" component={GetProducts}/>
                      <PrivateRoute  exact path="/createProduct" component={CreateProduct}/>
                      <PrivateRoute  exact path="/updateProduct" component={UpdateProduct}/>
                      <PrivateRoute  exact path="/getCategories" component={GetCategory}/>
                      <PrivateRoute  exact path="/createCategory" component={CreateCategory}/>
                      <PrivateRoute  exact path="/editCategory" component={EditCategory}/>
                      <PrivateRoute  exact path="/salesOrders" component={SalesOrders}/>
                      <PrivateRoute  exact path="/deliveries" component={Deliveries}/>
                      <PrivateRoute  exact path="/viewdelivery" component={ViewDelivery}/>
                      <PrivateRoute  exact path="/changeStatus" component={ChangePurchaseStatus}/>
                      <PrivateRoute  exact path="/getPurchaseOrders" component={GetPurchaseOrders}/>                      
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