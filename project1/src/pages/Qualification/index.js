import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SREE CHAITANYA" src="https://tse2.mm.bing.net/th?id=OIP.EGzVJy3sM80VX8RtnV8_DAHaGi&pid=Api&P=0"/>
        </ListItemAvatar>
        <ListItemText
          primary="SREE CHAITANYA INSTITUTE OF TECHNOLOGICAL SCIENCES"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                75% CGPA
              </Typography>
              {"-Bachelor Of Technology In EEE"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="JYOTHISHMATHI" src="https://www.targetadmission.com/img/logos/1710263615.png"/>
        </ListItemAvatar>
        <ListItemText
          primary="JYOTHISHMATHI INSTITUTE OF TECHNOLOGICAL SCIENCES"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                88% CGPA
              </Typography>
              {"-Diploma In EEE "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="GOVT HIGH" src="https://tse2.mm.bing.net/th?id=OIP.UoPCsbGb4Yg3pwOx-5a0OgHaH_&pid=Api&P=0" />
        </ListItemAvatar>
        <ListItemText
          primary="GOVERNMENT HIGH SCHOOL"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                92% CGPA
              </Typography>
              {"-Higher Secondory Education"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}