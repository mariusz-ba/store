import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Picture = styled.img`
  width: 100%;
  height: auto;
  min-height: 800px;
  object-fit: cover;
  margin-bottom: 1rem;
`

export const PictureList = styled.ul`
  list-style-type: none;
  display: flex;

  li {
    width: 25%;
    margin-right: 1rem;
    position: relative;

    &::last-of-type {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;

      &::after {
        opacity: .3;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0;

      transition: opacity linear .2s;
    }
  }
` 

export const PictureListItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`