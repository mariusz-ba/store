import React, { Component } from 'react';
import axios from 'axios';

export default class Deliveries extends Component {
  state = {
    deliveries: [],
    deliveryName: '',
    deliveryPrice: ''
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

  submit = async e => {
    e.preventDefault();
    const { deliveryName, deliveryPrice } = this.state;
    const response = await axios.post('/api/deliveries', { name: deliveryName, price: deliveryPrice });
    const delivery = response.data;
    this.setState({ deliveries: [ ...this.state.deliveries, delivery ]});
  }

  deleteDelivery = async id => {
    await axios.delete(`/api/deliveries/${id}`);
    const response = await axios.get('/api/deliveries');
    const deliveries = response.data;
    this.setState({ deliveries });
  }

  render() {
    const { deliveries, deliveryName, deliveryPrice } = this.state;

    return (
      <div>
        <h2>Deliveries</h2>
        <ul>
          { deliveries &&
            deliveries.map(delivery => (
              <li key={delivery._id}>Name: {delivery.name}, Price: {delivery.price} <button onClick={() => this.deleteDelivery(delivery._id)}>Delete</button></li>
            ))
          }
        </ul>
        <div>
          <h2>Create new delivery</h2>
          <input type="text" placeholder="Delivery name" value={deliveryName} onChange={this.changeDeliveryName}/>
          <input type="text" placeholder="Delivery price" value={deliveryPrice} onChange={this.changeDeliveryPrice}/>
          <button type="submit" onClick={this.submit}>Submit</button>
        </div>
      </div>
    )
  }
}