import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchProduct } from 'actions/productsActions';
import Spacer from 'blocks/Spacer';
import Wrapper from 'blocks/Wrapper';
import { 
  Container,
  ProductInfo,
  Name,
  Purchase,
  PurchaseButton, PurchasePrice,
  Description,
  Features
} from './styles';

import { addProduct } from 'actions/basketActions';

import PicturePreview from 'components/picture-preview';

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
              <PurchaseButton onClick={() => this.props.addProduct(product)}>BUY</PurchaseButton>
              <PurchasePrice>&euro; {product.price}</PurchasePrice>
            </Purchase>
            <Description>{product.description}</Description>
            <Features>
              <h4>Features and materials</h4>
              <ul>
              {
                product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))
              }
              </ul>
            </Features>
          </ProductInfo>
        </Container>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ products }) => ({ products });

export default withRouter(connect(mapStateToProps, { fetchProduct, addProduct })(Product));