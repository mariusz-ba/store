import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Spacer from 'blocks/Spacer';
import Wrapper from 'blocks/Wrapper';
import Filters from 'blocks/Filters';

import { ProductsList } from 'components/products';

import { fetchCategories } from 'actions/categoriesActions';
import { fetchProducts } from 'actions/productsActions';
import { fetchSizes } from 'actions/sizesActions';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`

Layout.Left = styled.div`
`

Layout.Right = styled.div`
`

const Sorting = styled.div`

`

class Products extends Component {
  state = {
    category: '',
    size: '',
    priceFrom: '',
    priceTo: ''
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchProducts();
    this.props.fetchSizes();
  }

  changeCategory  = e => { this.setState({ category: e.target.value }) }
  changeSize      = e => { this.setState({ size: e.target.value }) }
  changePriceFrom = e => { this.setState({ priceFrom: e.target.value }) }
  changePriceTo   = e => { this.setState({ priceTo: e.target.value }) }

  onFilter = e => {
    e.preventDefault();
    // Fetch products with new filter
    const { category, size, priceFrom, priceTo } = this.state;
    this.props.fetchProducts({
      limit: 15,
      skip: 0,
      category,
      size, 
      priceFrom, 
      priceTo
    });
  }

  render() {
    const { category, size, priceFrom, priceTo } = this.state;
    const { categories, products, sizes } = this.props;

    return (
      <Wrapper>
        <Spacer>&#10699;</Spacer>
        <Layout>
          <Layout.Left>
            <Filters>
              <Filters.Section>
                <Filters.Section.Header>Categories</Filters.Section.Header>
                <Filters.Section.Body>
                  <select onChange={this.changeCategory} defaultValue="">
                    <option value="">All Categories</option>
                    { categories &&
                      Object.values(categories.categories).map(category => (
                        <option key={category._id} value={category._id}>{category.name}</option>
                      ))
                    }
                  </select>
                </Filters.Section.Body>
              </Filters.Section>
              <Filters.Section>
                <Filters.Section.Header>Price</Filters.Section.Header>
                <Filters.Section.Body>
                  <input type="text" placeholder="From" value={priceFrom} onChange={this.changePriceFrom}/>
                  <input type="text" placeholder="To" value={priceTo} onChange={this.changePriceTo}/>
                </Filters.Section.Body>
              </Filters.Section>
              <Filters.Section>
                <Filters.Section.Header>Size</Filters.Section.Header>
                <Filters.Section.Body>
                  <select onChange={this.changeSize} defaultValue="">
                    <option value="">All Sizes</option>
                    { sizes &&
                      Object.values(sizes.sizes).map(size => (
                        <option key={size._id} value={size._id}>Size: {size.short}</option>
                      ))
                    }
                  </select>
                </Filters.Section.Body>
              </Filters.Section>
              <Filters.Submit type="submit" onClick={this.onFilter}>Filter</Filters.Submit>
            </Filters>
          </Layout.Left>
          <Layout.Right>
            <Sorting>
              <select>
                <option>Creation date</option>
                <option>Price</option>
              </select>
              <select>
                <option>Descending</option>
                <option>Ascending</option>
              </select>
            </Sorting>
            <ProductsList products={Object.values(products.products)}/>
            <h2>Pagination</h2>
          </Layout.Right>
        </Layout>
      </Wrapper>
    )
  }
}

const mapStateToProps = 
  ({ categories, products, sizes }) => 
  ({ categories, products, sizes });

export default connect(
  mapStateToProps, 
  { fetchCategories, fetchProducts, fetchSizes }
)(Products);