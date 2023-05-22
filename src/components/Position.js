
import Candidate from "./Candidate"
import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';


export default function Position(props){

    const [candidates, setCandidates]=useState([]);
  
  
    useEffect(() => {
      const q = query(collection(db, 'candidates'),orderBy('lastname'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(),id: doc.id });
        });
        console.log(messages);
        setCandidates(messages);
      });
      return () => unsubscribe();
    }, []);
  


    return(
        <div className="bob">
        <section className="Tabs">
           <div className="cards-list">
       {candidates.map(({id,firstname,lastname,picture,position})=>(
       position===props.title?<Candidate key={id} firstname={firstname} lastname={lastname} img={picture}/>:null))}
       </div>
       </section>
       <br/>
        </div>
        
    );
}