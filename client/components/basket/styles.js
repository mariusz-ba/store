import styled from 'styled-components';
import { media } from '../layout/style-utils';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100%;
  z-index: 1000;
  padding: 1rem;
  background: #fff;
  transition: transform ease-in .2s;

  ${
    media.mobile`
      width: 100vw;
      transform: ${props => props.closed ? 'translate3d(100vw, 0, 0)' : 'translate3d(0, 0, 0)'};
    `
  }

  transform: ${props => props.closed ? 'translate3d(50vw, 0, 0)' : 'translate3d(0, 0, 0)'};
`

export const Title = styled.h2`
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: .1rem;

  color: ${props => props.disabled ? '#555555' : '#1a1a1a'};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 1rem;
  border: 0;
  outline: 0;
  background: transparent;
  color: #1a1a1a;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
  }
`

export const OutsideClickHandler = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, .75);

  transition: opacity linear .2s;

  transform: translate3d(-100vw, 0, 0);

  visibility: ${props => props.closed ? 'hidden' : 'visible'};
  opacity: ${props => props.closed ? 0 : 1};
`

export const Products = styled.table`
  border: none;
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 2rem;

  thead {
    border-bottom: 1px solid #1a1a1a;

    &::after {
      content: '';
      display: block;
      height: .5rem;
      color: transparent;
    }
  }
  th {
    text-align: left;
  }
  
  tbody {
    tr:nth-of-type(2n) {
      background: rgba(0, 0, 0, .02);
    }
    td {
      border: none;
      padding: 1rem 0;
    }
  }
`

export const Product = styled.tr`
  td {
    text-align: center;

    span {
      display: block;
      &:nth-of-type(1) { font-weight: bold; }
      &:nth-of-type(2) { color: #555555; }
    }

    img {
      height: 100px;
    }

    button {
      border: 0;
      outline: 0;
      background: transparent;
      font-size: 150%;

      transition: color linear .2s;

      &:hover {
        cursor: pointer;
        color: #c01a1a;
      }
    }
    
    &:nth-of-type(2),
    &:nth-of-type(3) { text-align: left; }
    &:nth-of-type(5) { font-weight: bold; }
    
    input {
      max-width: 3em;
    }
  }

`