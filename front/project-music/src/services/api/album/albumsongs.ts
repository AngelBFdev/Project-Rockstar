export const getAlbumSongs = async (id:number) => {
  try{
    const response = await fetch(`http://3.218.67.164:9004/music/albumsongs`,{
      method:'POST',
      body:JSON.stringify({'id':id}),
      headers:{'Content-type':'application/json'}
    });
    if(response.status!== 200) return;

    const album = await response.json();
    return album;
  }catch(e){
    console.error(e);
  }
};
