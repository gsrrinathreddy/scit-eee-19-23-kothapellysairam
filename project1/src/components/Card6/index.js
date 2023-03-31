import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Card6() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://tse2.mm.bing.net/th?id=OIP.dykKjfEiMxgEIZzeTkaz6gHaE8&pid=Api&P=0"
          alt="Data Analyst"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
         Data Analyst
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A data analyst collects, cleans, and interprets data sets in order to answer a question or solve a problem. They work in many industries, including business, finance, criminal justice, science, medicine, and government.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );

}