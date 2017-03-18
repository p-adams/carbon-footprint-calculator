import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools'
import {observer} from 'mobx-react'
import './App.css';

const App = observer(class App extends Component {
  render() {
    return (
      <div className="App">
        Points: {this.props.store.runningTotal}
        Comp {this.props.store.calculateTotal}
       <DevTools/>
      </div>
    );
  }
  showTotal(){
    return this.props.store.runningTotal
  }
})

export default App;
