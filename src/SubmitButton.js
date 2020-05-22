import React, { Component } from 'react';

export default class SubmitButton extends Component {
  render() {
    const { username, password } = this.props;
    // Set clickable to true if there is a username and password
    const clickable = username.length > 0 && password.length  > 0;
    
    return(
      <input
        type="submit"
        //Disable this button if there isn't a username and password
        disabled={!clickable}
        onClick={e => this.props.handleSubmit()}      
      />
    )
  }
}