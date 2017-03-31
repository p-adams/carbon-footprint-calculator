import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'
import {observer} from 'mobx-react'
import CarbonFootprint from './CarbonFootprint.js'
import Results from './Results.js'
import {Layout} from 'antd'
const {Header, Footer, Sider, Content} = Layout
import './App.css';


const App = observer(class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider className="side-bar">
            <CarbonFootprint/>
          </Sider>
          <Layout>
            <Header className="title">Carbon Footprint Calculator</Header>
            <Content className="display-results">
              Content
            </Content>
          </Layout>
        </Layout>
       <DevTools/>
      </div>
    );
  }
})

export default App;
