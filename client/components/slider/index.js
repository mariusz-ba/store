import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  SliderContainer,
  SliderImage
} from './style';

export default class Slider extends Component {
  state = {
    current: 0
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const { current } = this.state;
      const next = current + 1 >= this.props.images.length ? 0 : current + 1;
      this.setState({ current: next })
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { images } = this.props;

    return (
      <SliderContainer>
        { images &&
          images.map((image, index) => (
            <SliderImage key={index} src={image} alt={image} fade={index!==this.state.current}/>
          ))
        }
      </SliderContainer>
    )
  }
}

Slider.propTypes = {
  images: PropTypes.array.isRequired
}