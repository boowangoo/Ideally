import React, { Component } from 'react';

import logo from './logo.svg';
import './Start.css';

class Start extends Component {
  render() {
    return (
      <img id='login-btn' src="/res/svg/LoginCircle.svg"
         alt="THIS WAS SUPPOSED TO BE THE LOGIN CRICLE"
          onClick={this.props.handler2}/>
    );
  }
}

export default Start;
