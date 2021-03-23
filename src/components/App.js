import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import '../styles/App.css';
import Navigation from "./Navigation";
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "../routes/AppRouter";




const {Header, Content, Footer } = Layout;

function App() {
  return (
      <BrowserRouter>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Navigation/>
        </Header>
        <Content className='main-content'>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>

          <AppRouter/>
        </Content>


        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      </BrowserRouter>
  );
}

export default App;
