import React, { Component } from 'react';
//import Measure from 'react-measure'
import logo from './logo.svg';
import globalStates from './globalStates'
import './Bubble.css';

class Bubble extends Component {
  constructor(props){
    super(props);
    this.state = {scale:1};
    this.onCircle = this.onCircle.bind(this);
    this.offCircle = this.offCircle.bind(this);
    this.selectCircle = this.selectCircle.bind(this);
  }
  onCircle(){
    this.setState({scale:1.05});
  }
  offCircle(){
    this.setState({scale:1})
  }
  selectCircle(){
    console.log("wow mouse!");
  }

  render() {
    var myProps = this.props;
    const TEXTSCALE = 40;
    //console.log(this);
    return (
        <svg className="bub"
          width={myProps.r*2 +'%'}
          height={myProps.r*2 +'%'}
          style={{top:(myProps.cy-myProps.r)+'%',left:(myProps.cx-myProps.r)+'%'}} >
          <circle className='circ'
            cx="50%"
            cy="50%"
            r={42*this.state.scale+'%'}
            stroke="#ff3366"
            strokeWidth="6"
            fill="#1fd4b8"
            onMouseOver={this.onCircle}
            onMouseOut={this.offCircle}
            onClick={this.selectCircle}
          />
        <text fill="#ffffff" textAnchor="middle" fontSize={TEXTSCALE*myProps.r+'%'} fontFamily="Verdana" x="50%" y="54%">{myProps.user}</text>
        </svg>

    );
  }
}

export default Bubble;
