export const getSongs = async () => {
  try{
    const response = await fetch(`http://3.218.67.164:9004/music/song/`);
    if(response.status!== 200) return;

    const songs = await response.json();
    return songs;
  }catch(e){
    console.error(e);
  }
};
