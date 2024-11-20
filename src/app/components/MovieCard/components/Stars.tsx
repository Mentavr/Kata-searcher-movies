import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { apiMovieList } from '../../../../api/movie-list/apiMovieList';
import { PAGE } from '../../../../constant/constant';
import { addRatingsToLocalStorage } from '../../../../utils/helpers/addRatingsToLocalStorage';
import { getRatingLocalStorage } from '../../../../utils/helpers/getRatingLocalStorage';
import { useContextState } from '../../../../utils/hooks/useContextState';

interface IStars {
  id: number;
}

interface StarsProps extends IStars {
  rating?: number;
  numberOfStars?: number;
  changeRating?: (rating: number) => void;
  starRatedColor?: string;
  starEmptyColor?: string;
  starHoverColor?: string;
  starDimension?: string;
  starSpacing?: string;
  gradientPathName?: string;
  ignoreInlineStyles?: boolean;
  svgIconPath?: string;
  svgIconViewBox?: string;
  name?: string;
  pageName?: 'rated';
}

export const Stars = ({ rating, id, pageName }: StarsProps) => {
  const [initialRating, setInitialRating] = useState<number>(0);
  const { setRatingMoviesUser } = useContextState();

  const { addRatingMovies } = apiMovieList();

  const fetchAddRating = async (id: number, rating: number) => {
    try {
      await addRatingMovies({ id, rating });
      setRatingMoviesUser({ id: id, rating: rating });
    } catch (e) {
      console.log(e);
    }
  };

  const handlerChange = (rating: number) => {
    setInitialRating(rating);
    addRatingsToLocalStorage(id, rating);
    fetchAddRating(id, rating);
  };

  const newRating = getRatingLocalStorage(id);
  const ratingUser = !!newRating.length ? newRating[0].rating : initialRating;
  return (
    <div className="flex justify-end lg:max-h-[46px] mt-auto lg:justify-start items-center">
      <StarRatings
        rating={pageName === PAGE.RATED ? rating : ratingUser}
        starRatedColor="yellow"
        numberOfStars={10}
        starDimension="15px"
        starSpacing="3px"
        changeRating={pageName === PAGE.RATED || !!newRating.length ? undefined : handlerChange}
      />
    </div>
  );
};
