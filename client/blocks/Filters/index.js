import styled from 'styled-components';

const Filters = styled.form`
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
`

Filters.Section = styled.div`
  margin-bottom: 1rem;
`

Filters.Section.Header = styled.h3`
  color: #555555;
  margin-bottom: .5rem;
`

Filters.Section.Body = styled.div`
  select,
  input {
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 3px;
  }

  select {
    width: 100%;
    font-size: .875em;
    padding: .5rem;
  }

  input {
    width: 100%;
    padding: .5rem;
    font-size: .875em;

    &:not(:last-of-type) {
      margin-bottom: .5rem;
    }
  }
`

Filters.Submit = styled.button`
  font-size: .875em;
  border: 0;
  outline: 0;
  color: #fff;
  background: #c01a1a;
  border-radius: 3px;
  padding: .5rem 1rem;

  &:hover {
    cursor: pointer;
    background: #a01a1a;
  }
`

export default Filters;