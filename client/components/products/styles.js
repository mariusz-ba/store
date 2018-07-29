import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'utils/style-utils';

export const Products = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`

export const ProductItem = styled.li`
  height: 400px;
  position: relative;
  width: 100%;
`

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
  &:hover figcaption {
    opacity: 1;
  }
`

export const Picture = styled.img`
  display: block;
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

export const TitleName = styled.h2`
  text-decoration: underline;
  font-weight: 400;
  margin-bottom: 1rem;
  line-height: 1.5;
  letter-spacing: .1em;
`

export const TitlePrice = styled.h2`
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
  padding: .7em 1.4em;

  transition: background linear .125s;

  &:hover {
    background: #fff;
    color: #1a1a1a;
    cursor: pointer;
  }
`

export const StyledLink = Button.withComponent(Link);