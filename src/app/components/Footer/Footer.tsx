import { PagePagination } from '../Pagination/Pagination';

interface FooterProps {
  pageName: 'search' | 'rated';
}

export const Footer = ({ pageName }: FooterProps) => {
  return (
    <footer className="mt-auto">
      <PagePagination pageName={pageName} />
    </footer>
  );
};
