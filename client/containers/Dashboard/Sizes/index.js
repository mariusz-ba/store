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

import Button from 'blocks/Button';
import Form from 'blocks/Form';
import { Cards } from './styles';
import { Section } from '../styles';

import styled from 'styled-components';

const NewSize = Form.extend`
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

NewSize.Heading = styled.h3`
  padding: 1rem 0;
  margin-bottom: 1rem;
  text-align: center;
  color: #fff;
  background: rgb(0, 126, 218);
`

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
      <Section>
        <Section.Heading>Sizes</Section.Heading>
        <Section.Description>Create new sizes and manage existing ones.</Section.Description>
        <NewSize>
          <NewSize.Heading>Createn a new size</NewSize.Heading>
          <Form.Field>
            <Form.Label>
              Name
              <Form.Input type="text" placeholder="Name" value={name} onChange={this.changeName}/>
            </Form.Label>
          </Form.Field>
          <Form.Field>
            <Form.Label>
              Short
              <Form.Input type="text" placeholder="Short" value={short} onChange={this.changeShort}/>
            </Form.Label>
          </Form.Field>
          <Button type="submit" onClick={this.submitSize}>Submit</Button>
        </NewSize>
        <Cards>
        {
          Object.values(sizes).map(size => (
            <Cards.Item key={size._id}>
              <Expander
                head={(
                  <React.Fragment>
                    <h3>{size.name}</h3>
                    <small>Shortcut: {size.short}</small>
                  </React.Fragment>
                )}
                body={(
                  <div>
                    <Button mode="danger" onClick={() => this.props.deleteSize(size._id)}>Delete</Button>
                    <SizeEditor name={size.name} short={size.short} onSubmit={(name, short) => this.changeSize(size._id, name, short)}/>
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

const mapStateToProps = ({ sizes }) => ({ sizes });

export default connect(mapStateToProps, {
  fetchSizes, createSize, updateSize, deleteSize
})(Sizes);