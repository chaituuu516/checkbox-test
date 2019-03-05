import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state={
        languages:['English','Hindi','Telugu','Tamil'],
        states:['Choose One','AndhraPradesh','Tamilnadu','Karnataka'],
        stateSelected:'',
        languagesSelected:[],
        name: '',
      	phone: '',
				email: '',
				password: '',
				gender:''
};
this.handleChange = this.handleChange.bind(this);
this.handleSelect = this.handleSelect.bind(this);
this.handleDropDown = this.handleDropDown.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(e){
  let target=e.target;
  let value=target.type === 'Radio' ? target.clicked : target.value;
  let name=target.name;

		this.setState({
			[name]:value
		});
}
handleDropDown(e){
  let target=e.target;
  let name=target.name;
  let value=target.value;
  this.setState({
    [name]:value
  });
}
handleSelect(e){
  let target=e.target;
  let value=target.value;
  this.state.languagesSelected.push(value);
}
handleSubmit(e) {
	        e.preventDefault();
	        console.log(this.state);
	    }

  render() {
    return (
      <div className="Div">
      <h2 className="FormField1">Sample Registration</h2>
  		<form className="Form" onSubmit={this.handleSubmit}>
  		<div className="FormField">
  			<label className="Label">Name:</label>
  			<input className="Input" type="text" id="name" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange}/>
  		</div>
  		<div className="FormField">
  			<label className="Label">Phone:</label>
  			<input className="Input" type="text" id="phone" name="phone" placeholder="Enter Phone Number" value={this.state.phone} onChange={this.handleChange}/>
  		</div>
  		<div className="FormField">
  			<label className="Label">Email:</label>
  			<input className="Input" type="text" id="email" name="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleChange}/>
  		</div>
  		<div className="FormField">
  			<label className="Label">Password:</label>
  			<input className="Input" type="password" id="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange}/>
  		</div>
  		<div className="FormField">
  			<input className="Radio" type="Radio" name="gender" value="male" onChange={this.handleChange}/><label className="Radio">Male</label>&nbsp; &nbsp;
  			<input className="Radio" type="Radio" name="gender" value="female" onChange={this.handleChange} /><label className="Radio">Female</label>
  		</div>
      <div className="FormField">
      <label className="Radio">State:</label>&nbsp;&nbsp;
        <select name="stateSelected" onChange={this.handleDropDown}>
          {this.state.states.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
        </div>
      <div className="FormField">
      <label className="Radio">Languages you know:</label>
        <ul className="ul">
          {this.state.languages.map(language => <li className="li" key={language}><input onChange={this.handleSelect} type="checkbox" value={language}/>{language}</li>)}
        </ul>
        </div>
        <button className="Button">Register</button>
        </form>
      </div>
    );
  }
}

export default App;