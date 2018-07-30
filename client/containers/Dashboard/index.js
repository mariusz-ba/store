// Dashboard page container
import React, { Component } from 'react';
import { 
  Switch, 
  Route, 
  Link 
} from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 200px auto;
`

import Navigation from './Navigation';

import Overview from './Overview';
import Products from './Products';
import ProductsNew from './Products/New';
import Orders from './Orders';
import Categories from './Categories';
import Sizes from './Sizes';

import Payments from './Payments';
import Deliveries from './Deliveries';

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Switch>
          <Route exact path={this.props.match.path} component={Overview}/>
          <Route path={`${this.props.match.path}/products/new`} component={ProductsNew}/>
          <Route path={`${this.props.match.path}/products`} component={Products}/>
          <Route path={`${this.props.match.path}/orders`} component={Orders}/>
          <Route path={`${this.props.match.path}/categories`} component={Categories}/>
          <Route path={`${this.props.match.path}/sizes`} component={Sizes}/>
          <Route path={`${this.props.match.path}/payments`} component={Payments}/>
          <Route path={`${this.props.match.path}/deliveries`} component={Deliveries}/>
        </Switch>
      </Container>
    )
  }
}