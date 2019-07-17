import React, { Component } from 'react';
import './colourapp1.css';
import Propcolor from './colourapp1-chid1';

class colourapp1 extends Component{
    constructor(){
        super();
        this.state ={
            color: '#ffffff',
        }
    }
    changecolour(color){
        this.setState({color})
    }
    
    
    render(){
        return(
            <div>
    <div className="container" style={{backgroundColor:this.state.color}}>
        <h1>state colours</h1></div>
    
    <div style={{display:'flex',justifyContent:'space-around'}}>
    <button onClick ={()=> this.changecolour('red')}className="btn1">red</button>
    <button onClick ={() => this.changecolour('yellow')} className ="btn2">yellow</button>
    <button onClick ={() => this.changecolour('green')} className ="btn3">green</button>
    <button onClick={()=> this.changecolour('blue')} className='btn4'>blue</button>
    <button onClick ={()=> this.changecolour('brown')} className="btn5">brown</button>
    </div>
<Propcolor color= {this.state.color}/>
    </div>
        );
    }
     }
    
export default colourapp1