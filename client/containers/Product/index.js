import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchSizes } from 'actions/sizesActions';
import { addProduct } from 'actions/basketActions';
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

import PicturePreview from 'components/picture-preview';

class Product extends Component {
  state = {
    size: null,
    errors: {}
  }

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
    this.props.fetchSizes();
  }

  changeSize = e => {
    if(e.target.value === '')
      this.setState({ size: null, errors: {} })
    else {
      const { sizes } = this.props.sizes;
      this.setState({ 
        size: sizes[e.target.value],
        errors: {}
      });
    }
  }

  onPurchaseClicked = (product) => {
    const { size } = this.state;

    if(size) {
      this.props.addProduct({ 
        ...product, 
        size,
        amount: 1
      });
    } else {
      this.setState({
        errors: { size: 'Please select size' }
      })
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { products, isFetching } = this.props.products;
    const { sizes } = this.props.sizes;

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
            { this.state.errors.size &&
              <p style={{color: 'red'}}>{this.state.errors.size}</p>
            }
            <select onChange={this.changeSize} defaultValue="">
              <option value="">Choose size</option>
            { sizes &&
              product.availability.map(availability => {
                let disabled = false;
                if(availability.amount === 0)
                  disabled = true;
                return (
                  <option 
                    disabled={disabled}
                    key={availability.size} 
                    value={availability.size}>
                    { sizes[availability.size] &&
                      sizes[availability.size].short
                    }
                  </option>
                )
              })
            }
            </select>
            <Purchase>
              <PurchaseButton onClick={() => this.onPurchaseClicked(product)}>BUY</PurchaseButton>
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

const mapStateToProps = ({ products, sizes }) => ({ products, sizes });

export default withRouter(connect(mapStateToProps, { fetchProduct, addProduct, fetchSizes })(Product));