import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  padding: 1rem 0;
`;

export const Branding = styled(Link)`
  text-decoration: none;
  display: block;
  max-width: max-content;
  margin: 0 auto;
  margin-bottom: 1rem;

  img {
    margin: 0 auto;
    object-fit: cover;
  }
`

export const Navigation = styled.nav`
  margin-top: 2rem;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      margin: 0 1em;

      a {
        text-decoration: none;
        color: #1a1a1a;
        transition: color linear .125s;
        font-weight: bold;

        &:hover {
          color: #c01a1a;
        }
      }
    }
  }
`