import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <form>
        <input type="text" placeholder="Name" value={name} onChange={this.changeName}/>
        <input type="text" placeholder="Short" value={description} onChange={this.changeDescription}/>
        <button type="submit" onClick={this.submit}>Submit</button>
      </form>
    )
  }
}