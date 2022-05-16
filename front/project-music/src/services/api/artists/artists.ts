export const getArtists = async () => {
  try{
    const response = await fetch(`http://3.218.67.164:9004/music/artist/`);
    if(response.status!== 200) return;

    const artist = await response.json();
    return artist;
  }catch(e){
    console.error(e);
  }
};
