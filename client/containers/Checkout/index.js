import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

import Spacer from 'blocks/Spacer';

import { Products, Product } from 'components/basket/styles.js';
import NumericInput from 'components/NumericInput';
import { removeProduct, changeProductAmount } from 'actions/basketActions';

import Wrapper from 'blocks/Wrapper';
import axios from 'axios';

const Delivery = styled.ul`
  list-style-type: none;
`
Delivery.Item = styled.li`

`

const Addresses = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
`

const Payment = styled.ul`
`
Payment.Item = styled.li`
`

class Checkout extends Component {
  state = {
    payment: {
      selected: undefined,
      options: {}
    },
    delivery: {
      selected: undefined,
      options: {} 
    },
    address: {
      firstname: { key: 'firstname', label: 'First Name', value: '' },
      lastname: { key: 'lastname', label: 'Last Name', value: '' },
      country: { key: 'country', label: 'Country', value: '' },
      city: { key: 'city', label: 'City', value: '' },
      zipCode: { key: 'zipCode', label: 'Zip Code', value: '' },
      road: { key: 'road', label: 'Road and number', value: '' },
      email: { key: 'email', label: 'E-Mail', value: '' },
      phone: { key: 'phone', label: 'Phone', value: '' },
    },
    daddress: {
      firstname: { key: 'firstname', label: 'First Name', value: '' },
      lastname: { key: 'lastname', label: 'Last Name', value: '' },
      country: { key: 'country', label: 'Country', value: '' },
      city: { key: 'city', label: 'City', value: '' },
      zipCode: { key: 'zipCode', label: 'Zip Code', value: '' },
      road: { key: 'road', label: 'Road and number', value: '' },
      email: { key: 'email', label: 'E-Mail', value: '' },
      phone: { key: 'phone', label: 'Phone', value: '' },
    },
    useAddressAsDeliveryAddress: true,
    canProceedToCheckout: false,
    isFetching: false,
    errors: []
  }

  componentDidMount = async () => {
    // Fetch available payment methods
    const payments_data = await axios.get('/api/payments')
    const payments = payments_data.data;
    // Fetch available delivery options
    const deliveries_data = await axios.get('/api/deliveries');
    const deliveries = deliveries_data.data;

    this.setState({
      payment: { ...this.state.payment, options: _.mapKeys(payments, '_id') },
      delivery: { ...this.state.delivery, options: _.mapKeys(deliveries, '_id') }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const validation = this.validate();
    if(validation !== this.state.canProceedToCheckout)
      this.setState({ canProceedToCheckout: validation })
  }

  changePayment = paymentId => {
    this.setState({ payment: { ...this.state.payment, selected: paymentId }} );
  }

  changeDelivery = deliveryId => {
    this.setState({ delivery: { ...this.state.delivery, selected: deliveryId }} );
  }

  onChangeAddress = (field, value) => {
    this.setState({ address: { ...this.state.address, [field]: { ...this.state.address[field], value} }} );
  }

  onChangeDeliveryAddress = (field, value) => {
    this.setState({ daddress: { ...this.state.daddress, [field]: { ...this.state.daddress[field], value} }} );
  }

  toggleDeliveryAddress = e => {
    this.setState({ useAddressAsDeliveryAddress: !this.state.useAddressAsDeliveryAddress });
  }

  validate = () => {
    const { state } = this;
    if(Object.values(this.props.basket.products).length === 0) return false; // No products
    if(state.payment.selected === undefined) return false; // No payment method
    if(state.delivery.selected === undefined) return false; // No delivery
    if(!this.checkAddress(state.address)) return false; // Bad address
    if(!state.useAddressAsDeliveryAddress &&
       !this.checkAddress(state.daddress)) return false;  // Bad delivery address
    return true;
  }

  checkAddress = address => {
    return !Object.values(address).some(field => field.value === ''); // Returns true if any field is empty
  }

  proceedToCheckout = async e => {
    const products = Object.values(this.props.basket.products).map(product => ({
      product: product._id,
      size: product.size._id,
      amount: product.amount
    }))

    try {
      this.setState({ isFetching: true })
      const response = await axios.post('/api/orders', { 
        products,
        delivery: this.state.delivery.selected,
        payment: this.state.payment.selected,
        client: this.state.address,
        address: this.state.useAddressAsDeliveryAddress ? this.state.address : this.state.daddress
      });
      const data = response.data;
      console.log(data);
      this.setState({ isFetching: false })
      // Redirect to /checkout/payment/:id
      this.props.history.push(`/checkout/payment/${data._id}?hash=${data.hash}`);
    } catch (e) {
      this.setState({ errors: e.response.data, isFetching: false })
    }


    // Send data to the server
    // If server responds with the error (products no longer available) set errors and notify user
    // If no error, create new order document on server side
    //  send email to the user with tracking url
    //  Navigate to /checkout/payment page, show tracking link there and [pay] button
    //  [pay] button link is [order.payment.url][ additional params ? ] -> redirect user to this page
  }

  render() {
    const { 
      payment, 
      delivery, 
      address, 
      daddress,
      useAddressAsDeliveryAddress,
      canProceedToCheckout
    } = this.state;

    const price = {
      products: Object.values(this.props.basket.products).reduce((a, item) => a + (item.price * item.amount), 0),
      payment: payment.selected !== undefined ? payment.options[payment.selected].price : 0,
      delivery: delivery.selected !== undefined ? delivery.options[delivery.selected].price : 0
    }

    const errs = this.state.errors.map(error => ({ ...error, notavailable: error.amount > error.available }));
    const errors = _.mapKeys(errs, 'product');

    return (
      <Wrapper>
        <code><pre>{JSON.stringify(this.state, null, 2)}</pre></code>
        <Spacer>&#10699;</Spacer>
        <Products>
          <thead>
            <tr>
              <th>Remove</th>
              <th colSpan="2">Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          { 
            Object.values(this.props.basket.products).map(product => (
              <Product key={product._id}>
                <td>
                  <button 
                    onClick={() => this.props.removeProduct(product._id)}>
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
                <td><img src={product.pictures[0]} alt={product.name}/></td>
                <td>
                  { errors &&
                    errors[product._id] &&
                    errors[product._id].notavailable === true &&
                    <i>Specified amount of this product is currently not available</i>
                  }
                  <span>{product.name} (Size: {product.size.short})</span>
                  <span>{product.description}</span>
                </td>
                <td>
                  <NumericInput value={product.amount} onChange={(value) => this.props.changeProductAmount(product._id, value)}/>
                </td>
                <td>&euro; {product.price}</td>
              </Product>
            ))
          }
          </tbody>
        </Products>
        <Payment>
        { _.get(payment, 'options', undefined) &&
          Object.values(payment.options).map(option => (
            <Payment.Item key={option._id}>
              <input 
                id={option._id} 
                type="radio" 
                radioGroup="payment"
                checked={payment.selected === option._id}
                onChange={() => this.changePayment(option._id)}/>
              <label htmlFor={option._id}>{option.name}</label>
            </Payment.Item>
          ))
        }
        </Payment>
        { _.get(delivery, 'options', undefined) &&
          _.get(payment, 'selected', undefined) !== undefined &&
          <Delivery>
          {
            Object.values(delivery.options).map(option => (
              <Delivery.Item key={option._id}> 
                <input 
                  id={option._id} 
                  type="radio" 
                  radioGroup="delivery"
                  checked={delivery.selected === option._id}
                  onChange={() => this.changeDelivery(option._id)}/>
                <label htmlFor={option._id}>{option.name}</label>
              </Delivery.Item>
            )) 
          }
          </Delivery>
        }
        { _.get(delivery, 'selected', undefined) !== undefined &&
          <Addresses>
            <div>
              Client address
              { address &&
                Object.values(address).map((field, index) => (
                  <div key={index}>
                    <input 
                      type="text" 
                      placeholder={field.label} 
                      value={field.value}
                      onChange={(e) => this.onChangeAddress(field.key, e.target.value)}/>
                  </div>
                ))
              }
            </div>
            <div>
              <h3>Delivery address</h3>
              <div>
                <input 
                  id="useAddressAsDeliveryAddress" 
                  type="checkbox" 
                  checked={useAddressAsDeliveryAddress} 
                  onChange={this.toggleDeliveryAddress}/>
                <label htmlFor="useAddressAsDeliveryAddress">Use client address</label>
              </div>
              { daddress &&
                Object.values(daddress).map((field, index) => (
                  <div key={index}>
                    <input 
                      type="text" 
                      placeholder={field.label} 
                      value={field.value}
                      onChange={(e) => this.onChangeDeliveryAddress(field.key, e.target.value)}
                      disabled={useAddressAsDeliveryAddress}/>
                  </div>
                ))
              }
            </div>
          </Addresses>
        }
        <div>
          <ul>
            <li>Products price: { price.products }</li>
            <li>Payment price: { price.payment }</li>
            <li>Delivery price: { price.delivery }</li>
          </ul>
          <div>
            Total price: { price.products + price.payment + price.delivery }
          </div>
        </div>
        <button onClick={this.proceedToCheckout} disabled={!canProceedToCheckout}>
          { this.state.isFetching === true ? 'Loading...' : 'Proceed to checkout'}
        </button>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ basket }) => ({ basket });

export default connect(mapStateToProps, { removeProduct, changeProductAmount })(Checkout);

/**
 * How does it work.
 * 1. User has to specify delivery option
 * 2. Then addresses options shows up
 * 2.1. User has to fill up client address form
 * 2.2. Delivery address is the same as client address
 *      but it can be changed to other
 * 3. When delivery address is specified payment methods shows up
 * 3.1. User has to specify payment method
 * 4. Total price is shown (products + delivery + payment(optional))
 * 5. When all conditions are fulfilled [proceed to checkout] button is enabled
 * 5.1. Server marks order as [Payment pending]
 * 6. User is redirected to payment process [credit card, paypal, dotpay, etc...]
 * 6.1. User is given trancking page such as /track/order_id/password_hash_code
 * 6.2. Server is waiting to be notified that transaction has been completed successfully
 * 6.3. Server marks order as [Payment success] or [Payment failure]
 */