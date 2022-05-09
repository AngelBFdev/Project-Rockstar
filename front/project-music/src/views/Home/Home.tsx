import React, { useEffect, useState } from 'react'
import AlbumCard from '../../components/cards/album/component'
import { getAlbums } from '../../services/api/album';
import { Box } from '@mui/material';
import { AlbumProps, ArtistProps } from './types';
import { getArtist } from '../../services/api/artist';
import ArtistCard from '../../components/cards/artist/component';

function Home() {
  const [Album,setAlbum] = useState<any>(undefined);
  const [Artist,setArtist] = useState<any>(undefined);
  useEffect(()=>{
    const loadAlbums = async ()=>{
      const Albums = await getAlbums();
      setAlbum(Albums);
    };
    loadAlbums();
  },[]);

  useEffect(()=>{
    const loadArtist = async ()=>{
      const Artist = await getArtist();
      setArtist(Artist);
    };
    loadArtist();
  },[]);
  return (
    <>
      <div>Albums</div>
      <Box sx={{ display: 'flex' }}>
      {Album?.map((album:AlbumProps)=>(
        <AlbumCard
          {...album}
        />
      ))}
      </Box>
      <div>Artists</div>
      <Box sx={{ display: 'flex' }}>
      {Artist?.map((artist:ArtistProps)=>(
        <ArtistCard
          {...artist}
        />
      ))}
      </Box>
    </>
  )
}

export default Home
