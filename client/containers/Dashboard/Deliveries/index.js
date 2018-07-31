import React, { Component } from 'react';
import axios from 'axios';

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
    this.setState({ deliveries });
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
      deliveries: [ ...this.state.deliveries, delivery ],
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

  render() {
    const { deliveries, deliveryName, deliveryPrice, deliveryIcon } = this.state;

    return (
      <div>
        <h2>Deliveries</h2>
        <ul>
          { deliveries &&
            deliveries.map(delivery => (
              <li key={delivery._id}>
                <div>Name: {delivery.name}, Price: {delivery.price}, Icon: {delivery.icon}</div>
                <button onClick={() => this.deleteDelivery(delivery._id)}>Delete</button>
              </li>
            ))
          }
        </ul>
        <div>
          <h2>Create new delivery</h2>
          <input type="text" placeholder="Delivery name" value={deliveryName} onChange={this.changeDeliveryName}/>
          <input type="text" placeholder="Delivery price" value={deliveryPrice} onChange={this.changeDeliveryPrice}/>
          <input type="text" placeholder="Delivery icon" value={deliveryIcon} onChange={this.changeDeliveryIcon}/>
          <button type="submit" onClick={this.submit}>Submit</button>
        </div>
      </div>
    )
  }
}