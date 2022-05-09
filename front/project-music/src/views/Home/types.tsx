interface AuthorsProps{
  name:string;
}

export interface AlbumProps {
  image: string;
  name: string;
  price: number;
  authors: Array<AuthorsProps>;
  genre: string;
  release_date: string;
}
export interface ArtistProps {
  image: string;
  name: string;
  nationality: string;
}
