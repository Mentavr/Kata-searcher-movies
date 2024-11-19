import { useState, useEffect } from 'react';
import { Layout } from './components/Layout/Layout';
import { Unauthorized } from './components/Unauthorized/Unauthorized';
import { setupInterceptors } from '../config/apiConfig';

function App() {
  const [isUnauthorized, setIsUnauthorized] = useState<boolean>(false);

  useEffect(() => {
    setupInterceptors(setIsUnauthorized);
  }, []);

  return isUnauthorized ? (
    <Unauthorized />
  ) : (
    <div className="w-svw lg: min-h-svh max-w-[1440px] bg-[#d9d9d9]">
      <div className="w-70 bg-[#fff] mx-auto px-[36px] ">
        <Layout />
      </div>
    </div>
  );
}

export default App;
