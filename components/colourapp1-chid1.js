import React,{ Component } from 'react';

class Propcolor extends Component{
render() {
    return (
        <div>
        <div className="container" style={{background:this.props.color}}>
           <h1> props colours</h1>

        </div>
        </div> 
    );
}
}

export default Propcolor;