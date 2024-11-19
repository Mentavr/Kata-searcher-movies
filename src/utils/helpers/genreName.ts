import { useContextState } from '../hooks/useContextState';

export const genreName = (idGenres: number) => {
  const { allGenres } = useContextState();
  const genres = allGenres.filter(({ id }) => {
    return idGenres === id;
  });
  return genres[0].name;
};
