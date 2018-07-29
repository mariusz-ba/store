import styled from 'styled-components';
import { media } from 'utils/style-utils';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  padding-bottom: 1rem;
  z-index: 1000;
  background: #fff;
  transition: transform ease-in .2s;

  transform: ${props => props.closed ? 'translate3d(100%, 0, 0)' : 'translate3d(0, 0, 0)'};
  
  ${
    media.mobile`
      width: 100%;
      transform: ${props => props.closed ? 'translate3d(100%, 0, 0)' : 'translate3d(0, 0, 0)'};
    `
  }
`

export const Title = styled.h2`
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: .1rem;

  color: ${props => props.disabled ? '#555555' : '#1a1a1a'};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
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
  display: block;
  position: absolute;
  top: 0;
  left: -200%;
  width: 200%;
  height: 100%;
  background: rgba(0, 0, 0, .75);

  transition: opacity linear .2s;

  visibility: ${props => props.closed ? 'hidden' : 'visible'};
  opacity: ${props => props.closed ? 0 : 1};
`

export const Scrollable = styled.div`
  overflow-y: scroll;
  height: 100%;
  padding: 1rem;
  padding-bottom: 5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background: #a0a0a0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #707070;
  }
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