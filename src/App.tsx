import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PATH } from './constants/path';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={PATH.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
