import { useEffect } from 'react';
import { colorRating } from '../../../../utils/helpers/colorReting';
import { getRatingLocalStorage } from '../../../../utils/helpers/getRatingLocalStorage';
import { mathDecimal } from '../../../../utils/helpers/mathDecimal';
import { useContextState } from '../../../../utils/hooks/useContextState';

interface RatingProps {
  rating: number;
  id: number;
}
export const Rating = ({ rating, id }: RatingProps) => {
  const { ratingMoviesUser } = useContextState();
  const newRating = getRatingLocalStorage(id);
  const color = colorRating(mathDecimal(!!newRating.length ? newRating[0].rating : rating));
  const borderColor = { borderColor: color };
  let initialRating = !!newRating.length ? newRating[0].rating : rating;

  useEffect(() => {
    initialRating = ratingMoviesUser.id === id ? ratingMoviesUser.rating : initialRating;
  }, [ratingMoviesUser]);

  return (
    <div
      className={`flex justify-center items-center lg: max-w-[30px] h-[30px] rounded-full border-2  px-[6px] py-[8px] text-[12px] w-full`}
      style={borderColor}
    >
      <span>{mathDecimal(initialRating)}</span>
    </div>
  );
};
