import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { HashRouter, Navigate, Outlet,Route, Routes } from 'react-router-dom';

import { BookPage } from '../../pages/book';
import { Layout } from '../../pages/main/layout';
import { LibraryContent } from '../../pages/main/library-content';
import { Oferta } from '../../pages/oferta';
import { Rules } from '../../pages/rules';
import { getBooksFetch } from '../../redux/slices/books-slice';
import { getCategoriesFetch } from '../../redux/slices/categories-slice';
import { Authorization } from '../authorization';
import { ForgotPass } from '../authorization/forgot-pass';
import { Registration } from '../authorization/registration';
import { ErrorLoader } from '../error-loader';
import { Loader } from '../loader';

import './app.css';

export const App = () => {
    const isRendered = useRef(false);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (isRendered.current === false) {
    //         isRendered.current = true;
    //         dispatch(getCategoriesFetch());
    //         dispatch(getBooksFetch());
    //     }
    // }, [dispatch, isRendered]);

    return (
    <div className='app'>
        <HashRouter>
            <Routes>
                {/* <Route path='/' element={<Authorization />} /> */}
                <Route path='/' element={<Navigate to='/auth' />} />
                <Route path='/auth' element={<Authorization />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/forgot-pass' element={<ForgotPass />} />
                {/* <Route path='/' element={<Layout />}>
                    <Route element={<Outlet />}>
                        <Route path='/' element={<Navigate to='/books/all' />} />
                        <Route path='/rules' element={<Rules />} />
                        <Route path='/oferta' element={<Oferta />} />
                        <Route path='/books/:category' element={<LibraryContent />} />
                    </Route>
                </Route> */}
              {/* <Route path='/books/:category/:id' element={<BookPage />} /> */}
            </Routes>
        </HashRouter>
        {/* <Loader />
        <ErrorLoader /> */}
    </div>
);
}
