import React, { Component } from 'react';
import Grid from 'blocks/Grid';

export default class Overview extends Component {
  render() {
    return (
      <Grid columns={3} columnGap="10px">
        <div>Total views: 0</div>
        <div>Total orders: 0</div>
        <div>New orders: 10</div>
      </Grid>
    )
  }
}