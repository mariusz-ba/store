import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from 'actions/productsActions';
import { ProductsList } from 'components/products';
import Slider from 'components/slider';
import Wrapper from 'blocks/Wrapper';

class Home extends Component {
  state = {
    images: [
      'https://images.unsplash.com/photo-1503532899220-c678a6808a63?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9f4900370bef7237707e6d26b60dbf41&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1500907789384-0c3b4c3bdce4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fcc07ca2525ef8f0d0e70a4655f22da9&auto=format&fit=crop&w=1350&q=80',
      'https://images.unsplash.com/photo-1519256155806-cd510524ed97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1b92dd501bb6982f36f6b16819f40a4a&auto=format&fit=crop&w=1934&q=80',
    ]
  }

  componentDidMount = () => {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    const { images } = this.state;

    return (
      <Wrapper>
        <Slider images={images}/>
        <ProductsList products={Object.values(products.products)}/>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps, { fetchProducts })(Home);