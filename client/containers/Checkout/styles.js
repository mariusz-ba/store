import styled from 'styled-components';
import { media } from 'utils/style-utils';

// Basic layout styles
export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin: 1rem 0;

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`

Layout.Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`

Layout.Section.Heading = styled.h3`
  margin: 1rem 0;
  color: rgba(0, 0, 0, .5);
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
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 3px;
    height: 5rem;

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
    border: 1px solid #1086ed;
    box-shadow: 0 0 5px #1086ed;
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

Address.Heading = styled.div`
  text-align:center;
  margin-bottom: 1rem;
`

Address.Field = styled.div`
  input {
    font-size: 1em;
    padding: .5rem 1rem;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 3px;
  }

  &:not(:last-of-type) {
    margin-bottom: .5rem;
  }
`

// Summary
export const Summary = styled.div`
  margin: 2rem 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, .125);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`

Summary.Parts = styled.ul`
  list-style-type: none;
  margin-bottom: 2rem;
`

Summary.Part = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;

  font-size: ${props => props.total ? '1.3em' : '1em' };
  font-weight: ${props => props.total ? 'bold' : '400' };
  color: ${props => props.total ? '#1a1a1a' : 'rgba(0, 0, 0, .5)' };
  border-top: ${props => props.total ? '1px solid rgba(0, 0, 0, .125)' : 'none  ' };

  span {
    display: block;
    padding: 1rem 0;
    text-align: right;

    &:nth-of-type(1) {
      padding-right: 1rem;
      border-right: 1px solid rgba(0, 0, 0, .125);  
    }
  }

  &:first-of-type {
    span {
      padding-top: 0rem;
    }
  }

  &:last-of-type {
    span {
      padding-bottom: 0;
    }
  }
`

Summary.Button = styled.button`
  border: 0;
  outline: 0;
  background: ${props => props.disabled ? 'rgba(0, 0, 0, .5)' : '#1086ed'};
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  font-size: 1em;
  border-radius: 3px;
  transition: background linear .2s;

  &:hover {
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    background: ${props => props.disabled ? 'rgba(0, 0, 0, .5)' : '#10a0ed'};
  }
`