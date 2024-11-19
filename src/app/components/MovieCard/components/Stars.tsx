import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { apiMovieList } from '../../../../api/movie-list/apiMovieList';
import { PAGE } from '../../../../constant/constant';

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
  const [ratingUser, setRating] = useState<number>(0);

  const { addRatingMovies } = apiMovieList();

  const fetchAddRating = async (id: number, rating: number) => {
    try {
      await addRatingMovies({ id, rating });
    } catch (e) {
      console.log(e);
    }
  };

  const handlerChange = (rating: number) => {
    setRating(rating);
    fetchAddRating(id, rating);
  };

  return (
    <div className="flex justify-end lg:max-h-[46px] mt-auto lg:justify-start items-center">
      <StarRatings
        rating={pageName === PAGE.RATED ? rating : ratingUser}
        starRatedColor="yellow"
        numberOfStars={10}
        starDimension="15px"
        starSpacing="3px"
        changeRating={pageName === PAGE.RATED ? undefined : handlerChange}
      />
    </div>
  );
};
