import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from 'actions/categoriesActions';
import { createProduct } from 'actions/productsActions';

import ProductEditor from '../ProductEditor';

import { Title, Description } from 'blocks/Dashboard';

class ProductsNew extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  onSubmit = product => {
    this.props.createProduct(product);
  }

  render() {
    const categories = this.props.categories;

    return (
      <div>
        <Title>Create new product</Title>
        <Description>Use form below to create new product</Description>
        <ProductEditor
          categories={Object.values(categories)}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { fetchCategories, createProduct })(ProductsNew);