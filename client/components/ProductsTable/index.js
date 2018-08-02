import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';

import { Button, Link, Table } from './styles';

export default class ProductsTable extends Component {
  static propTypes = {
    categories: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired,
    sizes: PropTypes.object.isRequired,
    onDeleteProduct: PropTypes.func.isRequired
  }

  static defaultProps = {
    categories: {},
    products: [],
    sizes: {}
  }

  deleteProduct = productId => {
    this.props.onDeleteProduct(productId);
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
                  <Button onClick={() => this.deleteProduct(product._id)}><i className="fas fa-trash-alt"></i></Button>
                  <Link to={`/dashboard/products/edit/${product._id}`}><i className="fas fa-edit"></i></Link>
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