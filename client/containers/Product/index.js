import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/productsActions';
import { withRouter } from 'react-router-dom';

import { 
  Spacer,
  Wrapper
} from '../../components/layout';
import { 
  Container,
  ProductInfo,
  Name,
  Purchase,
  PurchaseButton, PurchasePrice,
  Description,
  Features,
  Info
} from './styles';

import PicturePreview from '../../components/picture-preview';

class Product extends Component {
  componentDidMount() {
    this.fetchProduct();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id)
      this.fetchProduct();
  }

  fetchProduct = () => {
    const { id } = this.props.match.params;
    this.props.fetchProduct(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { products, isFetching } = this.props.products;

    const product = products[id];
    
    if(isFetching)
      return ( <h1>Loading...</h1> )

    if(!product)
      return ( <h1>Not found</h1> )

    const pictures = product.pictures;

    return (
      <Wrapper>
        <Spacer>&#10699;</Spacer>
        <Container>
          <PicturePreview pictures={pictures}/>
          <ProductInfo>
            <Name>{product.name}</Name>
            <Purchase>
              <PurchaseButton>BUY</PurchaseButton>
              <PurchasePrice>&euro; {product.price}</PurchasePrice>
            </Purchase>
            <Description>Small backpack ideal for everyday carry. This size is ideal for women and kids. It´s big enough for all your daily necessities and it even fits an 12” MacBook. Very lightweight and comfortable to carry. Available in various colours. Vegan friendly!</Description>
            <Features>
              <h4>Features and materials</h4>
              <ul>
                <li>Shit</li>
                <li>Other shit</li>
              </ul>
            </Features>
            <Info>Our products are made to order. Please allow 2-3 weeks for shipment. You need it fast? Let us know!</Info>
          </ProductInfo>
        </Container>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ products }) => ({ products });

export default withRouter(connect(mapStateToProps, { fetchProduct })(Product));