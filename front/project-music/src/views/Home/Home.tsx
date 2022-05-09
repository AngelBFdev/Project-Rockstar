import React, { useEffect, useState } from 'react'
import AlbumCard from '../../components/cards/album/component'
import { getAlbums } from '../../services/api/album';
import { Box } from '@mui/material';
import { AlbumProps } from './types';

function Home() {
  const [Album,setAlbum] = useState<any>(undefined);
  useEffect(()=>{
    const loadAlbums = async ()=>{
      const Albums = await getAlbums();
      setAlbum(Albums);
    };
    loadAlbums();
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
    </>
  )
}

export default Home
