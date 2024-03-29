import { configureStore } from '@reduxjs/toolkit';
import { asideReducer } from './slices/aside-slice';
import { authReducer } from './slices/auth-slice';
import { loadersReducer } from './slices/loaders-slice';
import { apiRegistrationReducer } from './slices/api-registration-slice';
import { apiForgotPassReducer } from './slices/api-forgot-pass-slice';
import { apiConfirmPassReducer } from './slices/api-confirm-pass-slice';
import { feedbacksReducer } from './slices/feedbacks-slice';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas/sagas';

const {
    createReduxHistory,
    routerMiddleware,
    routerReducer
  } = createReduxHistoryContext({ history: createBrowserHistory() });

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        aside: asideReducer,
        auth: authReducer,
        loaders: loadersReducer,
        router: routerReducer,
        apiRegistration: apiRegistrationReducer,
        apiForgotPass: apiForgotPassReducer,
        apiConfirmPass: apiConfirmPassReducer,
        feedbacks: feedbacksReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware).concat(saga),
});

saga.run(rootSaga);

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
