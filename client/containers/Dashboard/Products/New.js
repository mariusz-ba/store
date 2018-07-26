import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from 'actions/categoriesActions';
import { createProduct } from 'actions/productsActions';

import ProductEditor from 'components/editors/ProductEditor';

class ProductsNew extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  onSubmit = product => {
    this.props.createProduct(product);
  }

  render() {
    const { categories } = this.props.categories;

    return (
      <div>
        <h1>Create product</h1>
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