import React, { Component } from 'react';

export default class Username extends Component {
  render() {
    return (
      <div>
        <input 
          type='text'
          placeholder='Username'
          required
          onChange={e => this.props.handleUsername(e.target.value)}
        />
      </div>
    )
  }
}