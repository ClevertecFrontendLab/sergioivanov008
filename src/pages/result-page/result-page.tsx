import React from 'react';

import './result-page.css';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';


export const ResultPage: React.FC = () => {
    const isRegistrationOk = useAppSelector(state => state.apiRegistration.isRegistrationOk);
    const isRegistrationError409 = useAppSelector(state => state.apiRegistration.isRegistrationError409);
    const isRegistrationError = useAppSelector(state => state.apiRegistration.isRegistrationError);

    const params = useParams();
    console.log('isRegistrationOk: ', isRegistrationOk, 'isRegistrationError409: ',
        isRegistrationError409, 'isRegistrationError: ', isRegistrationError, 'params: ', params)

    return (
        <div className='auth-page'>
            <div className="cover-element">
                result-page
            </div>
        </div>
    );
};
