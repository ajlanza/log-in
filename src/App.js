import React, { Component } from 'react';
import Username from './Username';
import Password from './Password';
import SubmitButton from './SubmitButton';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
  }

  setName(username) {
    this.setState({
      username
    });
  }

  setPassword(password) {
    this.setState({
      password
    });
  }

  displaySubmit() {
    alert(`submitted username: ${this.state.username} and password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Log in</h1>
          <form className="loginForm">
            <Username username={this.state.username} handleUsername={name => this.setName(name)}/>
            <Password password={this.state.password} handlePassword={password => this.setPassword(password)}/>
            <SubmitButton username={this.state.username} password={this.state.password} handleSubmit={e => this.displaySubmit(e)}/>           
          </form>     
        </header>
      </div>
    );
  }
}