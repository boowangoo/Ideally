import React, { Component } from 'react';

import logo from './logo.svg';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <img id='main-btn' src="/res/svg/MainCircle.svg"
         alt="THIS WAS SUPPOSED TO BE THE MAIN CRICLE"
          onClick={this.props.handler}/>
    );
  }
}

export default Main;
