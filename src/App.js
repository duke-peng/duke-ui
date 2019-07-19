import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css';
import Home from './view/index'
import Hot from './view/hot/hot.js'
import My from './view/my/my.js'
import Best from './view/best/best.js'


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
     <Route path='/hot' component={Hot} />
     <Route path='/my' component={My} />
     <Route path='/best' component={Best} />
    </div>
    <div id='nav'>
     <NavLink to='/home' >主页</NavLink>
     <NavLink to='/hot' >热点</NavLink>
     <NavLink to='/my' >推荐</NavLink>
     <NavLink to='/best' >我的</NavLink>
    </div>

   </BrowserRouter>




  )


 }


}

