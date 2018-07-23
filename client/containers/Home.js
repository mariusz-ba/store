import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProducts, createProduct } from '../actions/productsActions';
import { ProductsList } from '../components/products';

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
    const { products } = this.props;

    return (
      <div>
        <ProductsList products={Object.values(products.products)}/>
        <form>
          <input type="text" placeholder="item name" value={productName} onChange={this.changeProdcutName}/>
          <input type="text" placeholder="item price" value={productPrice} onChange={this.changeProdcutPrice}/>
          <button type="submit" onClick={this.submitProduct}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { fetchProducts, createProduct })(Home);