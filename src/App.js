import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'
import {observer} from 'mobx-react'
import CarbonFootprint from './CarbonFootprint.js'
import './App.css';


const App = observer(class App extends Component {
  render() {
    return (
      <div className="App">
        <CarbonFootprint/>
       <DevTools/>
      </div>
    );
  }
})

export default App;
