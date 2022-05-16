export const getAlbumById = async (id:any) => {
  try{
    const response = await fetch(`http://3.218.67.164:9004/music/album/${id}/`);
    if(response.status!== 200) return;

    const album = await response.json();
    return album;
  }catch(e){
    console.error(e);
  }
};
