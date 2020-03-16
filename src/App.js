import React, { Component } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Content from './components/BodyPart/content';

import LoginPost from './components/Login/LoginPost';


import './css/bootstrap.min.css';
import './css/sticky-footer-navbar.css';

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
          <body>
            {/* Header Part */}
            <Header />
            {/* Body Part */}
            <main role="main" class="container">
             <content/>
            </main>
            {/* Footer Part */}
            <Footer />
           
          </body>
         </html>
      );
    }
  }
  
  export default App;