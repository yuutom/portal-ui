import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KishiList from './pages/KishiList';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'preline'
import Layout from './componets/Layout';

async function loadPreline() {
  return import('preline/dist/index.js');
}

export default function Example() {
  const location = useLocation();

  useEffect(() => {
    const initPreline = async () => {
      await loadPreline();

      if (
        window.HSStaticMethods &&
        typeof window.HSStaticMethods.autoInit === 'function'
      ) {
        window.HSStaticMethods.autoInit();
      }
    };

    initPreline();
  }, [location.pathname]);

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kishiList" element={<KishiList />} />
        </Route>
      </Routes>
  )
}
