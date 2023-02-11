import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { BookPage } from './pages/book';
import { Layout } from './pages/main/layout';
import { LibraryContent } from './pages/main/library-content';
import { Oferta } from './pages/oferta';
import { Rules } from './pages/rules';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<LibraryContent />} />
            <Route path='/rules' element={<Rules />} />
            <Route path='/oferta' element={<Oferta />} />
            <Route path='/books/:category' element={<LibraryContent />} />
        </Route>
        <Route path='/book/:category/:id' element={<BookPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
