import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SizeEditor extends Component {
  state = {
    name: this.props.name,
    short: this.props.short
  }

  static propTypes = {
    name: PropTypes.string,
    short: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  }

  changeName = e => {
    this.setState({ name: e.target.value });
  }

  changeShort = e => {
    this.setState({ short: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.short);
  }

  render() {
    const { name, short } = this.state;

    return (
      <form>
        <input type="text" placeholder="Name" value={name} onChange={this.changeName}/>
        <input type="text" placeholder="Short" value={short} onChange={this.changeShort}/>
        <button type="submit" onClick={this.submit}>Submit</button>
      </form>
    )
  }
}