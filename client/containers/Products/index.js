import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { pick, pickBy, identity } from 'lodash';
import styled from 'styled-components';
import qs from 'querystring';

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
    priceTo: '',
    productsOnPage: 3
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchSizes();
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.search !== this.props.location.search)
      this.fetchProducts();
  }

  fetchProducts() {
    // Fetch products list based on query in url
    const { productsOnPage } = this.state;
    const search = qs.parse(this.props.location.search.slice(1));
    const query = pick(search, ['category', 'size', 'priceFrom', 'priceTo']);
    const page = search.page ? parseInt(search.page) : 0;

    this.props.fetchProducts({
      limit: productsOnPage,
      skip: page * productsOnPage,
      ...query
    })
  }

  changeCategory  = e => { this.setState({ category: e.target.value }) }
  changeSize      = e => { this.setState({ size: e.target.value }) }
  changePriceFrom = e => { this.setState({ priceFrom: e.target.value }) }
  changePriceTo   = e => { this.setState({ priceTo: e.target.value }) }

  onFilter = e => {
    e.preventDefault();

    const options = {
      category: this.state.category,
      size: this.state.size,
      priceFrom: this.state.priceFrom,
      priceTo: this.state.priceTo,
    }

    const query = qs.stringify(pickBy(options, identity));
    this.props.history.push(`/products?${query}`)
  }

  render() {
    const { priceFrom, priceTo, productsOnPage } = this.state;
    const { categories, products, sizes } = this.props;

    let query = qs.parse(this.props.location.search.slice(1));

    const pagination = [];
    for(let i = 0; i < products.total / productsOnPage; ++i) {
      query.page = i;
      pagination.push((
        <Link to={`/products?${qs.stringify(query)}`}>Page: {i}</Link>
      ))
    }

    return (
      <Wrapper>
        <code><pre>{JSON.stringify(this.state, null, 2)}</pre></code>
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
            <div>
              <h1>Pagination</h1>
              { pagination }
            </div>
          </Layout.Right>
        </Layout>
      </Wrapper>
    )
  }
}

const mapStateToProps = 
  ({ categories, products, sizes }) => 
  ({ categories, products, sizes });

export default withRouter(connect(
  mapStateToProps, 
  { fetchCategories, fetchProducts, fetchSizes }
)(Products));