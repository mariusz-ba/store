import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Figure = styled.figure`
  position: relative;  
  width: 100%;

  &:hover figcaption {
    opacity: 1;
  }
`

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Figcaption = styled.figcaption`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity linear .2s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .5);
    z-index: -1;
  }
`

const Title = styled.h3`
  color: #fff;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  border-radius: 3px;
  border: 1px solid #fff;

  transition: background linear .125s;

  &:hover {
    background: #fff;
    color: #1a1a1a;
  }
`

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