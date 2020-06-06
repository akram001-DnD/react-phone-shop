import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart/";
import Default from "./components/Default";
import Details from "./components/Details";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Modal from "./components/Modal";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route exact component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
