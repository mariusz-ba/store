import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Table = styled.table`
  width: 100%;  
  border-collapse: collapse;
`

Table.Head = styled.thead`
  td {
    background: #1086ed;
    color: #fff;
    padding: 1rem;
    font-weight: bold;
  }
`

Table.Body = styled.tbody`
  tr:nth-of-type(2n) td {
    background: rgba(0, 0, 0, .02);
  }

  td { padding: 1rem; }
  td:nth-of-type(1) {
    width: 100px;
    img {
      max-height: 100px;
      width: 100%;
    }
  }
  td:nth-of-type(2) {
    padding-left: .5rem;
    span {
      display: block;

      &:nth-of-type(1) {
        font-weight: bold;
      }

      &:nth-of-type(2) {
        font-size: .875em;
        color: rgba(0, 0, 0, .5);
      }
    }
  }
  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5) {
    font-size: .875em;
    color: rgba(0, 0, 0, .5);
  }
  td:nth-of-type(6) {

    div {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`

export const Button = styled.button`
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  font-size: 1.3em;
  font-weight: bold;
  text-decoration: none;
  color: #1a1a1a;
  transition: color linear .1s;

  &:hover {
    cursor: pointer;
    color: #1086ed;
  }
`

export const Link = Button.withComponent(RouterLink);