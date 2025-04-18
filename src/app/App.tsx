import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { RootLayout } from '~/components';
import { MainPage, Page, RecipePage } from '~/pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path='/:category/:subcategory?' element={<Page />} />
                    <Route path='/:category/:subcategory/:id' element={<RecipePage />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
