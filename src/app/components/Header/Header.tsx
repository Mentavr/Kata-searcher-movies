import { Switcher } from './components/Switcher';

interface HeaderProps {
  pageName: 'search' | 'rated';
  setPage: (e: 'search' | 'rated') => void;
}
export const Header = ({ setPage, pageName }: HeaderProps) => {
  return (
    <div className="flex justify-center items-center mb-[20px]">
      <Switcher setPage={setPage} pageName={pageName} />
    </div>
  );
};
