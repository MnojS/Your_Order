import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      apiResponse : ""
    }
  }
  callAPI() {
    fetch("http://localhost:9000/api/orders")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
  }
  componentWillMount() {
    this.callAPI();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a>
            {this.state.apiResponse}
          </a>
        </header>
      </div>
    )
  }
}

export default App
