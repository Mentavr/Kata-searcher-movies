import { colorRating } from '../../../../utils/helpers/colorReting';
import { mathDecimal } from '../../../../utils/helpers/mathDecimal';

interface RatingProps {
  rating: number;
}
export const Rating = ({ rating }: RatingProps) => {
  const color = colorRating(mathDecimal(rating));
  const borderColor = { borderColor: color };

  return (
    <div
      className={`flex justify-center items-center lg: max-w-[30px] h-[30px] rounded-full border-2  px-[6px] py-[8px] text-[12px] w-full`}
      style={borderColor}
    >
      <span>{mathDecimal(rating)}</span>
    </div>
  );
};
