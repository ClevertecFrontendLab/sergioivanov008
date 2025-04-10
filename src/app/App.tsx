import { BrowserRouter, Route, Routes } from 'react-router';

import { RootLayout } from '~/components';
import { MainPage, Page } from '~/pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path='/:categoryId/:categoryItemId?' element={<Page />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
