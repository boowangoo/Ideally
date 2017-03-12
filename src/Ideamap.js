import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same tim
import logo from './logo.svg';
import './Ideamap.css';

import {dbMain, dbSub} from './dataBase'
import findAngle from './bubLocation.js'

import Bubble from './Bubble';

class Ideamap extends Component {
  render() {
    //console.log('dbMain length = '+dbMain.length);
    const angleResults = findAngle(dbMain.length);

    function scalePop(x){
        return (1.5*Math.log(x+16)-3.6);
    };

    const SCALE = 7;
    const SCALE_AGAIN = 5;

    var lineList = [];

    var bubList = [];
    console.log('length of dbMain is: '+dbMain.length);
    for(var i = 0; i <dbMain.length; i++){
      var db = dbMain[i];
      var aR = angleResults[i];
      var centerX = (SCALE+SCALE_AGAIN*((i/6)|0))*aR.x;
      var centerY = (SCALE+SCALE_AGAIN*((i/6)|0))*aR.y;
      var rVal = scalePop(db.popularity);
      bubList.push(<Bubble cx={50+centerX}
                           cy={50+centerY}
                           r={rVal}
                           user={db.user}/>);
      lineList.push(<svg className="connecting-line"
                          width="100%" height="100%"
                          style={{top:"0" ,left:"0"}}>
                          <line x1="50%" y1="50%"
                          x2={(50+centerX)+'%'}
                          y2={(50+centerY)+'%'}
                          style={{stroke:"#828282", strokeWidth:2}} /></svg>);
    }

    return (
      <Draggable cancel="circle">
        <div className="map">
          {lineList}
          {bubList}
          <Bubble cx={50}
                               cy={50}
                               r={1}
                               user=""/>
        </div>
      </Draggable>

    );
  }
}

export default Ideamap;
