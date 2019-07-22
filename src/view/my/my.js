import React, { Component } from 'react';
import './my.css'
import { Avatar, Rate, Icon, Badge, Card } from 'antd';
export default class My extends Component {
 constructor() {
  super()
  this.state = {
   userName: "诸葛铁柱"
  }

 }
 render(h) {
  return (<div id='my'>
   <div id='my__header'>
    <Avatar size={64} icon="user" />
    <div id='user__name'>
     {this.state.userName}
     <Rate character={<Icon type="heart" />} allowHalf disabled defaultValue={3.5} />
    </div>
    <Icon type="right" style={{
     position: 'absolute', right: '11px',
     color: '#fff',
     fontSize: '14px'
    }} />
    <div id='message'>
     <Badge count={98} style={{ fontSize: '12px', backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} >
      <Icon type="bell" style={{ fontSize: '24px' }} />
     </Badge>
    </div>

   </div>
   <div id='my__main'>
    <Card bordered={false} style={{ padding: '20px', marginTop: '5px' }}>
     <p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>
    </Card>
    <Card bordered={false} style={{ padding: '20px', marginTop: '5px' }}>
     <p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>
    </Card>
    <Card bordered={false} style={{ padding: '20px', marginTop: '5px' }}>
     <p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>
    </Card>
    <Card bordered={false} style={{ padding: '20px', marginTop: '5px' }}>
     <p>Card content</p>
     <p>Card content</p>
     <p>Card content</p>
    </Card>
   </div>
  </div>)
 }


}