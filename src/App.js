import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

import SaleProducts from "./components/saleProducts";

library.add(faTrashAlt);

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
