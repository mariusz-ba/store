import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'blocks/Button';
import Form from 'blocks/Form';

export default class CategoryEditor extends Component {
  state = {
    name: this.props.name,
    description: this.props.description
  }

  static propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  }

  changeName = e => {
    this.setState({ name: e.target.value });
  }

  changeDescription = e => {
    this.setState({ description: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.description);
  }

  render() {
    const { name, description } = this.state;

    return (
      <Form>
        <Form.Field>
          <Form.Label>
            Name
            <Form.Input type="text" placeholder="Name" value={name} onChange={this.changeName}/>
          </Form.Label>
        </Form.Field>
        <Form.Field>
          <Form.Label>
            Description
            <Form.Input type="text" placeholder="Description" value={description} onChange={this.changeDescription}/>
          </Form.Label>
        </Form.Field>
        <Button type="submit" onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}