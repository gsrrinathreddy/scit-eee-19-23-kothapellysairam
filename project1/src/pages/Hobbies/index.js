import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.agcas.org.uk/write/MediaUploads/Resources/shutterstock_423324397.jpg',
    title: 'Writing',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.pexels.com/photos/915972/pexels-photo-915972.jpeg?cs=srgb&dl=adult-adventure-backlit-915972.jpg&fm=jpg',
    title: 'Travel',
    
  },
  {
    img: 'https://www.baltic.travel/uploads/2021/08/Return_of_Sports.jpg',
    title: 'Sports',
    
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.1DdwyjnXtJYmVaSZ_8A2kgHaEK&pid=Api&P=0',
    title: 'Dance',
    
    cols: 2,
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.MYBXwqjBG1K3zIggNQN53QHaEK&pid=Api&P=0',
    title: 'Photography',
    
    cols: 2,
  },
  {
    img: 'https://image.shutterstock.com/z/stock-photo-learn-new-things-542046928.jpg',
    title: 'Learning New Things',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://static.vecteezy.com/system/resources/previews/001/181/291/original/rounded-rectangle-social-media-icons-set-vector.jpg',
    title: 'Socialmedia',
    
  },
];