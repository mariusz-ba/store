import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeProduct, openBasket } from 'actions/basketActions';

import {
  Aside,
  Products, Product,
  OutsideClickHandler,
  Title,
  CloseButton
} from './styles';

import {
  Purchase,
  PurchaseButton,
  PurchasePrice
} from 'containers/Product/styles';

class Basket extends Component {
  clickedOutside = e => {
    this.props.openBasket(false);
  }

  render() {
    const { basket } = this.props;
    const products = Object.values(basket.products);

    return (
      <Aside closed={basket.closed}>
        <OutsideClickHandler closed={basket.closed} onClick={this.clickedOutside}/>
        <CloseButton onClick={() => this.props.openBasket(false)}><i className="fas fa-times"></i></CloseButton>
        <Title>Your Items</Title>
        { products.length === 0 &&
          <Title disabled>Your basket is empty</Title>
        }
        { products.length > 0 &&
          <React.Fragment>
          <Products>
            <thead>
              <tr>
                <th>Remove</th>
                <th colSpan="2">Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
            {
              products.map(product => (
                <Product key={product._id}>
                  <td>
                    <button 
                      onClick={() => this.props.removeProduct(product._id)}>
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </td>
                  <td><img src={product.pictures[0]} alt={product.name}/></td>
                  <td>
                    <span>{product.name}</span>
                    <span>{product.description}</span>
                  </td>
                  <td><input type="text"/></td>
                  <td>&euro; {product.price}</td>
                </Product>
              ))
            }
            </tbody>
          </Products>
          <Purchase>
            <PurchaseButton>CHECKOUT</PurchaseButton>
            <PurchasePrice>&euro; {products.map(product => product.price).reduce((a, b) => a + b, 0)}</PurchasePrice>
          </Purchase>
          </React.Fragment>
        }
      </Aside>
    )
  }
}

const mapStateToProps = ({ basket }) => ({ basket });

export default connect(mapStateToProps, { removeProduct, openBasket })(Basket);