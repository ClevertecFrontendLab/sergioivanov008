import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import { RootLayout } from '~/components';
import { Main } from '~/pages';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
