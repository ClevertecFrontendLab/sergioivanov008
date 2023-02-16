import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

// import { getCategories } from '../../api/get-categories';
import { BookPage } from '../../pages/book';
import { Layout } from '../../pages/main/layout';
import { LibraryContent } from '../../pages/main/library-content';
import { Oferta } from '../../pages/oferta';
import { Rules } from '../../pages/rules';
import { deleteBooks } from '../../redux/slices/books-slice';
import { deleteCategories, getCategoriesFetch } from '../../redux/slices/categories-slice';
import { toggleErrorLoader, toggleLoader } from '../../redux/slices/loaders-slice';
import { ErrorLoader } from '../error-loader';
import { Loader } from '../loader';

import './app.css';

export const App = () => {
    const dispatch = useDispatch();

    const canUseCategories = useSelector(state => state.categories.canUse);
    const canUseBooks = useSelector(state => state.books.canUse);

    const checkCategoriesooks = () => {
        if (!canUseCategories || !canUseBooks) {
        dispatch(toggleErrorLoader(true));
        dispatch(deleteCategories());
        dispatch(deleteBooks());
    }}

    useEffect(() => {
        dispatch(getCategoriesFetch());
    }, [dispatch]);

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
