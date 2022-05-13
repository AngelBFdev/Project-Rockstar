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

const ArtistCard: FC<ArtistCardProps> = ({ image, name }) => {
  const styles: Styles = {
    card: {
      marginRight: "3rem",
      maxWidth: 300,
    },
  };
  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt= "Cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ArtistCard
