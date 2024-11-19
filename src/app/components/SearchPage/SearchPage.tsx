import { useContextState } from '../../../utils/hooks/useContextState';
import { MovieCards } from '../MovieCards/MovieCards';
import { Searcher } from '../Searcher/Searcher';

export const SearchPage = () => {
  const { getMoviesInfo } = useContextState();
  const info = getMoviesInfo();
  return (
    <section>
      <Searcher />
      <MovieCards moviesInfo={info} />
    </section>
  );
};
