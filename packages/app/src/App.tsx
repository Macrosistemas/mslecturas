import { Routes, useLocation } from 'react-router-dom';
import { Toaster } from './Aplication/Components/ui/sonner';
import { AnimatePresence } from 'framer-motion';

import './App.css';
import { AllRoutes } from './Infrastructure';
export const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {AllRoutes}
        </Routes>
      </AnimatePresence>
      <Toaster richColors />
    </>
  );
};
