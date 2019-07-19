import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css';
import Home from './view/index'


export default class APP extends Component {
 constructor() {
  super()
  this.state = {
   vale: ""
  }
 }
 render(h) {

  return (

   <BrowserRouter>
    <div id='table'>
     <Route path='/home' component={Home} />
    </div>
    <div id='nav'>
     <NavLink to='/home' >主页</NavLink>
     <NavLink to='/home' >热点</NavLink>
     <NavLink to='/home' >推荐</NavLink>
     <NavLink to='/home' >我的</NavLink>
    </div>

   </BrowserRouter>




  )


 }


}

