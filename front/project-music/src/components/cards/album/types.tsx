interface AuthorsProps{
  name:string;
}

export interface AlbumCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
  author: AuthorsProps;
  genre: string;
  release_date: string;
}
