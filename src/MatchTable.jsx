
import React from 'react';
import './MatchApp.css'; // Changed from UserApp.css to MatchApp.css

function MatchRow({match, deleteFunc, modifyFunc}){
    function handleDelete(event){
        console.log('delete button pentru ' + match.id);
        deleteFunc(match.id);
    }
    function handleModify(event){
        console.log('modify button pentru ' + match);
        modifyFunc(match);
    }
    return (
        <tr>
            <td>{match.id}</td>
            <td>{match.teamA}</td>
            <td>{match.teamB}</td>
            <td>{match.matchType}</td>
            <td><button  onClick={handleDelete}>Delete</button></td>
        </tr>
    );
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

export default function MatchTable({matches, deleteFunc}){
    console.log("In UserTable");
    console.log(matches);
    let rows = [];
    // let functieStergere=deleteFunc;
    matches.forEach(function(match) {
        rows.push(<MatchRow match={match}  key={match.id} deleteFunc={deleteFunc} />);
    });
    return (
        <div className="MatchTable">

            <table className="center">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>TeamA</th>
                    <th>TeamB</th>
                    <th>MatchType</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>

        </div>
    );
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