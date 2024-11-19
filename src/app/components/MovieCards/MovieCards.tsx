import { Skeleton } from 'antd';
import { useContextState } from '../../../utils/hooks/useContextState';
import { MovieCard } from '../MovieCard/MovieCard';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { NotFound } from '../SearchPage/components/NotFound';
import { StateMoviesInfo } from '../../../context/types';

interface MovieCardsProps {
  moviesInfo: StateMoviesInfo[];
  pageName?: 'rated';
}

export const MovieCards = ({ moviesInfo, pageName }: MovieCardsProps) => {
  const { isLoaded, isEmptyMovies } = useContextState();

  return isLoaded && moviesInfo.length === 0 ? (
    <div className="min-h-svh w-full flex justify-center items-center">
      <Spin indicator={<LoadingOutlined spin />} />
    </div>
  ) : (
    <div className="flex flex-col gap-[20px] lg:grid grid-cols-2 xl:gap-[36px]">
      {isEmptyMovies ? (
        <NotFound />
      ) : (
        moviesInfo.map(({ poster_path, title, release_date, overview, vote_average, genre_ids, rating, id }, index) => {
          return isLoaded && moviesInfo.length > 0 ? (
            <Skeleton.Node key={index} active style={{ width: '100%', height: '280px' }} />
          ) : (
            <MovieCard
              key={index}
              poster={poster_path}
              title={title}
              date={release_date}
              description={overview}
              vote={vote_average}
              rating={rating}
              genres={genre_ids}
              id={id}
              pageName={pageName}
            />
          );
        })
      )}
    </div>
  );
};
