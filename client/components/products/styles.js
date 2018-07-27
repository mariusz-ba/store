import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

export const Grid = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(${props => props.columns ? props.columns : 1}, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`

export const Figure = styled.figure`
  position: relative;  
  width: 100%;

  &:hover figcaption {
    opacity: 1;
  }
`

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Figcaption = styled.figcaption`
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

export const Title = styled.div`
  color: #fff;
  text-align: center;
`

export const TitleName = styled.h3`
  text-decoration: underline;
  font-weight: 400;
  margin-bottom: 1rem;
  line-height: 1.5;
  letter-spacing: .1em;
`

export const TitlePrice = styled.h3`
  font-weight: 400;
`

export const Button = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  font-size: 1em;
  padding: .5em 1em;

  transition: background linear .125s;

  &:hover {
    background: #fff;
    color: #1a1a1a;
    cursor: pointer;
  }
`

export const StyledLink = Button.withComponent(Link);