import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'blocks/Pagination';

export default class Paginator extends Component {
  static propTypes = {
    // Current page
    current: PropTypes.number.isRequired,
    // Total number of pages
    pages: PropTypes.number.isRequired,
    // Rendered pages count
    spread: PropTypes.number,
    // Function triggered when item is clicked
    onItemClicked: PropTypes.func.isRequired
  }

  static defaultProps = {
    spread: 5
  }

  itemClicked = index => {
    this.props.onItemClicked(index);
  }
 
  render() {
    const { current, pages, spread } = this.props;
    const begin = current - Math.floor(spread / 2) >= 0 ? current - Math.floor(spread / 2) : 0;

    const items = [];
    for(let i = 0; i < spread && begin + i < pages; ++i) {
      if(begin + i === current)
        items.push(<Pagination.Item key={i} disabled>{begin + i + 1}</Pagination.Item>);
      else
        items.push(<Pagination.Item key={i} onClick={() => this.itemClicked(begin + i)}>{begin + i + 1}</Pagination.Item>);
    }

    if(begin > 0)
      items.unshift(<Pagination.Item key={'first'} onClick={() => this.itemClicked(0)}>First</Pagination.Item>)

    if(begin < pages - spread)
      items.push(<Pagination.Item key={'last'} onClick={() => this.itemClicked(pages - 1)}>Last</Pagination.Item>)

    return (
      <Pagination>
        { items }
      </Pagination>
    )
  }
}