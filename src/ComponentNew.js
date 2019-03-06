import React, { Component } from 'react';
import './App.css';

class ComponentNew extends Component{
render(){
  console.log(this.props.data);
  return(
    <div>
      <h1>welcome to component 2</h1>
      <h2>Hi {this.props.data.name}</h2>
      <h2>Phone {this.props.data.phone}</h2>
      <h2>Mail {this.props.data.email}</h2>
      <h2>Gender{this.props.data.gender}</h2>
      <h2>State{this.props.data.stateSelected}</h2>
    </div>
  );
}

}

export default ComponentNew;
