import styled from 'styled-components';

export const Layout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  
  * {
    font-family: 'Font Awesome 5 Free', sans-serif;
  }
`

Layout.Left = styled.div`
  background: #fff;
  box-shadow: 1px 0 2px rgba(0, 0, 0, .125);
`

Layout.Right = styled.div`
  background: rgba(0, 0, 0, .02);
  padding: 1rem;
`