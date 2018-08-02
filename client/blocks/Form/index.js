import styled from 'styled-components';

const Form = styled.form`
  margin-top: 1rem;
  justify-content: space-between;
`;

Form.Field = styled.div`
  display: ${props => props.inline ? 'flex' : 'block'};
  margin-bottom: 1rem;

  input,
  select {
    margin-right: 1rem;
  }

  select {
    flex-basis: ${props => props.inline ? '200px' : 'auto' }; 
  }
`

Form.Label = styled.label`
  font-weight: bold;
  font-size: .875rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`

Form.Input = styled.input`
  width: 100%;
  font-size: 1em;
  padding: .5rem;
  border: 0;
  border-radius: 3px;
`

Form.Select = Form.Input.withComponent('select');
Form.Textarea = Form.Input.withComponent('textarea');

export default Form;