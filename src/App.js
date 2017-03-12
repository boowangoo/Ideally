import React, { Component } from 'react';

import logo from './logo.svg';
import Ideamap from './Ideamap';
import Start from './Start';
import Main from './Main';
import Navi from './Navi';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.handler = this.handler.bind(this);
    this.handler2 = this.handler2.bind(this);
    this.state={loadPage:'Start',
                bgColor: '#1fd4b8'}
  }
  handler(e){
    e.preventDefault();
    this.setState({
      loadPage:'Ideamap',
      bgColor: '#f6f7f8'
    });
  }
  handler2(e){
    e.preventDefault();
    this.setState({
      loadPage:'Main',
      bgColor: '#f6f7f8'
    });
  }
  render() {
    var loader = [];
    if(this.state.loadPage === "Main"){
      loader.push(<Main handler={this.handler}/>);
    }
    if(this.state.loadPage === "Ideamap"){
      loader.push(<Ideamap />);
    }
    if(this.state.loadPage === "Start"){
      loader.push(<Start handler2={this.handler2}/>);
    }
    else{
      loader.push(<Navi style={{zIndex:100000000}} />);
    }


    return (
      <div style={{width:'200vw', height:'200vh', position:'fixed', backgroundColor:this.state.bgColor}}>
        {/*<Ideamap />*/}
          <div>
            {loader}
          </div>

        }

      </div>
    );
  }
}

export default App;
