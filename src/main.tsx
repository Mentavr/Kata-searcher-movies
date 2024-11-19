import { createRoot } from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './app/App.tsx';
import { StateProvider } from './context/StateProvider.tsx';
import { ToastContainer } from 'react-toastify';
import { StateRatedProvider } from './context/StateRatedProvider.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>

  <StateProvider>
    <StateRatedProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </StateRatedProvider>
  </StateProvider>
  // </StrictMode>
);
