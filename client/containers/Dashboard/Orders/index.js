import React, { Component } from 'react';
import axios from 'axios';
import { mapKeys, omit } from 'lodash';

import styled from 'styled-components';
const Table = styled.table`
  border-collapse: collapse;

  td {
    border: 1px solid black;
  }
`

export default class Orders extends Component {
  state = {
    orders: {}
  }
  
  componentDidMount = async () => {
    const response = await axios.get('/api/orders');
    const orders = response.data;
    this.setState({ orders: mapKeys(orders, '_id' )});
  }

  cancelOrder = async (orderId) => {
    const response = await axios.delete(`/api/orders/${orderId}`);
    const deleted = response.data;
    if(deleted.ok === 1 && deleted.n === 1)
      this.setState({ orders: omit(this.state.orders, orderId) });
  }

  changeStatus = async (orderId, status) => {
    const order = this.state.orders[orderId];
    order.status = status;
    const response = await axios.put(`/api/orders/${orderId}`, order);
    const received = response.data;
    this.setState({ orders: { ...this.state.orders, [received._id]: received }});
  }

  render() {
    const { orders } = this.state;

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Order id</th>
              <th>Status</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delivery</th>
              <th></th>
            </tr>
          </thead>
          <tbody> 
          {
            Object.values(orders).map(order => (
              <tr>
                <td>{order._id}</td>
                <td>
                  <select onChange={(e) => this.changeStatus(order._id, e.target.value)} value={order.status}>
                    <option value="Transaction Pending">Transaction Pending</option>
                    <option value="Transaction Completed">Transaction Completed</option>
                    <option value="Sent">Sent</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>{order.price}</td>
                <td>{order.payment.name}</td>
                <td>{order.delivery.name}</td>
                <td><button onClick={() => this.cancelOrder(order._id)}>Cancel</button></td>
              </tr>
            ))
          }
          </tbody>
        </Table>    
      </div>
    )
  }
}