import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh;
  * {
    font-family: 'Font Awesome 5 Free', sans-serif;
  }
`

Layout.Left = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background: #fff;
  box-shadow: 1px 0 2px rgba(0, 0, 0, .125);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
  }

  &::-webkit-scrollbar-thumb {
    background: #a0a0a0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #707070;
  }
`

Layout.Right = styled.div`
  background: rgba(0, 0, 0, .02);
  padding: 1rem;
  padding-left: calc(250px + 1rem);
  min-height: 100vh;
`

export const Section = styled.div``

Section.Heading = styled.h2`
  margin-bottom: .5rem;
`

Section.Description = styled.h4`
  margin-bottom: 1rem;
  color: rgba(0, 0, 0, .3);
`

export const Cards = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

Cards.Item = styled.li``