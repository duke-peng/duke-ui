import React, { Component } from 'react';
import { Carousel, Icon } from 'antd';

import './index.css'

// let { Header, Content, Footer } = Layout

// const { Header, Footer, Content } = Layout

export default class Name extends Component {
 constructor() {
  super()
  this.state = {
   name: '王晓二'
  }

 }
 render(h) {
  return (
   <div>
    <div id='header'>
     <div id='header__main'>
      <Icon type="search" id='header__search' />
     </div>


    </div>
    <Carousel autoplay>
     <div>
      <h3>1</h3>
     </div>
     <div>
      <h3>2</h3>
     </div>
     <div>
      <h3>3</h3>
     </div>
     <div>
      <h3>4</h3>
     </div>
    </Carousel>

   </div >
  )

 }
 runs() {
  alert(this.state.name)
  this.props.setend(this.state.name)
 }

}

