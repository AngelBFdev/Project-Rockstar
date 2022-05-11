import React, { useEffect, useState } from 'react'
import AlbumCard from '../../components/cards/album/component'
import { getAlbums } from '../../services/api/album/albums';
import { Box, Typography } from '@mui/material';
import { AlbumProps, ArtistProps } from './types';
import { getArtist } from '../../services/api/artist';
import ArtistCard from '../../components/cards/artist/component';

function HomeView() {
  const [Album, setAlbum] = useState<any>(undefined);
  const [Artist, setArtist] = useState<any>(undefined);
  useEffect(() => {
    const loadAlbums = async () => {
      const Albums = await getAlbums();
      setAlbum(Albums);
    };
    loadAlbums();
  }, []);

  useEffect(() => {
    const loadArtist = async () => {
      const Artist = await getArtist();
      setArtist(Artist);
    };
    loadArtist();
  }, []);
  return (
    <>
      <Typography variant="h3" component="div" gutterBottom>
        Albums
      </Typography>
      <Box sx={{ display: 'flex' }}>
        {Album?.map((album: AlbumProps) => (
          <AlbumCard
            {...album}
          />
        ))}
      </Box>
      <Typography variant="h3" component="div" gutterBottom>
        Artists
      </Typography>
      <Box sx={{ display: 'flex' }}>
        {Artist?.map((artist: ArtistProps) => (
          <ArtistCard
            {...artist}
          />
        ))}
      </Box>
    </>
  )
}

export default HomeView
