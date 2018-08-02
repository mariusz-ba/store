import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';

export default class ProductEditor extends Component {
  state = {
    _id: this.props._id,
    name: this.props.name,
    description: this.props.description,
    price: this.props.price,
    category: this.props.category,
    pictures: this.props.pictures,
    features: this.props.features,
    newPicture: '',
    newFeature: ''
  }

  static propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    category: PropTypes.string,
    pictures: PropTypes.array,
    features: PropTypes.array,
    categories: PropTypes.array.isRequired,
  }

  static defaultProps = {
    _id: null,
    name: '',
    description: '',
    price: '',
    category: '',
    pictures: [],
    features: []
  }

  setProperty = (property, value) => {
    this.setState({ [property]: value });
  }

  appendArray = (property, value, e) => {
    if(e)
      e.preventDefault();

    const clear = {
      'pictures': () => { this.setState({ newPicture: '' })},
      'features': () => { this.setState({ newFeature: '' })}
    }

    clear[property]();

    this.setState({ [property]: [ ...this.state[property], value]});
  }

  updateArray = (property, index, value) => {
    this.setState({
      [property]: [ ...this.state[property].slice(0, index), value, ...this.state[property].slice(index + 1)]
    })
  }

  removeFromArray = (property, index, e = null) => {
    if(e)
      e.preventDefault();
    this.setState({
      [property]: [ ...this.state[property].slice(0, index), ...this.state[property].slice(index + 1)]
    })
  }

  submit = e => {
    e.preventDefault();
    this.props.onSubmit(
      pick(this.state, ['_id', 'name', 'description', 'price', 'category', 'pictures', 'features'])
    );
  }

  render() {
    const { name, description, price, pictures, features } = this.state;
    const { newPicture, newFeature } = this.state;
    const { categories } = this.props;

    return (
      <div>
        <form>
          <input type="text" placeholder="Name" value={name} onChange={(e) => this.setProperty('name', e.target.value)}/>
          <input type="text" placeholder="Description" value={description} onChange={(e) => this.setProperty('description', e.target.value)}/>
          <input type="text" placeholder="Price" value={price} onChange={(e) => this.setProperty('price', e.target.value)}/>
          <select onChange={(e) => this.setProperty('category', e.target.value)}>
            <option value="null">Choose category</option>
            { categories &&
              categories.map(category => {
                if(category._id === this.state.category)
                  return <option value={category._id} selected>{category.name}</option>
                return <option value={category._id}>{category.name}</option>
              })
            }
          </select>
          <div>
            <h4>Pictures</h4>
            { 
              pictures.map((picture, index) => (
                <div key={index}>
                  <input type="text" placeholder="Picture" value={picture} onChange={(e) => this.updateArray('pictures', index, e.target.value)}/>
                  <button onClick={(e) => this.removeFromArray('pictures', index, e)}>Delete</button>
                </div>
              ))
            }
            <input type="text" placeholder="New picture" value={newPicture} onChange={(e) => this.setProperty('newPicture', e.target.value)}/>
            <button onClick={(e) => this.appendArray('pictures', this.state.newPicture, e)}>Add picture</button>
          </div>
          <div>
            <h4>Features</h4>
            { 
              features.map((feature, index) => (
                <div key={index}>
                  <input type="text" placeholder="Feature" value={feature} onChange={(e) => this.updateArray('features', index, e.target.value)}/>
                  <button onClick={(e) => this.removeFromArray('features', index, e)}>Delete</button>
                </div>
              ))
            }
            <input type="text" placeholder="New feature" value={newFeature} onChange={(e) => this.setProperty('newFeature', e.target.value)}/>
            <button onClick={(e) => this.appendArray('features', this.state.newFeature, e)}>Add feature</button>
          </div>
          <button type="submit" onClick={this.submit}>Submit</button>
        </form>
      </div>
    )
  }
}