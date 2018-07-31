import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style-type: none;
`

export const Item = styled(Link)`
  color: ${props => props.selected ? '#1086ed' : 'rgba(0, 0, 0, .5)'};

  display: grid;
  grid-template-columns: 1rem auto;
  grid-column-gap: 1rem;

  text-decoration: none;
  padding: 1.5rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, .125);

  &:hover {
    cursor: pointer;
    background: linear-gradient(to right, rgba(16, 134, 237, .1), #fff 30%);
  }
`

Item.Icon = styled.span`
  display: flex;
  align-items: center;
`

Item.Text = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: .875em;
  font-weight: bold;
`

Item.Badge = styled.span`
  padding: .2rem;
  border-radius: 3px;
  background: #1086ed;
  color: white;
`