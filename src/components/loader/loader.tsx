import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/lottie/lottie-loader.json';
import './loader.css';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { toggleBodyNotScrollable } from '@utils/utils';
import { isLoaderVisibleSelector } from '@redux/sagas/selectors';

export const Loader: React.FC = () => {
    const isLoaderVisible = useAppSelector(isLoaderVisibleSelector);

    toggleBodyNotScrollable(isLoaderVisible);

    const losderStyle = `loader ${isLoaderVisible ? 'show' : ''}`;

    return (
        <div className={losderStyle} data-test-id='loader'>
            <Lottie
                loop
                animationData={lottieJson}
                play
                className={'loader-element'}
            />
        </div>
    );
};
