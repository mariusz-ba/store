import styled from 'styled-components';
import { media } from 'utils/style-utils';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`

export const ProductInfo = styled.div`
  padding-left: 2rem;
  ${media.mobile`
    padding-left: 0;
  `}
  color: #555555;
`

export const Name = styled.h4`
  color: #1a1a1a;
  margin-bottom: 2rem;
`

export const Purchase = styled.div`
  border: 2px solid #325ac8;
`

export const PurchaseButton = styled.button`
  border: 0;
  outline: 0;
  width: 100%;
  height: 3rem;
  background: #325ac8;
  color: #fff;
  letter-spacing: .2em;

  &:hover {
    cursor: pointer;
    background: #3250c8;
  }
`

export const PurchasePrice = styled.p`
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  color: #325ac8;
`

export const Description = styled.p`
  margin-top: 3rem;
  line-height: 1.5;
`

export const Features = styled.div`
  margin-top: 1rem;

  ul {
    list-style-type: none;
  }
`