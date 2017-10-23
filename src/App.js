import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "xzc",
      userList: []
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const userRef = rootRef.child('user');
    const userListRef = rootRef.child('users');

    userRef.on('value', snap => {
      this.setState({
        userName: snap.val()
      })
    });

    userListRef.on('value', snap => {
      this.setState({
        userList: snap.val()
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{this.state.userName}</p>
        {this.state.userList.map((user) => {
          return (<p>{user.age}</p>)
        })}
      </div>
    );
  }
}

export default App;
