import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Spacer from 'blocks/Spacer';
import Wrapper from 'blocks/Wrapper';

import { clearBasket } from 'actions/basketActions';

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`

const Subheading = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Tracker = styled(Link)`
  display: block;
  padding: 2rem;
  text-decoration: none;
  text-align: center;
  background: #325ac8;
  color: #fff;
  margin-right: 1rem;
  transition: background linear .2s;
  border-radius: 3px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    background: #3250c8;
  }
`

const Pay = Tracker.withComponent('a').extend`
  background: #8b00b2;
  margin-right: 0;
  &:hover {
    background: #a700d6;
  }
`

class Payment extends Component {
  state = {
    order: null,
    isFetching: false
  }

  componentDidMount() {
    // Clear basket first
    this.props.clearBasket();
    this.fetchOrder();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname)
      this.fetchOrder();
  }

  fetchOrder = async () => {
    this.setState({ isFetching: true });
    const response = await axios.get(`/api/orders/${this.props.match.params.id}${this.props.location.search}`);
    const order = response.data;
    this.setState({ isFetching: false, order });
  }

  render() {
    const { order, isFetching } = this.state;

    if(isFetching)
      return <Wrapper><h1>Loading...</h1></Wrapper>

    if(!order)
      return <Wrapper><h1>Not found.</h1></Wrapper>

    return (
      <Wrapper>
        <Spacer>&#10699;</Spacer>
        <Heading>Thank you for your purchase</Heading>
        <Subheading>Use links bellow to track your order status or pay for your order.</Subheading>
        <Links>
          <Tracker to={`/track/${order._id}${this.props.location.search}`}>Tracker</Tracker>
          <Pay href={order.payment.url}>PAY</Pay>
        </Links>
      </Wrapper>
    )
  }
}

export default withRouter(connect(null, { clearBasket })(Payment));