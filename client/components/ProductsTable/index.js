import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';
import { Link } from 'react-router-dom';

import { Table } from './styles';

export default class ProductsTable extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    sizes: PropTypes.object.isRequired
  }

  static defaultProps = {
    categories: {},
    products: [],
    sizes: {}
  }

  render() {
    const { categories, products, sizes } = this.props;

    return (
      <Table>
        <Table.Head>
          <tr>
            <td colSpan="2">Product</td>
            <td>Category</td>
            <td>Sizes</td>
            <td>Price</td>
            <td></td>
          </tr>
        </Table.Head>
        <Table.Body>
        {
          products.map(product => (
            <tr key={product._id}>
              <td><img src={product.pictures[0]} alt={product.name}/></td>
              <td>
                <div>
                  <span>{product.name}</span>
                  <span>{product.description}</span>
                </div>
              </td>
              <td>
              { categories[product.category] &&
                categories[product.category].name
              }
              </td>
              <td>
              { 
                Object.values(pick(sizes, product.availability.map(item => item.size)))
                  .map(size => size.short)
                  .join(', ')
              }
              </td>
              <td>&euro; {product.price}</td>
              <td>
                <div>
                  <button>Delete</button>
                  <Link to={`/dashboard/products/edit/${product._id}`}>Edit</Link>
                </div>
              </td>
            </tr>
          ))
        }
        </Table.Body>
      </Table>
    )
  }
}