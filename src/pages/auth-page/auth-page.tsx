import React from 'react';

import './auth-page.css';
import { useLocation } from 'react-router-dom';

export const AuthPage: React.FC = () => {
    const location = useLocation();
    console.log('location: ', location)

    return (
        <div className='auth-page'>
            <div className="auth-page__form">
                {location.pathname}
            </div>
        </div>
    );
};
