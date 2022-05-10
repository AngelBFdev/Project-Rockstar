import React, { FC, useEffect, useState } from 'react'
import { getAlbumById } from '../../services/api/album/album';

function AlbumView() {
  const [Album,setAlbum] = useState<any>(undefined);
  useEffect(()=>{
    const loadAlbum = async ()=>{
      const Album = await getAlbumById(1);
      setAlbum(Album);
    };
    loadAlbum();
  },[]);
  return (
    <>
    <div>{Album?.name}</div>
    {console.log()}
    </>
  )
}

export default AlbumView
