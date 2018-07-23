import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProducts, createProduct } from '../actions/productsActions';
import { removeProduct, clearBasket } from '../actions/basketActions';
import { ProductsList } from '../components/products';

import Slider from '../components/slider';
import { Wrapper } from '../components/layout';

import styled from 'styled-components';


class Home extends Component {
  state = {
    productName: '',
    productPrice: 0
  }

  componentDidMount = () => {
    this.props.fetchProducts();
  }

  changeProdcutName = e => {
    this.setState({ productName: e.target.value });
  }

  changeProdcutPrice = e => {
    this.setState({ productPrice: e.target.value });
  }

  submitProduct = async (e) => {
    e.preventDefault();
    this.props.createProduct({
      name: this.state.productName,
      price: this.state.productPrice
    })
  }

  render() {
    const { productName, productPrice } = this.state;
    const { basket, products } = this.props;

    const images = [
      'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=81a5f1725ca68c549e0054dcfdf269de&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1532297539532-5bb652c0e49f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=537fdc567f9e1928a2463123c34c9810&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1532324226343-ef5330a57cb7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0c5357ded063337fe1edf7fa2d222757&auto=format&fit=crop&w=1350&q=80',
    ]

    return (
      <Wrapper>
        <Slider images={images}/>
        <ProductsList products={Object.values(products.products)}/>
        <form>
          <input type="text" placeholder="item name" value={productName} onChange={this.changeProdcutName}/>
          <input type="text" placeholder="item price" value={productPrice} onChange={this.changeProdcutPrice}/>
          <button type="submit" onClick={this.submitProduct}>Submit</button>
        </form>
        <div>
          <h2>Basket:</h2>
          <ul>
            {
              Object.values(basket.products).map(product => (
                <li>
                  <p>{product.name}</p>
                  <button onClick={() => this.props.removeProduct(product._id)}>removeProduct</button>
                </li>
              ))
            }
          </ul>
          <button onClick={this.props.clearBasket}>Clear basket</button>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ basket, products }) => ({ basket, products });

export default connect(mapStateToProps, { 
  fetchProducts, createProduct,
  removeProduct, clearBasket
})(Home);