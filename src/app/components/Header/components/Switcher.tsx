import { apiMovieList } from '../../../../api/movie-list/apiMovieList';
import { PAGE } from '../../../../constant/constant';
import { useContextRatedState } from '../../../../utils/hooks/useContextRatedState';
import { useContextState } from '../../../../utils/hooks/useContextState';

interface SwitcherProps {
  pageName: 'search' | 'rated';
  setPage: (e: 'search' | 'rated') => void;
}

export const Switcher = ({ pageName, setPage }: SwitcherProps) => {
  const { setPage: setPageContextState, setStateMovies, setEmptyMovies } = useContextState();
  const { getRatedMovies } = apiMovieList();
  const { page: pageRatedState, setPage: setPageRatedState, setStateRatedMovies } = useContextRatedState();

  const fetchRatedMovies = async (page: number) => {
    try {
      const data = await getRatedMovies(page);
      setStateRatedMovies(data);
    } catch (e) {
      console.log(e);
      setEmptyMovies(true);
      throw new Error('Ошибка гостевого id');
    }
  };

  const handlerSwitch = () => {
    setEmptyMovies(false);
    pageName === PAGE.SEARCH ? setPage('rated') : setPage(PAGE.SEARCH);
    pageName === PAGE.SEARCH && fetchRatedMovies(pageRatedState);
    setPageRatedState(1);
    setPageContextState(1);
    setStateMovies([]);
  };

  const translateClass = pageName === PAGE.SEARCH ? 'translate-x-0' : 'translate-x-[82px]';
  return (
    <button onClick={handlerSwitch} className="w-[146px] border-[0]">
      <div className="flex gap-[16px] justify-between items-center px-[10px]">
        <span className={`text-[14px] ${pageName === PAGE.SEARCH && 'text-[#1890ff]'}`}>Search</span>
        <span className={`text-[14px] ${pageName === 'rated' && 'text-[#1890ff]'}`}>Rated</span>
      </div>
      <div className="relative w-full h-[2px] bg-gray-200">
        <span
          className={`absolute left-[0] h-full w-[64px] bg-[#1890ff] transition-transform duration-300  ${translateClass}`}
        ></span>
      </div>
    </button>
  );
};
