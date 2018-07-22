import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

import styled from 'styled-components';

const Grid = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(${props => props.columns ? props.columns : 1}, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

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