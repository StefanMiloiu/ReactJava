import React from 'react';
import { useState } from 'react';
export default function MatchForm(_ref) {
  let {
    addFunc
  } = _ref;
  // const [name, setName] = useState('');
  // const [username, setUsername] = useState('');
  // const [passwd, setPasswd] = useState('');
  //
  const [id, setId] = useState('');
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [matchType, setMatchType] = useState('');
  function handleSubmit(event) {
    let match = {
      id: id,
      teamA: teamA,
      teamB: teamB,
      matchType: matchType
    };
    console.log('A user was submitted: ');
    console.log(match);
    addFunc(match);
    event.preventDefault();
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Id:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: id,
    onChange: e => setId(e.target.value)
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "TeamA:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: teamA,
    onChange: e => setTeamA(e.target.value)
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "TeamB:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: teamB,
    onChange: e => setTeamB(e.target.value)
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", null, "MatchType:", /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: matchType,
    onChange: e => setMatchType(e.target.value)
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "submit",
    value: "Add match"
  }));
}
/*class UserForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {username: '', name:'', passwd:''};

      //  this.handleChange = this.handleChange.bind(this);
       // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserChange=(event) =>{
        this.setState({username: event.target.value});
    }

    handleNameChange=(event) =>{
       this.setState({name: event.target.value});
    }

    handlePasswdChange=(event) =>{
        this.setState({passwd: event.target.value});
    }
    handleSubmit =(event) =>{

        let user={id:this.state.username,
                name:this.state.name,
                passwd:this.state.passwd
        }
        console.log('A user was submitted: ');
        console.log(user);
        this.props.addFunc(user);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleUserChange} />
                </label><br/>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label><br/>
                <label>
                    Passwd:
                    <input type="password" value={this.state.passwd} onChange={this.handlePasswdChange} />
                </label><br/>

                <input type="submit" value="Add user" />
            </form>
        );
    }
}
export default UserForm;*/