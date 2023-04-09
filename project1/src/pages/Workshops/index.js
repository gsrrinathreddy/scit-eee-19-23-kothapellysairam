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

    const connectToServer = async  () => axios.get('http://localhost:8000/Workshops')
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
          <Typography>Workshop-1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         A training session is successfully completed on "Data Analytics".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Workshop-2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        A workshop training session is successfully completed on "Full stack web development".
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Workshop-3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         A two day workshop is successfully completed on "Matlab".
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
  );
}