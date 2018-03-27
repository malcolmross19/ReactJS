import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  render() {
    var courses = [
      { name: 'Complete iOS10 Dev Course', price: 199 },
      { name: 'Complete Pentesting Course', price: 299 },
      { name: 'Complete Front End Dev Course', price: 180 },
      { name: 'Bug Bounty and Web App Pentesting', price: 190 }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Course Purchase Page</h1>
        </div>
        <CourseSales items={courses} />
      </div>
    );
  }
}

export default App;
