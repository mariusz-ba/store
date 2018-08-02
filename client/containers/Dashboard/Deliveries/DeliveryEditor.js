import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from 'blocks/Button';
import Form from 'blocks/Form';

export default class DeliveryEditor extends Component {
  state = {
    name: this.props.name,
    price: String(this.props.price),
    icon: this.props.icon
  }

  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    icon: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  }

  changeName = e => {
    this.setState({ name: e.target.value });
  }

  changePrice = e => {
    this.setState({ price: e.target.value });
  }

  changeIcon = e => {
    this.setState({ icon: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.price, this.state.icon);
  }

  render() {
    const { name, price, icon } = this.state;

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
            Price
            <Form.Input type="text" placeholder="Price" value={price} onChange={this.changePrice}/>
          </Form.Label>
        </Form.Field>
        <Form.Field>
          <Form.Label>
            Icon
            <Form.Input type="text" placeholder="Icon" value={icon} onChange={this.changeIcon}/>
          </Form.Label>
        </Form.Field>
        <Button type="submit" onClick={this.submit}>Submit</Button>
      </Form>
    )
  }
}