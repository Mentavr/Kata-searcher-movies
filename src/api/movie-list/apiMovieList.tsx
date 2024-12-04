import { clientAxios } from '../../config/apiConfig';
import { useContextState } from '../../utils/hooks/useContextState';
import { RatingMoviesType } from './types';
import Cookies from 'js-cookie';

export const apiMovieList = () => {
  const { setLoaded } = useContextState();
  const guestSessionId = Cookies.get('guestSessionId');

  const getGenres = async () => {
    try {
      const response = await clientAxios('/3/genre/movie/list');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const addRatingMovies = async ({ id, rating }: RatingMoviesType) => {
    try {
      const response = await clientAxios(`/3/movie/${id}/rating`, {
        method: 'post',
        data: {
          value: rating,
        },
        params: {
          guest_session_id: guestSessionId
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getRatedMovies = async (page: number) => {
    setLoaded(true);
    try {
      const response = await clientAxios(`/3/guest_session/${guestSessionId}/rated/movies`,{
        params: {
          page: page,
        }
      });
      return response.data.results;
    } catch (error) {
      throw error;
    } finally {
      setLoaded(false);
    }
  };

  return { getGenres, addRatingMovies, getRatedMovies };
};
