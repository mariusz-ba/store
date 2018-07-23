import React, { Component } from 'react';
import { 
  Figure,
  Picture,
  Figcaption,
  Title, TitleName, TitlePrice,
  StyledLink 
} from './styles';

export default class Product extends Component {
  render() {
    const { _id, name, picture, price } = this.props;

    return (
      <Figure>
        <Picture src={picture} alt={name}/>
        <Figcaption>
          <Title>
            <TitleName>{name}</TitleName>
            <TitlePrice>&euro; {price}</TitlePrice>
          </Title>
          <StyledLink to={`/products/${_id}`}>Visit</StyledLink>
          {this.props.children}
        </Figcaption>
      </Figure>
    )
  }
}