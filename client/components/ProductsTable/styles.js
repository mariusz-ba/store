import styled from 'styled-components';

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