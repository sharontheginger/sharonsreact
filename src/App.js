import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Lists from './Lists';
import Footer from './Footer';
import Navbar from './Navbar';
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div>
        <div className="body">
        <Navbar />
          <Header />
        </div>
        <div>
          <Main />
        </div>
        <div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
