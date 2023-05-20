
import Candidate from "./Candidate"
import React, {useEffect, useState} from 'react';
import axios from "axios";


export default function Position(props){

    const [candidates, setCandidates]=useState([]);
  
  
    useEffect(() => {
      loadCandidates();
    },[]);
  
    const loadCandidates = async() =>{
      const result = await axios.get("http://localhost:8080/candidate/getAll");
     setCandidates(result.data);
    }

    return(
        <div className="bob">
        <section className="Tabs">
           <div className="cards-list">
       {candidates.map(({id,name,picture,position})=>(
       position===props.title?<Candidate key={id} name={name} img={picture}/>:null))}
       </div>
       </section>
       <br/>
        </div>
        
    );
}