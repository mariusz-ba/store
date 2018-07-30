import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import About from './containers/About';
import Checkout from './containers/Checkout';
import Contact from './containers/Contact';
import Dashboard from './containers/Dashboard';
import Home from './containers/Home';
import Payment from './containers/Checkout/Payment';
import Product from './containers/Product';
import Products from './containers/Products';
import Track from './containers/Track';

import Basket from './components/basket';
import Navbar from './components/navbar';
import Footer from './components/footer';

const Client = () => (
  <React.Fragment>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/checkout/payment/:id" component={Payment}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/products/:id" component={Product}/>
      <Route path="/products" component={Products}/>
      <Route path="/track/:id" component={Track}/>
    </Switch>
    <Footer/>
    <Basket/>
  </React.Fragment>
)

const Admin = (props) => (
  <Route path={props.match.path} component={Dashboard}/>
)

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Admin}/>
        <Route path="/" component={Client}/>
      </Switch>
    </Router>
  )
}