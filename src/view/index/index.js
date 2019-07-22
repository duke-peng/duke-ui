import React, { Component } from 'react';
import { Carousel, Icon, Button, Card } from 'antd';
import './index.css'
const { Meta } = Card;

// let { Header, Content, Footer } = Layout

// const { Header, Footer, Content } = Layout

export default class Name extends Component {
 constructor() {
  super()
  this.state = {
   name: '王晓二',
   recommend: []

  }

 }
 render(h) {
  let mainShow = this.state.recommend.map(item => {
   return (
    <Card
     hoverable
     style={{ width: '50%', padding: 5 }}
     cover={<img alt={item.alt} src={item.img} />}
    >
     <Meta title={item.title} description={item.description} />
    </Card>
   )
  })

  return (
   <div>
    <div id='header'>
     <div id='header__main'>
      <Icon type="search" id='header__search' />
     </div>
    </div>
    <div id='header__nav'>
     {/* <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
     </ul> */}
     <Button type="link">Link1</Button>
     <Button type="link">Link2</Button>
     <Button type="link">Link3</Button>
     <Button type="link">Link4</Button>
     <Button type="link">Link5</Button>
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
    <div id='main'>
     <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>5</li>
      <li>6</li>
     </ul>
    </div>
    <div id='main__show' >

     {mainShow}
    </div>
   </div >
  )

 }
 componentWillMount() {
  console.log(this.state)
  this.setState({
   recommend: [{
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    alt: 'example',
    title: 'Europe Street beat',
    description: 'Q'
   }, {
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
    alt: 'example',
    title: 'Europe Street beat',
    description: 'Q'
   }]
  })

 }

}

