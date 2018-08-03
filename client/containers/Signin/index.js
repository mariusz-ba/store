import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from 'actions/authActions';
import { isEmpty } from 'lodash';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  
  * {
    font-family: sans-serif;
  }
`

const Form = styled.form`
  max-width: 400px;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, .125);
  border-radius: 3px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
    font-size: .875em;
  }
`

const Input = styled.input`
  margin-top: .3rem;
  font-size: 1em;
  padding: .5rem;

  outline: ${props => props.error ? '1px solid red' : '0' };
`

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: .5rem;
  background: #007bff;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  transition: background linear .2s; 

  &:hover {
    cursor: pointer;
    background: #0069d9;
    box-shadow: inset 0 0 0 1px #0059c9;
  }
`

const Error = styled.small`
  display: block;
  color: #dc3545;
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
`

export class Signin extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  submit = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = await this.props.signIn({username, password});
    if(!isEmpty(user))
      this.props.history.push('/dashboard');
  }

  render() {
    const { username, password } = this.state;
    const { isFetching, errors } = this.props.auth;

    return (
      <Container>
        <Form>
          { errors &&
            errors.form &&
            <Error>{errors.form}</Error>
          }
          <Field>
            <label>Username</label>
            <Input
              error={!isEmpty(errors)}
              type="text" 
              name="username" 
              value={username} 
              onChange={this.handleChange}/>
          </Field>
          <Field>
            <label>Password</label>
            <Input 
              error={!isEmpty(errors)}
              type="password" 
              name="password" 
              value={password} 
              onChange={this.handleChange}/>
          </Field>
          <Button 
            type="submit" 
            onClick={this.submit} disabled={isFetching}>
            {isFetching ? '...' : 'Sign in'}
          </Button>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { signIn })(Signin)