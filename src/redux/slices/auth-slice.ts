import { TOKEN } from '@constants/constants';
import { createSlice } from '@reduxjs/toolkit'
import { ChangePassData, LoginRegistrationData } from '../../types/types';

export type AuthState = {
    isAuth: boolean,
    email: string,
    isEmailValid: boolean,
    password: string,
    isPasswordValid: boolean,
    confirmPassword: string,
    isConfirmPasswordValid: boolean,
    rememberMe: boolean,
    canResultPage: boolean,
    loginData: null | LoginRegistrationData,
    changePassData: null | ChangePassData,
    emailForgot: string,
};

const initialState: AuthState = {
    isAuth: localStorage.getItem(TOKEN) !== null,
    email: '',
    isEmailValid: false,
    password: '',
    isPasswordValid: false,
    confirmPassword: '',
    isConfirmPasswordValid: false,
    rememberMe: true,
    canResultPage: false,
    loginData: null,
    changePassData: null,
    emailForgot: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        },
        resetRegData(state) {
            state.email = '';
            state.isEmailValid = false;
            state.password = '';
            state.isPasswordValid = false;
            state.confirmPassword = '';
            state.isConfirmPasswordValid = false;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
        setIsEmailValid(state, action) {
            state.isEmailValid = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setIsPasswordValid(state, action) {
            state.isPasswordValid = action.payload;
        },
        setConfirmPassword(state, action) {
            state.confirmPassword = action.payload;
        },
        setIsConfirmPasswordValid(state, action) {
            state.isConfirmPasswordValid = action.payload;
        },
        setRememberMe(state, action) {
            state.rememberMe = action.payload;
        },
        setCanResultPage(state, action) {
            state.canResultPage = action.payload;
        },
        startLogin(state, action) {
            state.loginData = action.payload;
        },
        resetLoginData(state) {
            state.loginData = null;
        },
        startChangePass(state, action) {
            state.changePassData = action.payload;
        },
        setEmailForgot(state, action) {
            state.emailForgot = action.payload;
            state.changePassData = null;
        }
    }
});

export const { reducer: authReducer, actions: authActions } = authSlice;

