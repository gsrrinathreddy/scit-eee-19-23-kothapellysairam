import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import HIEE from '../../Assets/HIEE.png';
import {useState,useEffect} from 'react';
import axios from 'axios';
export default function Certifications(){
  const [loader,setLoader] = useState(true);
      const [certifications,setCertifications] = useState(null);
  
      const connectToServer = async  () => axios.get('http://localhost:8000/Certifications')
                                              .then(res=>{
                                          
                                                  console.log(res.data);
                                                  setCertifications(res.data);
                                                  setLoader(false)
                                              }).catch(err=>console.log(err))
  useEffect(()=>{
     connectToServer();
  },[])
  return (
    <Card sx={{ maxWidth: 450}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={HIEE}
          alt="HIEE certification"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         Ev emulator for training and research
          </Typography>
          <Typography variant="body2" color="text.secondary">
          This is to Certify that has attended the Virtual Site Visit on “EV Emulator for Training & Research”.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}