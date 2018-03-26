import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component Life Cycle</h1>
        </header>
        <Body />
      </div>
    );
  }
}

class Body extends Component {
  constructor(props){
    super(props);

    this.state = {
      rand:0
    };

    this.getRandomNumber = this.getRandomNumber.bind(this);
  }

  getRandomNumber(){
    //console.log("Random number called");
    this.setState({rand: Math.floor(Math.random() * 10)})
  }

  render(){
    return(
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getRandomNumber}> Random Number </button>
        <Numbers myNumber={this.state.rand}/>
      </div>
    );
  }
}

class Numbers extends Component{
  componentWillMount(){
    console.log("componentWillMount called here")
  }

  componentDidMount(){
    console.log("componentDidMount called here")
  }

  componentWillReceiveProps(newProps){
    console.log("componentWillReceiveProps called")
  }

  shouldComponentUpdate(newProps, nextState){
    console.log("Called shouldComponentUpdate")
    return true;
  }

  componentWillUpdate(newProps, nextState){
    console.log("Called componentWillUpdate")
  }

  componentDidUpdate(newProps, nextState){
    console.log("Called componentDidUpdate")
  }

  componentWillUnmount(){
    console.log("Called componentWillUnmount")
  }

  render(){
    return(
      <div>
        <br />
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
