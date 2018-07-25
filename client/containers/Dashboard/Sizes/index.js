import React, { Component } from 'react';
import axios from 'axios';
import { mapKeys } from 'lodash';

import SizeEditor from './SizeEditor';
import Expander from 'components/Expander';


export default class Sizes extends Component {
  state = {
    name: '',
    short: '',
    sizes: {}
  }

  componentDidMount = async () => {
    const res = await axios.get('/api/sizes');
    const sizes = res.data;
    this.setState({ sizes: mapKeys(sizes, '_id') });
  }

  changeName = e => {
    this.setState({ name: e.target.value })
  }

  changeShort = e => {
    this.setState({ short: e.target.value });
  }

  submitSize = async (e) => {
    const { name, short } = this.state;
    e.preventDefault();
    const res = await axios.post('/api/sizes', { name, short });
    const size = res.data;

    this.setState({ sizes: { ...this.state.sizes, [size._id]: size }});
  }

  changeSize = async (id, name, short) => {
    const res = await axios.put(`/api/sizes/${id}`, { name, short });
    const size = res.data;

    this.setState({ sizes: { ...this.state.sizes, [size._id]: size }});
  }

  render() {
    const { name, short, sizes } = this.state;

    return (
      <div>
        <form>
          <input type="text" placeholder="Name" value={name} onChange={this.changeName}/>
          <input type="text" placeholder="Short" value={short} onChange={this.changeShort}/>
          <button type="submit" onClick={this.submitSize}>Submit</button>
        </form>
        <ul>
          {
            Object.values(sizes).map(size => (
              <li key={size._id}>
                <Expander
                  head={(<h1>Name: {size.name}, Short: {size.short}</h1>)}
                  body={(
                    <SizeEditor name={size.name} short={size.short} onSubmit={(name, short) => this.changeSize(size._id, name, short)}/>
                  )}
                />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}