import { genreName } from '../../../../utils/helpers/genreName';

interface IGenre {
  id: number;
}

export const Genre = ({ id }: IGenre) => {
  return (
    <div className="flex justify-center items-center px-[4.5px] py-[2.5px] border-[1px] rounded-[2px] border-[#d9d9d9] bg-[#fafafa] w-max">
      <span className="text-[12px] text-[rgba(0, 0, 0, 0.65)]">{genreName(id)}</span>
    </div>
  );
};
