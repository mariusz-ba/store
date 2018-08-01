import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  SliderContainer,
  SliderImage,
  Indicators,
  Indicator
} from './style';

export default class Slider extends Component {
  state = {
    current: 0
  }

  componentDidMount() {
    this.setTimer(5000);
  }

  componentWillUnmount() {
    if(this.interval)
      clearInterval(this.interval);
  }

  setTimer = delay => {
    if(this.interval)
      clearInterval(this.interval);
    
    this.interval = setInterval(() => {
      const { current } = this.state;
      const next = current + 1 >= this.props.images.length ? 0 : current + 1;
      this.setState({ current: next })
    }, delay)
  }

  setCurrent = index => {
    this.setState({ current: index });
    this.setTimer(5000);
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
        <Indicators>
        { images &&
          images.map((image, index) => (
            <Indicator key={index} onClick={() => this.setCurrent(index)} selected={index === this.state.current}/>
          )) 
        }
        </Indicators>
      </SliderContainer>
    )
  }
}

Slider.propTypes = {
  images: PropTypes.array.isRequired
}