import React from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';
import './index.css';
import { App } from './app';
import { Provider } from 'react-redux';
import { store } from '@redux/configure-store';
import { Loader } from '@components/loader';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <Loader />
        </Provider>
    </React.StrictMode>,
);
