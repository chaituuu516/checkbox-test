import React, { Component } from 'react';

class Dropdown extends Component {
  state={
    language:[]
  }
componentWillMount(){
   //fetch('https://rtp2.cloud.boomerangplatform.net/isap/dev/projectms/api/v1/project/language')
   fetch('https://rtp2.cloud.boomerangplatform.net/isap/dev/projectms/api/v1/project/language')
    .then(res => res.json())
    .then(result => {this.setState({language:result.result});
      //console.log(result.result)
      //this.state.language.push(result.result);
      console.log(this.state.language)
    })
}
    render(){
        return(
          <div>
          <h1>test</h1>
          <select>
              {this.state.language.map(language => <option key={language.id} value={language.language}>{language.language}</option>)}
          </select>
          </div>
        )
      }
  }

export default Dropdown;
