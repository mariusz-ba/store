import styled from 'styled-components';
import { media } from 'utils/style-utils';

export const Header = styled.header`
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, .125);
  margin-bottom: 3rem;
position: relative;
`

export const Container = styled.div`
  width: 83.3333%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

export const Branding = styled.div`
  flex: 1;

  a {
    display: block;
    height: 5rem;

    img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
    }
  }
  
`

export const Navigation = styled.nav`
  flex: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.mobile`
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 10;
    background: #fff;
    margin-top: 1px;
    padding-bottom: 1rem;
    background: #fafafa;
    border-bottom: 1px solid rgba(0, 0, 0, .125);
  `}
`

Navigation.Menu = styled.ul`
  flex: 3;
  justify-content: center;
  list-style-type: none;
  display: flex;

  ${media.mobile`
    margin-top: 1rem;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, .125);
  `}

  li {
    margin: 0 1rem;

    ${media.mobile`
      width: 83.3333%;
      margin: 0 auto;
    `}

    a {
      display: block;
      text-decoration: none;
      color: #1a1a1a;
      transition: color linear .2s;
      font-weight: bold;
      font-size: 1.2em;

      &:hover {
        color: #c01a1a;
      }

      ${media.mobile`
        padding: 1rem 0;
      `}
    }
  }
`

Navigation.Basket = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  ${media.mobile`
    justify-content: flex-start;
    width: 83.3333%;
    margin: 0 auto;
  `}

  button {
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 1.2rem;
    display: block;

    ${media.mobile`
      padding: 1rem 0;
      padding-top: 2rem;
    `}

    transition: color linear .2s;

    &:hover {
      cursor: pointer;
      color: #c01a1a;
    }

    span {
      display: block;
      &:nth-of-type(1) { margin-bottom: .5rem; }
      &:nth-of-type(2) {
        font-size: .875em;

        ${media.mobile`
          font-size: 1.2rem;
          font-weight: bold;
        `}
      }
    }
  }
`

export const Toggler = styled.input`
  appearance: none;
  display: none;

  ${media.mobile`
    display: block;
  `}

  position: absolute;
  top: 50%;
  right: 8.335%;
  height: 24px;
  width: 32px;
  transform: translate(0, -50%);

  border-bottom: 2px solid rgba(0, 0, 0, .5);

  outline: 0;

  &:hover {
    cursor: pointer;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(0, 0, 0, .5);
    transition: transform linear .2s;
  }

  &::before {
    top: 0;
  }

  &::after {
    top: 50%;
    transform: translate(0, -calc(50% - 1px));
  }

  /* &:checked {
    border-bottom: none;

    &::before { transform: rotate(45deg) translate(4px, 12px); }
    &::after { transform: rotate(-45deg) translate(-3.2px, -3.8px); }
  } */

  &:checked ~ nav {
    display: block;
  }
`