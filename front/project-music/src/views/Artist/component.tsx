import { Box, CardMedia } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAlbumById } from '../../services/api/album/album';
import { getAlbumSongs } from '../../services/api/album/albumsongs';
import { getArtistById } from '../../services/api/artists/artist';
import { getArtistAlbums } from '../../services/api/artists/artistalbums';

function ArtistView() {
  const { id } = useParams<string>();
  const [Album, setAlbum] = useState<any>("");
  const [Artist, setArtist] = useState<any>(undefined);

  useEffect(() => {
    const loadArtist = async () => {
      const artist = await getArtistById(id!);
      setArtist(artist);
    };
    loadArtist();
  }, []);

  useEffect(() => {
    const loadAlbum = async () => {
      const album = await getArtistAlbums(Artist.id);
      setAlbum(album);
    };
    loadAlbum();
  }, [Artist]);

  return (
    <>
      <Link to={'/'}>Go Back</Link>
      <div>{Artist?.name}</div>
      <CardMedia
        component="img"
        height="300"
        width="30"
        image={Artist?.image}
        alt="Cover"
      />
      <Box>Songs</Box>
      <Box sx={{ display: 'flex' }}>
        {Album!==undefined ? (
          <>
          {Object.values(Album).map((album:any) => (
            <>
            <Box>{album.name}</Box>
            <Box> Price: ${album.price}</Box>
            </>
          ))}
          </>
        ):null}
      </Box>
    </>
  )
}

export default ArtistView
