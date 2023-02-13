import { useDispatch, useSelector } from 'react-redux';

import { TOAST_MESSAGE } from '../../constants/constants';
import { toggleErrorLoader } from '../../redux/slices/loaders-slice';

import './error-loader.css';

export const ErrorLoader = () => {
    const dispatch = useDispatch();
    
    const isErrorLoaderVisible = useSelector(state => state.loaders.isErrorLoaderVisible);

    const curView = isErrorLoaderVisible ? 'error-loader' : 'error-loader close';

    const errorLoaderClose = () => dispatch(toggleErrorLoader(false))

    return (
        <div className={curView}>
            <div className='error-content'>
                <div className='error-wrapper'>
                    <div className='error-warning' />
                    <div className='error-message'>{TOAST_MESSAGE}</div>
                </div>
                <div
                    className='error-close'
                    onClick={errorLoaderClose}
                    role='presentation' />
            </div>
        </div>
    );
}
