import React, { useEffect, useState } from 'react'
import AlbumCard from '../components/cards/album/component'
import { getAlbums } from '../services/api/album';
import axios from 'axios';
import { Box } from '@mui/material';

function Home() {
  const [Album,setAlbum] = useState<any>(undefined);
  useEffect(()=>{
    const loadAlbums = async ()=>{
      const Albums = await getAlbums();
      setAlbum(Albums);
    };
    loadAlbums();
  },[]);

  // useEffect(()=>{
  //   async function fetchAlbums(){
  //     const {data} = await axios.get('http://3.218.67.164:9004/music/album/')
  //     setAlbum(data)
  //   }
  //   fetchAlbums()
  // },[])
  return (
    <>
      <div>Albums</div>
      <Box sx={{ display: 'flex' }}>
      {Album?.map((album:any)=>(
        <AlbumCard
          album={album}
        />
      ))}
      </Box>
    </>
  )
}

export default Home
