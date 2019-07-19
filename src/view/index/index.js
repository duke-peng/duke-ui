import React, { Component } from 'react';
// import { Layout, Menu } from 'antd';


// const { Header, Footer, Content } = Layout

export default class Name extends Component {
 constructor() {
  super()
  this.state = {
   name: '王晓二'
  }

 }
 render(h) {
  return <div>
   <button onClick={this.runs.bind(this)}>传递</button>
  </div>
 }
 runs() {
  alert(this.state.name)
  this.props.setend(this.state.name)
 }

}

