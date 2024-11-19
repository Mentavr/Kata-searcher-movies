import { Pagination } from 'antd';
import { useContextState } from '../../../utils/hooks/useContextState';
import { useContextRatedState } from '../../../utils/hooks/useContextRatedState';
import { apiMovieList } from '../../../api/movie-list/apiMovieList';

interface PagePaginationProps {
  pageName: 'search' | 'rated';
}

export const PagePagination = ({ pageName }: PagePaginationProps) => {
  const { page: pageContextState, setPage: setPageContextState, getMoviesInfo } = useContextState();
  const {
    page: pageContextRatedState,
    setPage: setPageContextRatedState,
    getMoviesRatedInfo,
    setStateRatedMovies,
  } = useContextRatedState();
  const { getRatedMovies } = apiMovieList();
  const moviesInfo = pageName === 'search' ? getMoviesInfo() : getMoviesRatedInfo();

  const fetchRatedMovies = async (page: number) => {
    try {
      const data = await getRatedMovies(page);
      setStateRatedMovies(data);
    } catch (e) {
      throw new Error('Ошибка гостевого id');
    }
  };

  const handlerPage = (page: number) => {
    pageName === 'search' ? setPageContextState(page) : setPageContextRatedState(page);
    pageName === 'rated' && fetchRatedMovies(page);
    window.scroll(0, 0);
  };

  return (
    <div className="flex justify-center items-center mt-[36px] mb-[17px]">
      <Pagination
        disabled={
          (moviesInfo.length === 0 && pageContextState === 1) ||
          (moviesInfo.length === 0 && pageContextRatedState === 1)
        }
        current={pageName === 'search' ? pageContextState : pageContextRatedState}
        total={50}
        onChange={handlerPage}
      />
    </div>
  );
};
