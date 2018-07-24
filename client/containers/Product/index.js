import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions/productsActions';
import { withRouter } from 'react-router-dom';

import { Wrapper } from '../../components/layout';
import { Container } from './styles';

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
    const { products } = this.props.products;
    const pictures = products[id] ? [products[id].picture] : []

    return (
      <Wrapper>
        <Container>
          <PicturePreview pictures={pictures}/>
          <div>
            <h1>Product info</h1>
            <code>
              <pre>
                {JSON.stringify(products[id], null, 2)}
              </pre>
            </code>
          </div>
        </Container>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ products }) => ({ products });

export default withRouter(connect(mapStateToProps, { fetchProduct })(Product));