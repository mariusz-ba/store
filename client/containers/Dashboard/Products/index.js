import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchSizes } from 'actions/sizesActions';
import { fetchProducts, deleteProduct } from 'actions/productsActions';
import { fetchCategories } from 'actions/categoriesActions';

import ProductsTable from 'components/ProductsTable';
import Button from 'blocks/Button';
import { Title, Description } from 'blocks/Dashboard';

const NewProductLink = Button.withComponent(Link).extend`
  font-size: 1rem;
  float: right;
  text-decoration: none;
  i {
    margin-right: 1rem;
  }
`;

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
        <Title>
          Products
          <NewProductLink mode="primary" to="/dashboard/products/new"><i className="fas fa-plus"></i>New product</NewProductLink>
        </Title>
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