import React, { useEffect } from 'react';
import { useState } from 'react';
import UserTable from './MatchTable.jsx';
import './MatchApp.css';
import UserForm from "./MatchForm.jsx";
import { GetUsers, DeleteUser, AddUser } from './utils/rest-calls';
export default function MatchApp() {
  const [matches, setMatches] = useState([{
    "id": "121",
    "teamA": "Steaua React",
    "teamB": "Dinamo React",
    "matchType": "football React"
  }]);
  function addFunc(user) {
    console.log('inside add Func ' + user);
    AddUser(user).then(res => GetUsers()).then(users => setMatches(users)).catch(erorr => console.log('eroare add ', erorr));
  }
  function deleteFunc(match) {
    console.log('inside deleteFunc ' + match);
    DeleteUser(match).then(res => GetUsers()).then(users => setMatches(users)).catch(error => console.log('eroare delete', error));
  }
  useEffect(() => {
    console.log('inside useEffect');
    GetUsers().then(matches => setMatches(matches));
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "UserApp"
  }, /*#__PURE__*/React.createElement("h1", null, " New User Management App "), /*#__PURE__*/React.createElement(UserForm, {
    addFunc: addFunc
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(UserTable, {
    users: matches,
    deleteFunc: deleteFunc
  }));
}
/*
class UserApp extends React.Component{
    constructor(props){
        super(props);
             this.state={users:[{"passwd":"maria","name":"Marinescu Maria","id":"maria"}]}
        //deleteFunc:this.deleteFunc.bind(this);
         //addFunc:this.addFunc.bind(this);
        console.log('UserApp constructor')
    }

    addFunc=(user)=>{
        console.log('inside add Func '+user);
        AddUser(user)
            .then(res=> GetUsers())
            .then(users=>this.setState({users}))
            .catch(erorr=>console.log('eroare add ',erorr));
    }


    deleteFunc=(user)=>{
        console.log('inside deleteFunc '+user);
        DeleteUser(user)
            .then(res=> GetUsers())
            .then(users=>this.setState({users}))
            .catch(error=>console.log('eroare delete', error));
    }


    componentDidMount(){
        console.log('inside componentDidMount')
        GetUsers().then(users=>this.setState({users}));
    }

    render(){
        return(
            <div className="UserApp">
                <h1>Chat User Management</h1>
                <UserForm addFunc={this.addFunc}/>
                <br/>
                <br/>
                 <UserTable users={this.state.users} deleteFunc={this.deleteFunc}/>
            </div>
        );
    }
}

export default UserApp;*/