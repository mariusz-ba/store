import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns ? props.columns : 1}, 1fr);
  grid-template-rows: repeat(${props => props.rows ? props.rows : 1}, 1fr);
  grid-column-gap: ${props => props.columnGap ? props.columnGap : 0 };
  grid-row-gap: ${props => props.rowGap ? props.rowGap : 0 };
`

export default Grid;