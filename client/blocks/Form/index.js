import styled from 'styled-components';

const Form = styled.form`
  margin-top: 1rem;
`;

Form.Field = styled.div`
  display: block;
  margin-bottom: 1rem;
`

Form.Label = styled.label`
  font-weight: bold;
  font-size: .875rem;
  margin-bottom: .5rem;
  display: flex;
  flex-direction: column;
`

Form.Input = styled.input`
  font-size: 1em;
  margin-top: .5rem;
  padding: .5rem;
  border: 0;
  border-radius: 3px;
`

export default Form;