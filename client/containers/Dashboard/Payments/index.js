import React, { Component } from 'react';
import axios from 'axios';

export default class Payments extends Component {
  state = {
    payments: [],
    paymentName: '',
    paymentPrice: '',
    paymentUrl: '',
    paymentIcon: ''
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

  changePaymentIcon = e => {
    this.setState({ paymentIcon: e.target.value });
  }

  submit = async e => {
    e.preventDefault();
    const { 
      paymentName, 
      paymentUrl, 
      paymentPrice, 
      paymentIcon 
    } = this.state;

    const response = await axios.post(
      '/api/payments', 
      { 
        name: paymentName, 
        url: paymentUrl, 
        price: Number(paymentPrice), 
        icon: paymentIcon 
      }
    );

    const payment = response.data;

    this.setState({ 
      payments: [ ...this.state.payments, payment ], 
      paymentName: '', 
      paymentUrl: '', 
      paymentPrice: '', 
      paymentIcon: '' 
    });
  }

  deletePayment = async id => {
    await axios.delete(`/api/payments/${id}`);
    const response = await axios.get('/api/payments');
    const payments = response.data;
    this.setState({ payments });
  }

  render() {
    const { 
      payments, 
      paymentName, 
      paymentUrl, 
      paymentPrice,
      paymentIcon
    } = this.state;

    return (
      <div>
        <h2>Payments</h2>
        <ul>
          { payments &&
            payments.map(payment => (
              <li key={payment._id}>
                <div>Name: {payment.name}, Url: {payment.url}, Price: {payment.price}, Icon: {payment.icon}</div>
                <button onClick={() => this.deletePayment(payment._id)}>Delete</button>
              </li>
            ))
          }
        </ul>
        <div>
          <h2>Create new payment</h2>
          <input type="text" placeholder="Payment name" value={paymentName} onChange={this.changePaymentName}/>
          <input type="text" placeholder="Payment url" value={paymentUrl} onChange={this.changePaymentUrl}/>
          <input type="text" placeholder="Payment price" value={paymentPrice} onChange={this.changePaymentPrice}/>
          <input type="text" placeholder="Payment icon" value={paymentIcon} onChange={this.changePaymentIcon}/>
          <button type="submit" onClick={this.submit}>Submit</button>
        </div>
      </div>
    )
  }
}