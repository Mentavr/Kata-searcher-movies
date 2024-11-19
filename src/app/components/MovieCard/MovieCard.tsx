import { PAGE } from '../../../constant/constant';
import { formatDate } from '../../../utils/helpers/formateDate';
import { Genres } from './components/Genres';
import { Rating } from './components/Rating';
import { Stars } from './components/Stars';

interface MovieCardProps {
  title: string;
  poster: string;
  date: string;
  description: string;
  rating: number;
  genres: number[];
  id: number;
  pageName?: 'rated';
  vote: number;
}

export const MovieCard = ({ title, poster, date, description, rating, genres, id, vote, pageName }: MovieCardProps) => {
  const url = `https://image.tmdb.org/t/p/w500${poster}`;
  const urlImg = poster ? url : './src/assets/images/poster.jpg';

  const format = formatDate(date);

  return (
    <div className="flex w-full gap-[20px] p-[9px] items-start shadow-[0_4px_12px_0_rgba(0,_0,_0,_0.15)]">
      <img
        className="hidden xl:block lx:flex gap-[10px] w-[clamp(3.75rem,1.25rem+11.11vw,11.25rem)] object-contain "
        src={urlImg}
        alt="Poster"
      />
      <div className="flex lx:max-w-[228px] w-full flex-col gap-[10px] h-full flex-row">
        <div className="flex items-start gap-[13px]">
          <img
            className="w-[clamp(3.75rem,1.25rem+11.11vw,11.25rem)] object-contain xl:hidden "
            src={urlImg}
            alt="Poster"
          />
          <div>
            <div className="flex justify-between lx:gap-[10px]">
              <h3 className="text-wrap text-[20px] leading-1">{title}</h3>
              <Rating rating={pageName === PAGE.RATED ? rating : vote} />
            </div>
            <span className="text-[12px] leading-5 text-[#827e7e] mb-[7px] inline-block">{format}</span>
            <Genres genres={genres} />
          </div>
        </div>
        <article className="text-ellipsis lx:max-w-[228px] max-h-[129px]  ">
          <span className="text-[12px] lx:leading-5 line-clamp-6">{description}</span>
        </article>
        <Stars rating={rating} id={id} pageName={pageName} />
      </div>
    </div>
  );
};
