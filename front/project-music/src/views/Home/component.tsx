import React, { useEffect, useState } from 'react'
import AlbumCard from '../../components/cards/album/component'
import { getAlbums } from '../../services/api/album/albums';
import { Box, Typography } from '@mui/material';
import { AlbumProps, ArtistProps } from './types';
import { getArtists } from '../../services/api/artists/artists';
import ArtistCard from '../../components/cards/artist/component';
import { Styles } from '../../theme/types';

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
      const Artist = await getArtists();
      setArtist(Artist);
    };
    loadArtist();
  }, []);

  const styles: Styles = {
    body: {
      marginLeft: "3rem",
      marginTop: "1rem"
    },
    list:{
      display: "flex",
    },
  };

  return (
    <Box sx={styles.body}>
      {Album !== undefined ? (
        <>
          <Typography variant="h3" component="div" gutterBottom>
            Albums
          </Typography>
          <Box sx={styles.list}>
            {Album.map((album: AlbumProps) => (
              <AlbumCard
                {...album}
              />
            ))}
          </Box>
        </>
      ) : null}
      <Typography variant="h3" component="div" gutterBottom>
        Artists
      </Typography>
      <Box sx={styles.list}>
        {Artist?.map((artist: ArtistProps) => (
          <ArtistCard
            {...artist}
          />
        ))}
      </Box>
    </Box>
  )
}

export default HomeView
