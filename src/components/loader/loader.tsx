import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../assets/lottie/lottie-loader.json';
import './loader.css';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { toggleBodyNotScrollable } from '@utils/utils';

export const Loader: React.FC = () => {
    const isLoaderVisible = useAppSelector(state => state.loaders.isLoaderVisible);
    const loaderClass = `loader ${isLoaderVisible ? 'show' : ''}`;

    toggleBodyNotScrollable(isLoaderVisible);

    return (
        <div className={loaderClass}>
            <Lottie
                loop
                animationData={lottieJson}
                play
                className={'loader-element'}
            />
        </div>
    );
};