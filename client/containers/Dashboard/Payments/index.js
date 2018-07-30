import React, { Component } from 'react';
import axios from 'axios';

export default class Payments extends Component {
  state = {
    payments: [],
    paymentName: '',
    paymentPrice: '',
    paymentUrl: ''
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/payments');
    const payments = response.data;
    this.setState({ payments });
  }

  changePaymentName = e => {
    this.setState({ paymentName: e.target.value });
  }

  changePaymentPrice = e => {
    this.setState({ paymentPrice: e.target.value });
  }

  changePaymentUrl = e => {
    this.setState({ paymentUrl: e.target.value });
  }

  submit = async e => {
    e.preventDefault();
    const { paymentName, paymentUrl, paymentPrice } = this.state;
    const response = await axios.post('/api/payments', { name: paymentName, url: paymentUrl, price: Number(paymentPrice) });
    const payment = response.data;
    this.setState({ payments: [ ...this.state.payments, payment ], paymentName: '', paymentUrl: '', paymentPrice: '' });
  }

  deletePayment = async id => {
    await axios.delete(`/api/payments/${id}`);
    const response = await axios.get('/api/payments');
    const payments = response.data;
    this.setState({ payments });
  }

  render() {
    const { payments, paymentName, paymentUrl, paymentPrice } = this.state;

    return (
      <div>
        <h2>Payments</h2>
        <ul>
          { payments &&
            payments.map(payment => (
              <li key={payment._id}>Name: {payment.name}, Url: {payment.url}, Price: {payment.price} <button onClick={() => this.deletePayment(payment._id)}>Delete</button></li>
            ))
          }
        </ul>
        <div>
          <h2>Create new payment</h2>
          <input type="text" placeholder="Payment name" value={paymentName} onChange={this.changePaymentName}/>
          <input type="text" placeholder="Payment url" value={paymentUrl} onChange={this.changePaymentUrl}/>
          <input type="text" placeholder="Payment price" value={paymentPrice} onChange={this.changePaymentPrice}/>
          <button type="submit" onClick={this.submit}>Submit</button>
        </div>
      </div>
    )
  }
}