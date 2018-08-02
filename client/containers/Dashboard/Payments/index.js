import React, { Component } from 'react';
import axios from 'axios';
import { mapKeys } from 'lodash';

import Expander from 'components/Expander';
import Button from 'blocks/Button';
import Form from 'blocks/Form';
import { Title, Description } from 'blocks/Dashboard';
import { Cards } from '../styles';
import PaymentEditor from './PaymentEditor';

import styled from 'styled-components';

const NewPayment = Form.extend`
  max-width: 400px;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background: #1086ed;
  color: #fff;
  & div,
  & Button {
    margin: 0 1rem;
  }
`
NewPayment.Heading = styled.h3`
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: center;
  color: #fff;
  background: rgb(0, 126, 218);
`

export default class Payments extends Component {
  state = {
    payments: {},
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
      payments: { ...this.state.payments, [payment._id]: payment }, 
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

  changePayment = async (paymentId, name, url, price, icon) => {
    const response = await axios.put(`/api/payments/${paymentId}`, { name, price, icon, url });
    const payment = response.data;
    this.setState({
      payments: { ...this.state.payments, [payment._id]: payment }
    })
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
        <Title>Payment methods</Title>
        <Description>Create new payment methods and edit existing ones.</Description>
        <NewPayment>
          <NewPayment.Heading>Create new payment</NewPayment.Heading>
          <Form.Field>
            <Form.Label>
              Name
              <Form.Input type="text" placeholder="Payment name" value={paymentName} onChange={this.changePaymentName}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Url
              <Form.Input type="text" placeholder="Payment url" value={paymentUrl} onChange={this.changePaymentUrl}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Price
              <Form.Input type="text" placeholder="Payment price" value={paymentPrice} onChange={this.changePaymentPrice}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Icon
              <Form.Input type="text" placeholder="Payment icon" value={paymentIcon} onChange={this.changePaymentIcon}/>
            </Form.Label>
          </Form.Field>
          <Button onClick={this.submit}>Submit</Button>
        </NewPayment>
        <Cards>
          { payments &&
            Object.values(payments).map(payment => (
              <Cards.Item key={payment._id}>
                <Expander
                  head={(
                    <React.Fragment>
                      <h3>{payment.name}</h3>
                      <small>{payment.url}</small>
                    </React.Fragment>
                  )}
                  body={(
                    <div>
                      <Button mode="danger" onClick={() => this.deletePayment(payment._id)}>Delete</Button>
                      <PaymentEditor
                        name={payment.name}
                        url={payment.url}
                        price={payment.price}
                        icon={payment.icon}
                        onSubmit={(name, url, price, icon) => this.changePayment(payment._id, name, url, price, icon)}
                      />
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