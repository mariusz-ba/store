import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSizes } from 'actions/sizesActions';
import { 
  fetchProduct,
  updateProduct,
  createProductAvailability,
  updateProductAvailability,
  deleteProductAvailability
} from 'actions/productsActions';
import { fetchCategories } from 'actions/categoriesActions';

import ProductEditor from '../ProductEditor';
import ProductAvailabilityEditor from '../ProductAvailabilityEditor';

import Button from 'blocks/Button';
import { Title, Description } from 'blocks/Dashboard';
import styled from 'styled-components';

const Group = styled.div`
  margin-top: 1rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, .125);

  h4 {
    text-align: center;
    margin: 1rem 0;
  }

  & > div {
    padding: 0 1rem;
  }

  input,
  select {
    border: 1px solid rgba(0, 0, 0, .125);
  }
`

const Available = styled.div`
  display: flex;
  div, form { margin: 0; }
  & > div { flex-grow: 2; }
  & > button { margin-left: 1rem; }
`

class ProductsEdit extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id)
      this.fetchData();
  }

  fetchData = () => {
    this.props.fetchCategories();
    this.props.fetchProduct(this.props.match.params.id);
    this.props.fetchSizes();
  }

  onSubmit = product => {
    this.props.updateProduct(product._id, product);
  }

  submitAvailability = availability => {
    const { _id, product, size, amount } = availability;
    if(_id)
      this.props.updateProductAvailability(_id, size, amount);
    else
      this.props.createProductAvailability(product, size, amount);
  }

  deleteProductAvailability = (availabilityId, productId) => {
    this.props.deleteProductAvailability(availabilityId, productId);
  }

  render() {
    const productId = this.props.match.params.id;
    const { categories } = this.props.categories;
    const { sizes } = this.props.sizes;
    const product = this.props.products.products[productId];

    if(!product)
      return (
        <div>
          <Title>Not found</Title>
          <Description>This product does not exist</Description>
        </div>
      )

    return (
      <div>
        <Title>Edit product</Title>
        <Description>Use form below to update products data and availability</Description>
        <ProductEditor
          { ...product }
          categories={Object.values(categories)}
          onSubmit={this.onSubmit}
        />
        <Group>
        <h4>Available sizes</h4>
        {
          product.availability.map(availability => (
            <Available key={availability._id}>
              <ProductAvailabilityEditor
                { ...availability }
                product={product._id}
                sizes={Object.values(sizes)}
                onSubmit={this.submitAvailability}
              />
              <Button mode="danger" onClick={() => this.deleteProductAvailability(availability._id, product._id)}>Delete</Button>
            </Available>
          ))
        }
        <ProductAvailabilityEditor
          product={product._id}
          sizes={Object.values(sizes)}
          onSubmit={this.submitAvailability}
        />
        </Group>
      </div>
    )
  }
}

const mapStateToProps = 
  ({ categories, products, sizes }) => 
  ({ categories, products, sizes });

export default connect(
  mapStateToProps, 
  { 
    fetchCategories, 
    fetchSizes,
    fetchProduct,
    updateProduct,
    createProductAvailability,
    updateProductAvailability,
    deleteProductAvailability
  }
)(ProductsEdit);