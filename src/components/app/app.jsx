import { useSelector } from 'react-redux';
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

export const App = () => {
    const isAuth = useSelector(state => state.apiAuth.isAuth);

    return (
    <div className='app'>
        <HashRouter>
            <Routes>
                <Route path='/' element={isAuth ? <Navigate to='/books/all' /> : <Navigate to='/auth' />} />
                <Route path='/auth' element={isAuth ? <Navigate to='/books/all' /> : <Authorization />} />
                <Route path='/registration' element={isAuth ? <Navigate to='/books/all' /> : <Registration />} />
                <Route path='/forgot-pass' element={isAuth ? <Navigate to='/books/all' /> : <ForgotPass />} />
                <Route element={<PrivateRouter />} >
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
            </Routes>
        </HashRouter>
        <Loader />
        <ErrorLoader />
    </div>
);
}
