import { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { SearchPage } from '../SearchPage/SearchPage';
import { RatedPage } from '../RatedPage/RatedPage';
import { Footer } from '../Footer/Footer';
import { apiGuestSession } from '../../../api/guest-session/apiGuestSession';
import Cookies from 'js-cookie';
import { PAGE } from '../../../constant/constant';
import { toast } from 'react-toastify';

export const Layout = () => {
  const [page, setPage] = useState<'search' | 'rated'>(PAGE.SEARCH);

  const { createGuestSession } = apiGuestSession();

  const fetchCreateGuestId = async () => {
    try {
      const data = await createGuestSession();
      Cookies.set('guestSessionId', `${data.guest_session_id}`, { expires: new Date(data.expires_at) });
    } catch (e) {
      toast.error('Проверте соединениее с интернетом');
      throw new Error('Ошибка гостевого id');
    }
  };

  useEffect(() => {
    const cookie = Cookies.get('guestSessionId');
    if (!cookie) {
      fetchCreateGuestId();
    }
  }, []);

  return (
    <div className="pt-[32px] min-h-svh flex flex-col">
      <Header pageName={page} setPage={setPage} />
      {page === PAGE.SEARCH ? <SearchPage /> : <RatedPage pageName={PAGE.RATED} />}
      <Footer pageName={page} />
    </div>
  );
};
