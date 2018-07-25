import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ol`
  list-style-type: none;
`

List.Item = styled.li`
  background: #fff;

  a {
    display: block;
    padding: .5rem 1rem;
    color: #1a1a1a;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      background: rgba(0, 0, 0, .02);
    }
  }
`

const Toolbar = styled.nav`
  border-right: 1px solid rgba(0, 0, 0, .125);
`

export default class Navigation extends Component {
  render() {
    return (
      <Toolbar>
        <List>
          <List.Item><Link to="/dashboard">Overview</Link></List.Item>
          <List.Item><Link to="/dashboard/products">Products</Link></List.Item>
          <List.Item><Link to="/dashboard/orders">Orders</Link></List.Item>
          <List.Item><Link to="/dashboard/categories">Categories</Link></List.Item>
          <List.Item><Link to="/dashboard/sizes">Sizes</Link></List.Item>
        </List>
      </Toolbar>
    )
  }
}