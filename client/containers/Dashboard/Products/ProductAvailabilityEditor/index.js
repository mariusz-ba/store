import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';

import Button from 'blocks/Button';
import Form from 'blocks/Form';

export default class AvailabilityEditor extends Component {
  state = {
    _id: this.props._id,
    product: this.props.product,
    size: this.props.size,
    amount: this.props.amount
  }

  static propTypes = {
    _id: PropTypes.string.isRequired,
    product: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    sizes: PropTypes.array.isRequired,
    amount: PropTypes.string.isRequired
  }

  static defaultProps = {
    _id: null,
    product: '',
    size: '',
    sizes: [],
    amount: ''
  }

  changeAmount = e => {
    this.setState({ amount: e.target.value });
  }

  changeSize = e => {
    this.setState({ size: e.target.value });
  }

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(
      pick(this.state, ['_id', 'product', 'size', 'amount'])
    )
  }

  render() {
    const { amount } = this.state;
    const { sizes } = this.props;

    return (
      <div>
        <Form>
          <Form.Field inline>
            <Form.Select onChange={this.changeSize}>
              <option value="null">Select size</option>
              {
                sizes.map((size, index) => {
                  if(size._id === this.state.size)
                    return <option key={index} value={size._id} selected>{size.name}({size.short})</option>
                  return <option key={index} value={size._id}>{size.name}({size.short})</option>
                })
              }
            </Form.Select>
            <Form.Input type="text" placeholder="Amount" value={amount} onChange={this.changeAmount}/>
            <Button mode="primary" onClick={this.submit}>Submit</Button>
          </Form.Field>
        </Form>
      </div>
    )
  }
}