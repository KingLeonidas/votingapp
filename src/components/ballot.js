import Position from './Position'
import "../App.css";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, {useEffect, useState} from 'react';
import axios from "axios";


export default function Ballot() {
  const [positions, setPositions]=useState([]);
  const [posValue,setPosValue] =useState("");

  useEffect(() => {
    loadPositions();
  },[]);

  const loadPositions = async() =>{
    const result = await axios.get("http://localhost:8080/position/getAll");
   setPositions(result.data);
   setPosValue(result.data[0].position)
  }



    return (
      
        <Box>
          <Tabs className="box"
          value={posValue}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="on"
         
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