import React, { Component } from 'react';
import axios from 'axios';
import { mapKeys } from 'lodash';

import Expander from 'components/Expander';

import Button from 'blocks/Button';
import Form from 'blocks/Form';
import { Title, Description } from 'blocks/Dashboard';

import { Cards } from '../styles';

import DeliveryEditor from './DeliveryEditor';

import styled from 'styled-components';

const NewDelivery = Form.extend`
  max-width: 400px;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background: #1086ed;
  color: #fff;
  & div,
  & button {
    margin: 0 1rem;
  }
`
NewDelivery.Heading = styled.h3`
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: center;
  color: #fff;
  background: rgb(0, 126, 218);
`

export default class Deliveries extends Component {
  state = {
    deliveries: [],
    deliveryName: '',
    deliveryPrice: '',
    deliveryIcon: ''
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/deliveries');
    const deliveries = response.data;
    this.setState({ deliveries: mapKeys(deliveries, '_id') });
  }

  changeDeliveryName = e => {
    this.setState({ deliveryName: e.target.value });
  }

  changeDeliveryPrice = e => {
    this.setState({ deliveryPrice: e.target.value });
  }

  changeDeliveryIcon = e => {
    this.setState({ deliveryIcon: e.target.value });
  }

  submit = async e => {
    e.preventDefault();
    const { deliveryName, deliveryPrice, deliveryIcon } = this.state;
    const response = await axios.post('/api/deliveries', { name: deliveryName, price: Number(deliveryPrice), icon: deliveryIcon });
    const delivery = response.data;
    this.setState({ 
      deliveries: { ...this.state.deliveries, [delivery._id]: delivery },
      deliveryName: '',
      deliveryPrice: '',
      deliveryIcon: ''
    });
  }

  deleteDelivery = async id => {
    await axios.delete(`/api/deliveries/${id}`);
    const response = await axios.get('/api/deliveries');
    const deliveries = response.data;
    this.setState({ deliveries });
  }

  changeDelivery = async (deliveryId, name, price, icon) => {
    const response = await axios.put(`/api/deliveries/${deliveryId}`, { name, price, icon });
    const delivery = response.data;
    this.setState({
      deliveries: { ...this.state.deliveries, [delivery._id]: delivery }
    })
  }

  render() {
    const { deliveries, deliveryName, deliveryPrice, deliveryIcon } = this.state;

    return (
      <div>
        <Title>Deliveries</Title>
        <Description>Create new delivery option and manage existing ones.</Description>
        <NewDelivery>
          <NewDelivery.Heading>Create new delivery</NewDelivery.Heading>
          <Form.Field>
            <Form.Label>
              Name
              <Form.Input type="text" placeholder="Delivery name" value={deliveryName} onChange={this.changeDeliveryName}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Price
              <Form.Input type="text" placeholder="Delivery price" value={deliveryPrice} onChange={this.changeDeliveryPrice}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Icon
              <Form.Input type="text" placeholder="Delivery icon" value={deliveryIcon} onChange={this.changeDeliveryIcon}/>
            </Form.Label>
          </Form.Field>
          <Button mode="primary" onClick={this.submit}>Submit</Button>
        </NewDelivery>
        <Cards>
          { deliveries &&
            Object.values(deliveries).map(delivery => (
              <Cards.Item key={delivery._id}>
                <Expander
                  head={(
                    <React.Fragment>
                      <h3>{delivery.name}</h3>
                      <small>{delivery._id}</small>
                    </React.Fragment>
                  )}
                  body={(
                    <div>
                      <DeliveryEditor 
                        name={delivery.name} 
                        price={delivery.price} 
                        icon={delivery.icon}
                        onSubmit={(name, price, icon) => this.changeDelivery(delivery._id, name, price, icon)}/>
                      <Button mode="danger" onClick={() => this.deleteDelivery(delivery._id)}>Delete</Button>
                    </div>
                  )}
                />
              </Cards.Item>
            ))
          }
        </Cards>
      </div>
    )
  }
}