import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Expander = styled.div`
  border-top: 1px solid rgba(0, 0, 0, .125);
  border-left: 1px solid rgba(0, 0, 0, .125);
  border-right: 1px solid rgba(0, 0, 0, .125);
`

Expander.Head = styled.div`
  display: grid;
  grid-template-columns: auto 80px;
  border-bottom: 1px solid rgba(0, 0, 0, .125);
`

Expander.Head.Content = styled.div`
  
`

Expander.Head.Button = styled.button`
  border: 0;
  outline: 0;
  background: transparent;
  border-left: 1px solid rgba(0, 0, 0, .125);

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, .02);
  }
`

Expander.Body = styled.div`
  display: ${props => props.expanded ? 'block' : 'none'};
  border-bottom: 1px solid rgba(0, 0, 0, .125);
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

    const buttonContent = expanded ? 'Hide' : 'Expand';

    return (
      <Expander>
        <Expander.Head>
          <Expander.Head.Content>{head}</Expander.Head.Content>
          <Expander.Head.Button onClick={this.toggle}>{buttonContent}</Expander.Head.Button>
        </Expander.Head>
        <Expander.Body expanded={expanded}>{body}</Expander.Body>
      </Expander>
    )
  }
}