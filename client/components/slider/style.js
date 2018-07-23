import styled, { keyframes } from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  height: 500px;
`

export const SliderImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity linear 1s;
  opacity: ${props => props.fade ? 0 : 1};
`