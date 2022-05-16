import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { ArtistCardProps } from './types';
import { Styles } from '../../../theme/types';
import { Link } from 'react-router-dom';

const ArtistCard: FC<ArtistCardProps> = ({ id, image, name }) => {
  const styles: Styles = {
    card: {
      marginRight: "3rem",
      maxWidth: 300,
    },
  };
  return (
    <Card sx={styles.card}>
      <Link to={`/artist/${id}`}>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="Cover"
        />
      </Link>
      <CardContent>
        <Link to={`/artist/${id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ArtistCard
