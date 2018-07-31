import styled from 'styled-components';

// Basic layout styles
export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin: 1rem 0;
`

Layout.Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`

// Checkbox options
export const Options = styled.ul`
  list-style-type: none;
`

Options.Item = styled.li`
  display: block;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 2px solid rgba(0, 0, 0, .125);
    border-radius: 3px;

    img {
      width: 64px;
      max-height: 64px;
      margin-right: .5rem;
    }

    &:hover {
      cursor: pointer;
    }
  }

  input[type=radio] {
    display: none;
  }
  input[type=radio]:checked ~ label{
    font-weight: bold;
    border: 2px solid #1086ed;
  }
`

Options.Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Options.Name = styled.span`
  display: block;
  margin-right: .5rem;
`

Options.Price = styled.span`
  display: block;
  font-size: 1.3em;
  font-weight: bold;
  color: green;
`

// Addresses
export const Address = styled.div`

`