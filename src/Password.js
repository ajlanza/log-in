import React, { Component } from 'react';

export default class Password extends Component {
  render() {
    return (
      <div>
        <input 
          type='password'
          placeholder='Password'
          required
          onChange={e => this.props.handlePassword(e.target.value)}
        />
      </div>
    )
  }
}