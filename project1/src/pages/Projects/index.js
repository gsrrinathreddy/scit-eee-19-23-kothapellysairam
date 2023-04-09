import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState,useEffect} from 'react';
import axios from 'axios';
export default function Projects(){
const [loader,setLoader] = useState(true);
  const[projects,setProjects] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Projects')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setProjects(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Mini project in B.tech</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         A mini project on a "development of bidirectional dc/dc converter with dual-battery energy storage for hybrid electric vehicle".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Project in Diploma</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        A project on "wireless power transmission using tesla coil".
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    
    </div>
  );
}