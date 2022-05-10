export const getAlbums = async () => {
  try{
    const response = await fetch(`http://3.218.67.164:9004/music/album/`);
    if(response.status!== 200) return;

    const albums = await response.json();
    return albums;
  }catch(e){
    console.error(e);
  }
};
