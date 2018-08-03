import React, { Component } from 'react';
import { Title, Description } from 'blocks/Dashboard';

export default class Overview extends Component {
  render() {
    return (
      <div>
        <Title>Overview</Title>
        <Description>Welcome on stores dashboard. On your left You can find menu that is used to navigate through the dashboard pages.</Description>
      </div>
    )
  }
}