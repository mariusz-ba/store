import styled from 'styled-components';

const Pagination = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

Pagination.Item = styled.li`
  padding: .5rem;
  border: 1px solid rgba(0, 0, 0, .125);
  border-radius: 3px;

  opacity: ${props => props.disabled ? 0.8 : 1};
  color: ${props => props.disabled ? 'rgba(0, 0, 0, .125)' : '#1a1a1a'};
  font-weight: ${props => props.disabled ? 'bold' : 400};

  &:not(:last-of-type) {
    margin-right: .5rem;
  }

  &:hover {
    cursor: ${props => props.disabled ? 'default' : 'pointer'};
    background: ${props => props.disabled ? 'inherit' : 'rgba(0, 0, 0, .02)'};
  }
`

export default Pagination;