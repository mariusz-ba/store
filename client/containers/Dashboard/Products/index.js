import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSizes } from 'actions/sizesActions';
import { fetchProducts, deleteProduct } from 'actions/productsActions';
import { fetchCategories } from 'actions/categoriesActions';

import ProductsTable from 'components/ProductsTable';

import { Title, Description } from 'blocks/Dashboard';

class Products extends Component {
  componentDidMount() {
    this.props.fetchSizes();
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  deleteProduct = (productId) => {
    this.props.deleteProduct(productId);
  }

  render() {
    const { sizes } = this.props.sizes;
    const { products } = this.props.products;
    const { categories } = this.props.categories;

    return (
      <div>
        <Title>Products</Title>
        <Description>Use list below to search and manage products</Description>
        <ProductsTable 
          products={Object.values(products)} 
          sizes={sizes} 
          categories={categories}
          onDeleteProduct={(productId) => this.deleteProduct(productId)}/>
      </div>
    )
  }
}

const mapStateToProps = 
  ({ products, sizes, categories }) => 
  ({ products, sizes, categories });

export default connect(
  mapStateToProps, 
  { fetchProducts, fetchCategories, fetchSizes, deleteProduct }
)(Products);