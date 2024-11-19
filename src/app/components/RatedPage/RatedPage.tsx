import { useContextRatedState } from '../../../utils/hooks/useContextRatedState';
import { MovieCards } from '../MovieCards/MovieCards';

interface RatedPageProps {
  pageName: 'rated';
}

export const RatedPage = ({ pageName }: RatedPageProps) => {
  const { getMoviesRatedInfo } = useContextRatedState();
  const info = getMoviesRatedInfo();
  console.log('info RatedPage', info);

  return (
    <section className="">
      <MovieCards moviesInfo={info} pageName={pageName} />
    </section>
  );
};
