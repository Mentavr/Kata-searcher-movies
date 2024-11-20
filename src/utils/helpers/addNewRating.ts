import { StateMoviesInfo } from '../../context/types';

export const addNewRating = (movie: StateMoviesInfo) => {
  const ratingsString = localStorage.getItem('ratings');
  const ratings = ratingsString ? JSON.parse(ratingsString) : [];
  const filterRatings = ratings.filter((rating: { id: number; ratings: number }) => rating.id === movie.id);
  if (filterRatings.length) {
    return { ...movie, ratings: filterRatings[0].ratings };
  }
  return movie;
};
