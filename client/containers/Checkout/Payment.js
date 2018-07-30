import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class Payment extends Component {
  state = {
    order: null
  }

  componentDidMount() {
    this.fetchOrder();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.location.pathname !== this.props.location.pathname)
      this.fetchOrder();
  }

  fetchOrder = async () => {
    const response = await axios.get(`/api/orders/${this.props.match.params.id}`);
    const order = response.data;
    this.setState({ order });
  }

  render() {
    const { order } = this.state;

    return (
      <div>
        { order &&
          <React.Fragment>
            <h1>Thank you for your purchase</h1>
            <h3>Use link bellow to track your order status</h3>
            <Link to={`/track/${order._id}`}>Tracker</Link>
            <h3>Use this button to pay your order</h3>
            <a href={order.payment.url}>PAY</a>
          </React.Fragment>
        }
      </div>
    )
  }
}

export default withRouter(Payment);