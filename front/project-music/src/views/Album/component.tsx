import { Box, CardMedia } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAlbumById } from '../../services/api/album/album';
import { getAlbumSongs } from '../../services/api/album/albumsongs';
import { getArtistById } from '../../services/api/artists/artist';
import { AlbumProps } from './types';

function AlbumView() {
  const { id } = useParams<string>();
  const [Album, setAlbum] = useState<any>("");
  const [Artist, setArtist] = useState<any>(undefined);
  const [Songs, setSongs] = useState<any>(undefined);
  useEffect(() => {
    const loadAlbum = async () => {
      const album = await getAlbumById(id!);
      setAlbum(album);
    };
    loadAlbum();
  }, []);

  useEffect(() => {
    const loadArtist = async () => {
      const artist = await getArtistById(Album.author);
      setArtist(artist);
    };
    loadArtist();
  }, [Album]);
  useEffect(() => {
    const loadSongs = async () => {
      const Songs = await getAlbumSongs(Album.id);
      setSongs(Songs);
    };
    loadSongs();
  }, [Album]);
  const {name, price, image, genre, release_date} = Album

  return (
    <>
      <Link to={'/'}>Go Back</Link>
      <div>{name}</div>
      <div>{price}</div>
      <CardMedia
        component="img"
        height="300"
        width="30"
        image={image}
        alt="Cover"
      />
      <div>{genre}</div>
      <div>{release_date}</div>
      <div>{Artist?.name}</div>
      <Box>Songs</Box>
      <Box sx={{ display: 'flex' }}>
        {Songs!==undefined ? (
          <>
          {Object.values(Songs).map((song:any) => (
            <Box>{song.name}</Box>
          ))}
          </>
        ):null}
      </Box>
    </>
  )
}

export default AlbumView
