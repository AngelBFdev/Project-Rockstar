import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAlbumById } from '../../services/api/album/album';

function AlbumView() {
  const { id } = useParams<string>();
  const [Album,setAlbum] = useState<any>(undefined);
  useEffect(()=>{
    const loadAlbum = async ()=>{
      const Album = await getAlbumById(id!);
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
