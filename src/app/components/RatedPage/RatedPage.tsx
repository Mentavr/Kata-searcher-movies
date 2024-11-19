import { useContextRatedState } from '../../../utils/hooks/useContextRatedState';
import { MovieCards } from '../MovieCards/MovieCards';

interface RatedPageProps {
  pageName: 'rated';
}

export const RatedPage = ({ pageName }: RatedPageProps) => {
  const { getMoviesRatedInfo } = useContextRatedState();
  const info = getMoviesRatedInfo();

  return (
    <section className="">
      <MovieCards moviesInfo={info} pageName={pageName} />
    </section>
  );
};
