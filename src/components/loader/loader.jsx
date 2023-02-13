import { useSelector } from 'react-redux';

import { toggleBodyNotScrollable } from '../../functions/toggle-body-not-scrollable';

import './loader.css';

export const Loader = () => {
    const isLoaderVisible = useSelector(state => state.loaders.isLoaderVisible);

    toggleBodyNotScrollable(isLoaderVisible);
    
    const loaderStyle = isLoaderVisible ? 'loader show' : 'loader';

    return (
        <div className={loaderStyle}>
            <div className='loader-image' />
        </div>
    );
}
