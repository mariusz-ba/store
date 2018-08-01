import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Expander = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, .125);
`

Expander.Head = styled.div`
  color: #fff;
  background: #1086ed;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Expander.Head.Content = styled.div`
  small {
    display: block;
    margin-top: .5rem;
    font-weight: bold;
    color: rgb(0, 66, 114);
  }
`

Expander.Head.Button = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  color: #fff;
  padding: .5rem;
  font-size: 1.5em;

  &:hover {
    cursor: pointer;
  }
`

Expander.Body = styled.div`
  padding: 1rem;
  display: ${props => props.expanded ? 'block' : 'none'};
  color: #fff;
  background: rgb(0, 126, 218);
`

export default class extends Component {
  state = {
    expanded: false
  }

  static propTypes = {
    head: PropTypes.node.isRequired,
    body: PropTypes.node.isRequired
  }

  toggle = e => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { expanded } = this.state;
    const { head, body } = this.props;

    const togglerClass = expanded ? 'fa-caret-up' : 'fa-caret-down';

    return (
      <Expander>
        <Expander.Head>
          <Expander.Head.Content>{head}</Expander.Head.Content>
          <Expander.Head.Button onClick={this.toggle}><i className={`fas ${togglerClass}`}></i></Expander.Head.Button>
        </Expander.Head>
        <Expander.Body expanded={expanded}>{body}</Expander.Body>
      </Expander>
    )
  }
}