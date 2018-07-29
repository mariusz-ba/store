import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Products, ProductItem } from './styles';
import Product from './Product';

export default class ProductsList extends Component {
  render() {
    const { products } = this.props;

    return (
      <Products>
        { products &&
          products.map(product => (
            <ProductItem key={product._id}>
              <Product {...product}/>
            </ProductItem>
          ))
        }
      </Products>
    )
  }
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired
}