import styled from 'styled-components';

export const Addresses = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`

Addresses.Heading = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
`

export const List = styled.ul`
  list-style-type: none;
`

List.Item = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;

  span {
    display: block;
    padding: 0 1rem;
    &:nth-of-type(1) { text-align: right; font-weight: bold; }
    &:nth-of-type(2) { color: rgba(0, 0, 0, .5); }
  }
  
  &:not(:last-of-type) {
    margin-bottom: .5rem;
  }
`

export const Section = styled.div`
  margin-bottom: 1rem;

  span {
    color: rgba(0, 0, 0, .5);
  }
`