import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  onInputChange = e => {
    let value = parseInt(e.target.value);
    if(!value) value = 1;
    if(value < 1) value = 1;
    if(value > 999) value = 999;
    this.props.onChange(value);
  }

  render() {
    const { value } = this.props;

    return (
      <input type="text" value={value} onChange={this.onInputChange}/>
    )
  }
}