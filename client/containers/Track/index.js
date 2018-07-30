import React, { Component } from 'react';
import axios from 'axios';

import Spacer from 'blocks/Spacer';
import Wrapper from 'blocks/Wrapper';

import { Addresses, List, Section } from './styles';

export default class Track extends Component {
  state = {
    order: null,
    isFetching: false
  }

  componentDidMount() {
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
        <Section>
          <h2>Tracking order: <span>{order._id}</span></h2>
          <h3>Status: <span>{order.status}</span></h3>
        </Section>
        <Section>
          <h3>Products</h3>
        </Section>
        <Section>
          <h3>Payment: <span>{order.payment._id}</span></h3>
          <h3>Delivery: <span>{order.delivery}</span></h3>
        </Section>
        <Addresses>
          <div>
            <Addresses.Heading>Client address</Addresses.Heading>
            <List>
            {
              Object.values(order.client).map((entry, index) => (
                <List.Item key={index}>
                  <span>{entry.label}</span>
                  <span>{entry.value}</span>
                </List.Item>
              ))
            }
            </List>
          </div>
          <div>
            <Addresses.Heading>Delivery address</Addresses.Heading>
            <List>
            {
              Object.values(order.address).map((entry, index) => (
                <List.Item key={index}>
                  <span>{entry.label}</span>
                  <span>{entry.value}</span>
                </List.Item>
              ))
            }
            </List>
          </div>
        </Addresses>
      </Wrapper>
    )
  }
}