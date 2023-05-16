import Position from './Position'
import Data from "../data"
import "../App.css";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React from 'react';


export default function Ballot() {
  const positions=Data;
  const position =Data[0].position;
  const [posValue, setPosValue] = React.useState(position);

    return (
      
        <Box>
          <Tabs className="box"
          value={posValue}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="true"
           allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          onChange={(event, newValue) => {
            setPosValue(newValue);
          }}
        >
           {positions.map((p) => (
          <Tab label={p.position} value={p.position} />
        ))}
          </Tabs>
           {positions.map((p) =>(
            p.position===posValue?<Position title={p.position} candidates={p.candidates}/> :null
           ))}
          </Box>
    
    
    );
  }