import styled from 'styled-components';

const Button = styled.button`
  border: 0;
  outline: 0;
  border-radius: 3px;
  padding: .5rem 1rem;
  transition: background linear .2s;

  color: ${ 
    props => props.type ? 
      colors[props.type].color : 
      colors['light'].color 
  };

  background: ${ 
    props => props.type ? 
      colors[props.type].background : 
      colors['light'].background 
  };
  
  &:hover {
    cursor: pointer;

    background: ${ 
      props => props.type ? 
        colors[props.type].hover : 
        colors['light'].hover
    };
  }
`

const colors = {
  primary: { background: '#007bff', color: '#fff', hover: '#0069d9' },
  secondary: { background: '#6c757d', color: '#fff', hover: '#5a6268' },
  success: { background: '#28a745', color: '#fff', hover: '#218838' },
  danger: { background: '#dc3545', color: '#fff', hover: '#c82333' },
  light: { background: '#f8f9fa', color: '#212529', hover: '#e2e6ea' },
  dark: { background: '#343a40', color: '#fff', hover: '#23272b' },
}

export default Button;