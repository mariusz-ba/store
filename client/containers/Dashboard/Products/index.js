import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSizes } from 'actions/sizesActions';
import { 
  fetchProducts, 
  updateProduct,
  deleteProduct,
  createProductAvailability,
  updateProductAvailability,
  deleteProductAvailability
} from 'actions/productsActions';
import { fetchCategories } from 'actions/categoriesActions';

import AvailabilityEditor from 'components/editors/AvailabilityEditor';
import ProductEditor from 'components/editors/ProductEditor';
import ProductsTable from 'components/ProductsTable';
import Expander from 'components/Expander';

class Products extends Component {
  componentDidMount() {
    this.props.fetchSizes();
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  onSubmitProduct = (product) => {
    // Update product in database
    console.log(product);
    this.props.updateProduct(product._id, product);
  }

  onSubmitAvailability = (availability) => {
    // Update availability in database
    console.log(availability);
    const { _id, product, size, amount } = availability;
    if(_id) {
      console.log('updateProductAvailability');
      this.props.updateProductAvailability(_id, size, amount);
    } else {
      console.log('createProductAvailability');
      this.props.createProductAvailability(product, size, amount);
    }
  }

  deleteProduct = (productId) => {
    this.props.deleteProduct(productId);
  }

  deleteProductAvailability = (availabilityId, productId) => {
    this.props.deleteProductAvailability(availabilityId, productId);
  }

  render() {
    const { sizes } = this.props.sizes;
    const { products } = this.props.products;
    const { categories } = this.props.categories;

    return (
      <div>
        <ProductsTable 
          products={Object.values(products)} 
          sizes={sizes} 
          categories={categories}/>
        <ul>
          { products &&
            Object.values(products).map(product => (
              <li key={product._id}>
                <Expander
                  head={(
                    <div>
                      <h1>{product.name}</h1>
                      <p>{product.description}</p>
                    </div>
                  )}
                  body={(
                    <div>
                      <button onClick={() => this.deleteProduct(product._id)}>Delete</button>
                      <ProductEditor
                        { ...product }
                        categories={Object.values(categories)}
                        onSubmit={this.onSubmitProduct}
                      />
                      {
                        product.availability.map(availability => (
                          <div>
                            <AvailabilityEditor
                              { ...availability }
                              product={product._id}
                              sizes={Object.values(sizes)}
                              onSubmit={this.onSubmitAvailability}
                            />
                            <button onClick={() => this.deleteProductAvailability(availability._id, product._id)}>Delete</button>
                          </div>
                        ))
                      }
                      <AvailabilityEditor
                        product={product._id}
                        sizes={Object.values(sizes)}
                        onSubmit={this.onSubmitAvailability}
                      />
                    </div>
                  )}
                />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ products, sizes, categories }) => ({ products, sizes, categories });

export default connect(mapStateToProps, { 
  fetchProducts, updateProduct, deleteProduct, createProductAvailability, updateProductAvailability, deleteProductAvailability, 
  fetchCategories, fetchSizes })(Products);