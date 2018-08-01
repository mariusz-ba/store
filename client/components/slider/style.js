import styled, { keyframes } from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  height: 500px;
  margin: 1rem 0;
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

export const Indicators = styled.ul`
  list-style-type: none;
  display: flex;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, 0);
`
export const Indicator = styled.li`
  position: relative;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: rgba(0, 0, 0, .8);

  &:not(:last-of-type) {
    margin-right: .5rem;
  }

  &::before {
    transition: opacity linear .2s;
    opacity: ${props => props.selected ? 1 : 0 };
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: #888;
  }
`