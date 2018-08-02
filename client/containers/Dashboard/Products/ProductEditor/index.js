import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pick } from 'lodash';

import Button from 'blocks/Button';
import Form from 'blocks/Form';

import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 1rem;
`

const Group = Form.extend`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, .125);

  input,
  select { border: 1px solid rgba(0, 0, 0, .125); }

  & > div { padding: 0 1rem; }

  h4 {
    text-align: center;
    padding: 1rem 0;
  }
`

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
    price: PropTypes.number,
    category: PropTypes.string,
    pictures: PropTypes.array,
    features: PropTypes.array,
    categories: PropTypes.array.isRequired,
  }

  static defaultProps = {
    _id: "null",
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
      <Layout>
        <Group>
          <h4>Basic</h4>
          <Form.Field>
            <Form.Label>
              Name
              <Form.Input type="text" placeholder="Name" value={name} onChange={(e) => this.setProperty('name', e.target.value)}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Description
              <Form.Input type="text" placeholder="Description" value={description} onChange={(e) => this.setProperty('description', e.target.value)}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Price
              <Form.Input type="text" placeholder="Price" value={price} onChange={(e) => this.setProperty('price', e.target.value)}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Category
              <Form.Select onChange={(e) => this.setProperty('category', e.target.value)}>
                <option value="null">Choose category</option>
                { categories &&
                  categories.map(category => {
                    if(category._id === this.state.category)
                      return <option key={category._id} value={category._id} selected>{category.name}</option>
                    return <option key={category._id} value={category._id}>{category.name}</option>
                  })
                }
              </Form.Select>
            </Form.Label>
          </Form.Field>
        </Group>
        <Group>
          <h4>Pictures</h4>
          { 
            pictures.map((picture, index) => (
              <Form.Field inline key={index}>
                <Form.Input type="text" placeholder="Picture" value={picture} onChange={(e) => this.updateArray('pictures', index, e.target.value)}/>
                <Button mode="danger" onClick={(e) => this.removeFromArray('pictures', index, e)}>Delete</Button>
              </Form.Field>
            ))
          }
          <Form.Field inline>
            <Form.Input type="text" placeholder="New picture" value={newPicture} onChange={(e) => this.setProperty('newPicture', e.target.value)}/>
            <Button onClick={(e) => this.appendArray('pictures', this.state.newPicture, e)}>Add</Button>
          </Form.Field>
        </Group>
        <Group>
          <h4>Features</h4>
          { 
            features.map((feature, index) => (
              <Form.Field inline key={index}>
                <Form.Input type="text" placeholder="Feature" value={feature} onChange={(e) => this.updateArray('features', index, e.target.value)}/>
                <Button mode="danger" onClick={(e) => this.removeFromArray('features', index, e)}>Delete</Button>
              </Form.Field>
            ))
          }
          <Form.Field inline>
            <Form.Input type="text" placeholder="New feature" value={newFeature} onChange={(e) => this.setProperty('newFeature', e.target.value)}/>
            <Button onClick={(e) => this.appendArray('features', this.state.newFeature, e)}>Add </Button>
          </Form.Field>
        </Group>
      </Layout>
        <Button mode="primary" onClick={this.submit}>Submit</Button>
      </div>
    )
  }
}