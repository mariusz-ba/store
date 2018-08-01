import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory
} from 'actions/categoriesActions';

import CategoryEditor from './CategoryEditor';
import Expander from 'components/Expander';

import Button from 'blocks/Button';
import Form from 'blocks/Form';
import { Cards } from './styles';
import { Section } from '../styles';

import styled from 'styled-components';

const NewCategory = Form.extend`
  max-width: 400px;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background: #1086ed;
  color: #fff;
  & div,
  & button {
    margin: 0 1rem;
  }
`
NewCategory.Heading = styled.h3`
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: center;
  color: #fff;
  background: rgb(0, 126, 218);
`

class Categories extends Component {
  state = {
    name: '',
    description: '',
  }

  componentDidMount = async () => {
    this.props.fetchCategories();
  }

  changeName = e => {
    this.setState({ name: e.target.value })
  }

  changeDescription = e => {
    this.setState({ description: e.target.value });
  }

  submitCategory = e => {
    e.preventDefault();
    const { name, description } = this.state;
    this.props.createCategory({ name, description });
  }

  changeCategory = async (id, name, description) => {
    this.props.updateCategory(id, { name, description });
  }

  render() {
    const { name, description } = this.state;
    const { categories } = this.props.categories;

    return (
      <Section>
        <Section.Heading>Categories</Section.Heading>
        <Section.Description>Create new categories and manage existing ones.</Section.Description>
        <NewCategory>
          <NewCategory.Heading>Create new category</NewCategory.Heading>
          <Form.Field>
            <Form.Label>
              Name
              <Form.Input type="text" placeholder="Name" value={name} onChange={this.changeName}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Description
              <Form.Input type="text" placeholder="Description" value={description} onChange={this.changeDescription}/>
            </Form.Label>
          </Form.Field> 
          <Button type="submit" onClick={this.submitCategory}>Submit</Button>
        </NewCategory>
        <Cards>
        {
          Object.values(categories).map(category => (
            <Cards.Item key={category._id}>
              <Expander
                head={(
                  <React.Fragment>
                    <h3>{category.name}</h3>
                    <small>{category._id}</small>
                  </React.Fragment>
                )}
                body={(
                  <div>
                    <Button mode="danger" onClick={() => this.props.deleteCategory(category._id)}>Delete</Button>
                    <CategoryEditor name={category.name} description={category.description} onSubmit={(name, description) => this.changeCategory(category._id, name, description)}/>
                  </div>
                )}
              />
            </Cards.Item>
          ))
        }
        </Cards>
      </Section>
    )
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, {
  fetchCategories, createCategory, updateCategory, deleteCategory
})(Categories);