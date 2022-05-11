import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { AlbumCardProps } from './types';
import { Link } from 'react-router-dom';

const AlbumCard: FC<AlbumCardProps> = ({ id,image,name,authors,price,genre })=> {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to ={`/album/${id}`}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="Cover"
        />
      </Link>
      <CardContent>
        <Link to ={`/album/${id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </Link>
        <Typography variant="body1" color="text.secondary">
          ${price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {authors[0].name} - {genre}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlbumCard
