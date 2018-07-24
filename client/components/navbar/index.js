import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../layout';
import {
  Branding,
  Header,
  Navigation,
} from './styles';

import { openBasket } from '../../actions/basketActions';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <Header>
        <Wrapper>
          <Branding to="/">
            <img src="http://cdn.shopify.com/s/files/1/0188/3162/t/4/assets/logo.png?10389605073256300014" alt="branding"/>
          </Branding>
          <Navigation>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </Navigation>
          <button onClick={() => this.props.openBasket(true)}>Toggle basket</button>
        </Wrapper>
      </Header>
    )
  }
}

export default connect(null, { openBasket })(Navbar);