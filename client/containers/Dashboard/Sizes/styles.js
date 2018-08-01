import styled from 'styled-components';

export const Cards = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

Cards.Item = styled.li``