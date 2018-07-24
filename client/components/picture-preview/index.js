import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Picture,
  PictureList,
  PictureListItem
} from './styles';

export default class PicturePreview extends Component {
  state = {
    current: 0
  }

  changeCurrent = (index) => {
    this.setState({ current: index })
  }

  render() {
    const { current } = this.state;
    const { pictures } = this.props;

    return (
      <Container>
        <Picture src={pictures[current]} />
        <PictureList>
          { pictures &&
            pictures.map((picture, index) => (
              <li key={index} onClick={() => this.changeCurrent(index)}>
                <PictureListItem src={picture}/>
              </li>
            ))
          }
        </PictureList>
      </Container>
    )
  }
}

PicturePreview.propTypes = {
  pictures: PropTypes.array.isRequired
}