import React, {Component} from 'react';
import axios from 'axios';

export default class Home extends Component {
  state = {
    products: [],
    productName: '',
    productPrice: 0
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get('/api/products');
      const products = response.data;
      this.setState({ products });
    } catch (e) {
      console.log(e);
    }
  }

  changeProdcutName = e => {
    this.setState({ productName: e.target.value });
  }

  changeProdcutPrice = e => {
    this.setState({ productPrice: e.target.value });
  }

  submitProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/products', {
        name: this.state.productName,
        price: this.state.productPrice
      });
      const product = response.data;
      this.setState({ products: [ ...this.state.products, product ]});
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { products, productName, productPrice } = this.state;

    return (
      <div>
        <ul>
          { products &&
            products.map(product => (
              <li>Name: {product.name}, Price: {product.price}</li>
            ))
          }
        </ul>
        <form>
          <input type="text" placeholder="item name" value={productName} onChange={this.changeProdcutName}/>
          <input type="text" placeholder="item price" value={productPrice} onChange={this.changeProdcutPrice}/>
          <button type="submit" onClick={this.submitProduct}>Submit</button>
        </form>
      </div>
    )
  }
}