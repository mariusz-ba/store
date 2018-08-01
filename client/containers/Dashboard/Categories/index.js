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

import { Cards } from './styles';
import Button from 'blocks/Button';

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
      <div>
        <form>
          <input type="text" placeholder="Name" value={name} onChange={this.changeName}/>
          <input type="text" placeholder="Description" value={description} onChange={this.changeDescription}/>
          <button type="submit" onClick={this.submitCategory}>Submit</button>
        </form>
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
      </div>
    )
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, {
  fetchCategories, createCategory, updateCategory, deleteCategory
})(Categories);