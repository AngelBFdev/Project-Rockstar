interface AuthorsProps{
  name:string;
}

export interface AlbumProps {
  id: number;
  image: string;
  name: string;
  price: number;
  authors: Array<AuthorsProps>;
  genre: string;
  release_date: string;
}

export interface Params {
  id: string;
}
