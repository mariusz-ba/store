import React, { Component } from 'react';
import Spacer from 'blocks/Spacer';
import Wrapper from 'blocks/Wrapper';
import {
  Title,
  Description,
  Cover
} from './styles';

export default class About extends Component {
  render() {
    return (
      <Wrapper>
        <Cover src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=427bcc1d8e2505d31a239d0de6b13f75&auto=format&fit=crop&w=1350&q=80" alt="Contact"/>
        <Spacer>&#10699;</Spacer>
        <Title>CONTACT US</Title>
        <Description>
          <p>This shit is a streetwear brand founded by Mariusz Baran in 2018. All this shit products are handmade in Barcelona using the finest materials and fabrics.</p>
          <p>If you have any questions or inquiries about our products, please send us an email at <a href="#">hello@fuckinggooddesign.com</a> We'd love to hear from you!</p>
          <p>If you´re a blogger or journalist and would like to know more about our brand or products, please contact us at <a href="#">press@adablackjackgoods.com</a>.</p>
        </Description>
      </Wrapper>
    )
  }
}