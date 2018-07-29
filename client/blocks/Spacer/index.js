import styled from 'styled-components';

const Spacer = styled.div`
  position: relative;
  text-align: center;

  margin-top: 3rem;
  margin-bottom: 3rem;

  font-size: 200%;
  font-weight: 300;
  transform: rotateZ(180deg);

  &::before, &::after {
    content: '';
    position: absolute;
    width: calc(50% - 2rem);
    height: 1px;
    top: 50%;
    transform: translate(0, -50%);
    
    background-image: linear-gradient(to right, black 33%, rgba(255,255,255,0) 0%);
    background-position: bottom;
    background-size: 3px 1px;
    background-repeat: repeat-x;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`

export default Spacer;