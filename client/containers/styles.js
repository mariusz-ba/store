import styled from 'styled-components';
import { media } from 'utils/style-utils';

export const Title = styled.h1`
  text-align: center;
  letter-spacing: .1rem;
`

export const Description = styled.div`
  text-align: center;

  p {
    max-width: 768px;
    margin: 0 auto;
    padding: 1rem 0;
    line-height: 1.5;
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
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  ${
    media.mobile`
      flex-direction: column;
    `
  }
`

export const Picture = styled.img`
  width: 600px;
  height: 400px;
  margin: 1rem;
  object-fit: cover;

  ${
    media.mobile`
      width: 100%;
      height: auto;
    `
  }
`