import React, {useEffect} from 'react';
import { useState } from 'react';
import MatchTable from './MatchTable.jsx';
import './MatchApp.css'
import MatchForm from "./MatchForm.jsx";
import {GetMatches, DeleteMatch, AddMatch, ModifyMatch} from './utils/rest-calls'

export default function MatchApp(){
    const [matches, setMatches] = useState([{"id":"121","teamA":"Steaua React","teamB":"Dinamo React","matchType":"football React"}]);

    function addFunc(match){
        console.log('inside add Func '+ match);
        AddMatch(match)
            .then(res=> GetMatches())
            .then(matches=>setMatches(matches))
            .catch(erorr=>console.log('eroare add ',erorr));
    }

    function deleteFunc(match){
        console.log('inside deleteFunc '+match);
        DeleteMatch(match)
            .then(res=> GetMatches())
            .then(matches=>setMatches(matches))
            .catch(error=>console.log('eroare delete', error));
    }

    function modifyFunc(match){
        console.log('inside modifyFunc '+match);
        ModifyMatch(match)
            .then(res=> GetMatches())
            .then(matches=>setMatches(matches))
            .catch(error=>console.log('eroare modify', error));
    }

    useEffect(()=>{
        console.log('inside useEffect')
        GetMatches().then(matches=>setMatches(matches));},[]);

    return (<div className="MatchApp">
        <h1> New Match Management App </h1>
        <MatchForm addFunc={addFunc} modifyFunc={modifyFunc}/>
        <br/>
        <br/>
        <MatchTable matches={matches} deleteFunc={deleteFunc} modifyFunc={modifyFunc}/>
    </div>);
}