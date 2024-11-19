import { Genre } from './Genre';

interface GenresProps {
  genres: number[];
}

export const Genres = ({ genres }: GenresProps) => {
  return (
    <div className="flex flex-wrap gap-[8px] mb-[7px]">
      {genres.map((id, index) => {
        return <Genre id={id} key={index} />;
      })}
    </div>
  );
};
