import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signOut } from 'actions/authActions';
import { List, Item, Nav, Signout } from './styles';

export class Navigation extends Component {
  state = {
    links: [
      { path: '/dashboard', text: 'Overview', icon: 'fas fa-home' },
      { path: '/dashboard/products', text: 'Products', icon: 'fas fa-tshirt', badge: 364 },
      { path: '/dashboard/orders', text: 'Orders', icon: 'fas fa-shopping-cart', badge: 71 },
      { path: '/dashboard/categories', text: 'Categories', icon: 'fas fa-object-group', badge: 21 },
      { path: '/dashboard/sizes', text: 'Sizes', icon: 'fas fa-search-plus', badge: 13 },
      { path: '/dashboard/payments', text: 'Payments', icon: 'fas fa-money-check-alt', badge: 4 },
      { path: '/dashboard/deliveries', text: 'Deliveries', icon: 'fas fa-truck', badge: 3 }
    ]
  }

  signout = async () => {
    await this.props.signOut();
    this.props.history.push('/');
  }

  render() {
    const { links } = this.state;
    const { pathname } = this.props.location;

    return (
      <Nav>
        <List>
        { 
          links.map((link, index) => (
            <li key={index}>
              <Item to={link.path} selected={link.path === pathname}>
                <Item.Icon className={link.icon}></Item.Icon>
                <Item.Text>
                  {link.text}
                  { link.badge &&
                    <Item.Badge>{link.badge}</Item.Badge>
                  }
                </Item.Text>
              </Item>
            </li>
          ))
        }
        </List>
        <Signout to="#" onClick={this.signout}>
          <Item.Icon className="fas fa-sign-out-alt"></Item.Icon>
          <Item.Text>Sign out</Item.Text>
        </Signout>
      </Nav>
    )
  }
}

export default withRouter(connect(null, { signOut })(Navigation));