import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Branding,
  Container,
  Navigation,
  Toggler
} from './styles';

import { openBasket } from 'actions/basketActions';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <Header>
        <Container>
          <Toggler type="checkbox"></Toggler>
          <Branding>
            <Link to="/">
              <img src="/img/logo.png" alt="Branding"/>
            </Link>
          </Branding>
          <Navigation>
            <Navigation.Menu>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="#">Categories</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </Navigation.Menu>
            <Navigation.Basket>
              <button onClick={() => this.props.openBasket(true)}>
                <span className="fas fa-shopping-cart"></span>
                <span>Basket</span>
              </button>
            </Navigation.Basket>
          </Navigation>
        </Container>
      </Header>
    )
  }
}

export default connect(null, { openBasket })(Navbar);