import React, { Component } from 'react';
import './App.css';

import SaleProducts from './components/saleProducts';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SaleProducts />
      </div>
    );
  }
}

export default App;
