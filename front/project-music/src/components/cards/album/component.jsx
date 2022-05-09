import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

function AlbumCard({ album }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={album.image}
        alt="Cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {album.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {album.authors[0].name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlbumCard
