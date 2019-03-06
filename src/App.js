import React, { Component } from 'react';
import './App.css';
//import {Accordion,AccordionItem,AccordionItemTitle,AccordionItemBody,} from 'react-accessible-accordion';
//import './accordion.css';
//import { HashRouter as Router, Route,Link} from 'react-router-dom'
import NavBar from './NavBar'
import ComponentMain from './ComponentMain'

class App extends Component {
render(){
return(
  <React.Fragment>
  <NavBar/>
  <ComponentMain />
  </React.Fragment>
)
}
}

export default App;
