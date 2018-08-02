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

import { Title, Description } from 'blocks/Dashboard';

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
        <div>
        {
          product.availability.map(availability => (
            <div key={availability._id}>
              <ProductAvailabilityEditor
                { ...availability }
                product={product._id}
                sizes={Object.values(sizes)}
                onSubmit={this.submitAvailability}
              />
              <button onClick={() => this.deleteProductAvailability(availability._id, product._id)}>Delete</button>
            </div>
          ))
        }
        <ProductAvailabilityEditor
          product={product._id}
          sizes={Object.values(sizes)}
          onSubmit={this.submitAvailability}
        />
        </div>
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