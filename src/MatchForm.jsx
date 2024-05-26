import React from  'react';
import { useState } from 'react';

export default function MatchForm({addFunc, modifyFunc}){

    const [id, setId] = useState('');
    const [teamA, setTeamA] = useState('');
    const [teamB, setTeamB] = useState('');
    const [matchType, setMatchType] = useState('');

    function handleSubmit (event){
        event.preventDefault();
        let match={
            id:id,
            teamA:teamA,
            teamB:teamB,
            matchType:matchType
        }
        console.log('A match was submitted: ');
        console.log(match);
        addFunc(match);
    }

    function handleUpdate (event){
        event.preventDefault();
        let match={
            id:id,
            teamA:teamA,
            teamB:teamB,
            matchType:matchType
        }
        console.log('A match was updated: ');
        console.log(match);
        modifyFunc(match);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Id:
                <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            </label><br/>
            <label>
                TeamA:
                <input type="text" value={teamA} onChange={e=>setTeamA(e.target.value)} />
            </label><br/>
            <label>
                TeamB:
                <input type="text" value={teamB} onChange={e => setTeamB(e.target.value)}/>
            </label><br/>
            <label>
                MatchType:
                <input type="text" value={matchType} onChange={e => setMatchType(e.target.value)}/>
            </label><br/>
            <input type="submit" value="Add match"/>
            <button type="button" onClick={handleUpdate}>Update match</button>
        </form>
    );
}