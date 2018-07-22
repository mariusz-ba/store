import React, { Component } from 'react';
import { Figure, Picture, Figcaption, Title, StyledLink } from './styles';

export default class Product extends Component {
  render() {
    const { _id, name, picture } = this.props;

    return (
      <Figure>
        <Picture src={picture} alt={name}/>
        <Figcaption>
          <Title>{name}</Title>
          <StyledLink to={`/products/${_id}`}>Visit</StyledLink>
        </Figcaption>
      </Figure>
    )
  }
}