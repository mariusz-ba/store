import React, { Component } from 'react';
import axios from 'axios';
import { mapKeys, omit } from 'lodash';

import { Table, Button } from './styles';
import { Title, Description } from 'blocks/Dashboard';

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
        <Title>Orders</Title>
        <Description>Manage your orders</Description>
        <Table>
          <Table.Head>
            <tr>
              <th>Order id</th>
              <th>Status</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delivery</th>
              <th></th>
            </tr>
          </Table.Head>
          <Table.Body> 
          {
            Object.values(orders).map(order => (
              <tr key={order._id}>
                <td><span>{order._id}</span></td>
                <td>
                  <select onChange={(e) => this.changeStatus(order._id, e.target.value)} value={order.status}>
                    <option value="Transaction Pending">Transaction Pending</option>
                    <option value="Transaction Completed">Transaction Completed</option>
                    <option value="Sent">Sent</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td>&euro; {order.price}</td>
                <td>{order.payment && order.payment.name}</td>
                <td>{order.delivery && order.delivery.name}</td>
                <td><Button onClick={() => this.cancelOrder(order._id)}><i className="fas fa-trash-alt"></i></Button></td>
              </tr>
            ))
          }
          </Table.Body>
        </Table>    
      </div>
    )
  }
}