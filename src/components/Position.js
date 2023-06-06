
import Candidate from "./Candidate"
import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import { query, collection, where, orderBy, onSnapshot } from 'firebase/firestore';


export default function Position(props){

    const [candidates, setCandidates]=useState([]);
    const [checked, setChecked]= useState([]);
    
  
    const checkChange = (value) => {
      if (checked.indexOf(value) !== -1) {
        setChecked(checked.filter((checkBox) => checkBox !== value));
      } else {
        setChecked([...checked, value]);
      }
    };



    useEffect(() => {
      const q = query(collection(db, 'candidates'),where("position", "==", props.title),orderBy('lastname'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(),id: doc.id });
        });
        setCandidates(messages);
      });
      return () => unsubscribe();
    }, []);
  


    return(
        <div className="bob">
        <section className="Tabs">
           <div className="cards-list">
       {candidates.map(({id,firstname,lastname,picture},index)=>(
       <Candidate key={id} seats={props.seats} index={index} firstname={firstname} lastname={lastname} img={picture} checked={checked} checkChange={checkChange}/>:null))}
       </div>
       </section>
       <br/>
        </div>
        
    );
}