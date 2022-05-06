import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SongCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image="https://m.media-amazon.com/images/I/51sFQJrJxZL._AC_.jpg"
        alt="Cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CryBaby
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Melanie Martinez
        </Typography>
      </CardContent>
    </Card>
  );
}
