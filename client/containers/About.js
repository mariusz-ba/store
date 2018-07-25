import React, { Component } from 'react';
import Spacer from 'blocks/Spacer';
import Wrapper from 'blocks/Wrapper';
import Slider from 'components/slider';
import {
  Title,
  Description,
  Pictures,
  Picture
} from './styles';

export default class About extends Component {
  render() {
    return (
      <Wrapper>
        <Slider images={['https://images.unsplash.com/photo-1483900436872-daac2aca11a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c3fbd256649f42665c568c0640006ad4&auto=format&fit=crop&w=1350&q=80']}/>
        <Spacer>&#10699;</Spacer>
        <Title>AN INTRODUCTION</Title>
        <Description>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a sem purus. Proin nec pulvinar elit. In hac habitasse platea dictumst. Aenean vel facilisis ligula.</p>
          <p>Aliquam eget elit sagittis, mattis tellus non, commodo nisi. Mauris convallis tristique finibus. Morbi eu sapien nulla. Mauris vitae tortor pulvinar, eleifend augue dapibus, dapibus erat.</p>
          <p>Nulla quis arcu lorem. Vestibulum feugiat rhoncus aliquet. Aliquam porttitor facilisis orci, sit amet vestibulum quam rhoncus sit amet. In vitae massa sollicitudin, ornare quam ut, dapibus sem.</p>
          <p>The brand identity was created by <a href="https://mariusz-ba.github.io/portfolio">MARIUSZ BARAN</a> in Cracow.</p>
        </Description>
        <Pictures>
          <Picture src="https://images.unsplash.com/photo-1516886635086-2b3c423c0947?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d541acfcafecad7e20b05ffa23b87dd&auto=format&fit=crop&w=701&q=80"/>
          <Picture src="https://images.unsplash.com/photo-1487537708572-3c850b5e856e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d58daea6773f3ca15788b46f3277a4e&auto=format&fit=crop&w=1352&q=80"/>
        </Pictures>
      </Wrapper>
    )
  }
}