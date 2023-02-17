import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { BookPage } from '../../pages/book';
import { Layout } from '../../pages/main/layout';
import { LibraryContent } from '../../pages/main/library-content';
import { Oferta } from '../../pages/oferta';
import { Rules } from '../../pages/rules';
import { getBooksFetch } from '../../redux/slices/books-slice';
import { getCategoriesFetch } from '../../redux/slices/categories-slice';
import { ErrorLoader } from '../error-loader';
import { Loader } from '../loader';

import './app.css';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoriesFetch());
        dispatch(getBooksFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
    <div className='app'>
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
        <Loader />
        <ErrorLoader />
    </div>
);
}
