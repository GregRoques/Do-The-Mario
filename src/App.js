import React, { Component } from 'react';
import Mario from './mario.js'
import './mario.css'
import './App.css'

var hold = false //*

class App extends Component {

  state={
    jump: false
  }

  makeJump = (e) =>{
    if (hold !== true){ // the "hold" functionality helps avoid keydown repeat
      this.setState({
          jump:true
        });
        this.jumpDown();
        hold = true   // *
    }
  }  

  jumpDown = () =>{
    setTimeout(()=>{
      this.setState({
        jump: false
      })
    }, 1000)
  }

  keyUpListener = (e) =>{
    if (e.keyCode === 13){
      hold = false //*
    }
  }

  render(){
    window.addEventListener('keydown', e =>{
      this.makeJump(e)
    }) 
    window.addEventListener('keyup', e =>{
      this.keyUpListener(e) //*
    }) 

    return (
      <div className="App">
          <div className='marioWorld'>
              <Mario jump={this.state.jump}/>
          </div>
      </div>
    );
  }
}

export default App;
