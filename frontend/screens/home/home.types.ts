export type MovieList = {
  title: string;
  movies: Movie[];
  type: 'small' | 'medium' | 'large';
};

export type Movie = {
  name_src: string;
  name: string;
  description: string;
  released: string;
  time: string;
  genres: string[];
};
