import React from 'react';
// import { Layout, Menu } from 'antd';
// import logo from './logo.svg';
import './App.css';
import Name from './view/index'
// const { Header, Footer, Content } = Layout

function App() {
 return (
  <div className="App">
   {/* <Layout theme='light'>
    <Header style={{ background: '#fff', height: 40 }}>sdsdsd
    </Header>
    <Content >Content</Content>
    <Footer style={{ position: 'fixed', padding: 0, zIndex: 1, bottom: 0, background: '#eee', width: '100%', }}>
     <Menu
      mode="horizontal"
      defaultSelectedKeys={['2']}
     >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
      <Menu.Item key="4">nav 4</Menu.Item>
     </Menu>
    </Footer>
   </Layout> */}
   <Name></Name>
  </div >
 );
}

export default App;
