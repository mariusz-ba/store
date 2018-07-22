import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Grid } from './styles';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <Grid columns={3}>
        { products &&
          products.map(product => (
            <Product key={product._id} {...product}/>
          ))
        }
      </Grid>
    )
  }
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
}