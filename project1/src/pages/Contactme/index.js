import { Typography } from "@mui/material";
import axios from 'axios';
import {useState,useEffect} from 'react';
export default function Contactme(){
        const [loader,setLoader] = useState(true);
            const [contactme,setContactme] = useState(null);
        
            const connectToServer = async  () => axios.get('http://localhost:8000/Contactme')
                                                    .then(res=>{
                                                
                                                        console.log(res.data);
                                                        setContactme(res.data);
                                                        setLoader(false)
                                                    }).catch(err=>console.log(err))
        useEffect(()=>{
           connectToServer();
        },[])
    return(
        <>
<Typography>CONTACT NAME : KOTHAPELLY SAIRAM </Typography>
<Typography>CONTACT NUMBER : 7330334348</Typography>
        </>
        
    )
}