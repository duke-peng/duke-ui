import React, { Component } from 'react';
export default class My extends Component {
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