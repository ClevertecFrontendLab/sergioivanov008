import React from 'react';
import './loader.css';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { toggleBodyNotScrollable } from '@utils/utils';

export const Loader: React.FC = () => {
    const isLoaderVisible = useAppSelector(state => state.loaders.isLoaderVisible);
    const loaderClass = `loader ${isLoaderVisible ? 'show' : ''}`;

    toggleBodyNotScrollable(isLoaderVisible);

    return (
        <div className={loaderClass}>
            <div className="loader-element">
                loading
            </div>
        </div>
    );
};
