import Position from './Position'
import "../App.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';


export default function Ballot() {

  const [positions, setPositions]=useState([]);
  const [posValue,setPosValue] =useState("");
 


  useEffect(() => {
    const q = query(collection(db, 'positions'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(),id: doc.id });
      });
      console.log(messages);
      setPositions(messages);
      setPosValue(messages[0]);
    });
    return () => unsubscribe();
  }, []);

  



    return (
      
        <Box>
          <Tabs className="box"
          value={posValue}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
         
          aria-label="scrollable force tabs example"
          onChange={(event, newValue) => {
            setPosValue(newValue);
          }}
        >
           {positions.map((p) => (
          <Tab key={p.id} label={p.position} value={p.position} />
        ))}
          </Tabs>
           {positions.map((p) =>(
            p.position===posValue?<Position key={p.id} title={p.position}/> :null
           ))}
          </Box>
    
    
    );
  }