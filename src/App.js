import React, { Component } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Content from './components/BodyPart/content';

class App extends Component {
    render() {
      return (
        <div className="wrapper">
          <Header />
          <Content />
          <Footer />
        </div>
      );
    }
  }
  
  export default App;