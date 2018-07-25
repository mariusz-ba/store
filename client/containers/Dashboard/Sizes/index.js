import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  fetchSizes,
  createSize,
  updateSize,
  deleteSize
} from 'actions/sizesActions';

import SizeEditor from './SizeEditor';
import Expander from 'components/Expander';


class Sizes extends Component {
  state = {
    name: '',
    short: '',
  }

  componentDidMount = async () => {
    this.props.fetchSizes();
  }

  changeName = e => {
    this.setState({ name: e.target.value })
  }

  changeShort = e => {
    this.setState({ short: e.target.value });
  }

  submitSize = e => {
    e.preventDefault();
    const { name, short } = this.state;
    this.props.createSize({ name, short });
  }

  changeSize = async (id, name, short) => {
    this.props.updateSize(id, { name, short });
  }

  render() {
    const { name, short } = this.state;
    const { sizes } = this.props.sizes;

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
                    <div>
                      <SizeEditor name={size.name} short={size.short} onSubmit={(name, short) => this.changeSize(size._id, name, short)}/>
                      <button onClick={() => this.props.deleteSize(size._id)}>Delete size</button>
                    </div>
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

const mapStateToProps = ({ sizes }) => ({ sizes });

export default connect(mapStateToProps, {
  fetchSizes, createSize, updateSize, deleteSize
})(Sizes);