import { HashRouter, Navigate, Outlet,Route, Routes } from 'react-router-dom';

import { BookPage } from '../../pages/book';
import { Layout } from '../../pages/main/layout';
import { LibraryContent } from '../../pages/main/library-content';
import { Oferta } from '../../pages/oferta';
import { Rules } from '../../pages/rules';
import { PrivateRouter } from '../../private-router';
import { Authorization } from '../authorization';
import { ForgotPass } from '../authorization/forgot-pass';
import { Registration } from '../authorization/registration';
import { ErrorLoader } from '../error-loader';
import { Loader } from '../loader';

import './app.css';

export const App = () => (
    <div className='app'>
        <HashRouter>
            <Routes>
                <Route element={<PrivateRouter />} >
                    <Route path='/auth' element={<Navigate to='/' />} />
                        <Route path='/' element={<Layout />}>
                            <Route element={<Outlet />}>
                                <Route path='/' element={<Navigate to='/books/all' />} />
                                <Route path='/rules' element={<Rules />} />
                                <Route path='/oferta' element={<Oferta />} />
                                <Route path='/books/:category' element={<LibraryContent />} />
                                <Route path='/auth' element={<Navigate to='/books/all' />} />
                                <Route path='/registration' element={<Navigate to='/books/all' />} />
                                <Route path='/forgot-pass' element={<Navigate to='/books/all' />} />
                            </Route>
                        </Route>
                    <Route path='/books/:category/:id' element={<BookPage />} />
                </Route>
                <Route path='/' element={<Navigate to='/auth' />} />
                <Route path='/auth' element={<Authorization />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/forgot-pass' element={<ForgotPass />} />
            </Routes>
        </HashRouter>
        <Loader />
        <ErrorLoader />
    </div>
);
