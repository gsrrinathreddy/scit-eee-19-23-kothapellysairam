import { Typography } from "@mui/material";
import {useState,useEffect} from 'react';
import axios from 'axios';


export default function Aboutme(){
const [loader,setLoader] = useState(true);
    const [aboutme,setAboutme] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutme')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return(
        <>
<Typography>NAME : KOTHAPELLY SAIRAM </Typography>
<Typography>FATHER NAME : KOTHAPELLY NARASIMHA CHARY</Typography>
<Typography>MOTHER NAME : KOTHAPELLY LAXMI</Typography>
<Typography>GENDER : MALE</Typography>
<Typography>DATE OF BIRTH : 05-01-2002</Typography>
<Typography>EMAIL : kothapellysairam122@gmail.com</Typography>
<Typography>PHONE NO : 7330334348</Typography>
        </>
        
    )
}