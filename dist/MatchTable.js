import React from 'react';
import './UserApp.css';
function MatchRow(_ref) {
  let {
    match,
    deleteFunc
  } = _ref;
  function handleDelete(event) {
    console.log('delete button pentru ' + match.id);
    deleteFunc(match.id);
  }
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, match.id), /*#__PURE__*/React.createElement("td", null, match.team_a), /*#__PURE__*/React.createElement("td", null, match.team_b), /*#__PURE__*/React.createElement("td", null, match.match_type), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
    onClick: handleDelete
  }, "Delete")));
}
/*class UserRow extends React.Component{

    handleDelete=(event)=>{
        console.log('delete button pentru '+this.props.user.id);
        this.props.deleteFunc(this.props.user.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td><button  onClick={this.handleDelete}>Delete</button></td>
            </tr>
        );
    }
}
*/

export default function MatchTable(_ref2) {
  let {
    matches,
    deleteFunc
  } = _ref2;
  console.log("In UserTable");
  console.log(matches);
  let rows = [];
  // let functieStergere=deleteFunc;
  matches.forEach(function (match) {
    rows.push( /*#__PURE__*/React.createElement(MatchRow, {
      match: match,
      key: match.id,
      deleteFunc: deleteFunc
    }));
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "MatchTable"
  }, /*#__PURE__*/React.createElement("table", {
    className: "center"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Id"), /*#__PURE__*/React.createElement("th", null, "TeamA"), /*#__PURE__*/React.createElement("th", null, "TeamB"), /*#__PURE__*/React.createElement("th", null, "MatchType"), /*#__PURE__*/React.createElement("th", null, "Actions"))), /*#__PURE__*/React.createElement("tbody", null, rows)));
}

/*class UserTable extends React.Component {
    render() {
        let rows = [];
        let functieStergere=this.props.deleteFunc;
        this.props.users.forEach(function(user) {

            rows.push(<UserRow user={user}  key={user.id} deleteFunc={functieStergere} />);
        });
        return (<div className="UserTable">

            <table className="center">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Name</th>

                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>

            </div>
        );
    }
}

export default UserTable;*/