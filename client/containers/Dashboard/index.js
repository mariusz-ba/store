// Dashboard page layout
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from './styles';

import Categories from './Categories';
import Deliveries from './Deliveries';
import Navigation from './Navigation';
import Orders from './Orders';
import Overview from './Overview';
import Payments from './Payments';
import Products from './Products';
import ProductsNew from './Products/ProductsNew';
import ProductsEdit from './Products/ProductsEdit';
import Sizes from './Sizes';

export default class Dashboard extends Component {
  render() {
    return (
      <Layout>
        <Layout.Left>
          <Navigation />
        </Layout.Left>
        <Layout.Right>
          <Switch>
            <Route exact path={this.props.match.path} component={Overview}/>
            <Route path={`${this.props.match.path}/products/new`} component={ProductsNew}/>
            <Route path={`${this.props.match.path}/products/edit/:id`} component={ProductsEdit}/>
            <Route path={`${this.props.match.path}/products`} component={Products}/>
            <Route path={`${this.props.match.path}/orders`} component={Orders}/>
            <Route path={`${this.props.match.path}/categories`} component={Categories}/>
            <Route path={`${this.props.match.path}/sizes`} component={Sizes}/>
            <Route path={`${this.props.match.path}/payments`} component={Payments}/>
            <Route path={`${this.props.match.path}/deliveries`} component={Deliveries}/>
          </Switch>
        </Layout.Right>
      </Layout>
    )
  }
}