import React, { Component } from 'react';

import logo from './logo.svg';
import './Navi.css';

class Navi extends Component {
  render() {
    return (
      <img id='my-nav' src="/res/svg/TopNav.svg"
         alt="THIS WAS SUPPOSED TO BE THE LOGIN CRICLE"
          onClick={this.props.handler2}/>
    );
  }
}

export default Navi;
