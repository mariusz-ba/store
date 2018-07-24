import styled from 'styled-components';
import { media } from '../layout/style-utils';

export const FooterStyled = styled.footer`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  ${
    media.mobile`
      grid-template-columns: 1fr;
    `
  }
`

export const Section = styled.section`
  color: #555555;

  ${
    media.mobile`
      text-align: center  ;
    `
  }

  h4 {
    padding: .5rem 0;
    margin-bottom: 1rem;
    border-top: 1px solid #555555;
    border-bottom: 1px solid #555555;

    ${
      media.mobile`
        border: 0;
        background: rgba(0, 0, 0, .1);
      `
    }
  }

  p {
    line-height: 1.2;
  }

  a {
    color: #325ac8;
    text-decoration: underline;
    letter-spacing: .1rem;

    &:hover {
      text-decoration: none;
    }
  }
`

export const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${
    media.mobile`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
  }

  img {
    margin-right: 1rem;
    margin-bottom: 1rem;
    height: 32px;
    object-fit: cover;
  }
`