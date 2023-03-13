import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { SMALL_MENU } from '../../../constants/constants';
import { setIsAuth } from '../../../redux/slices/api-auth-slice';
import { toggleOpenSmallMenu } from '../../../redux/slices/menu-slice';

import './small-menu.css';

export const SmallMenu = () => {
    const dispatch = useDispatch();

    const handlerExit = () => {
        dispatch(toggleOpenSmallMenu(false));
        dispatch(setIsAuth(false));

        localStorage.removeItem('cleverToken');

        return <Navigate to='/auth' />
    }

    return (
        <div className='small-menu'>
            <div className='small-menu__item'>
                {SMALL_MENU.textItem_profile}
            </div>
            <div className='small-menu__item' onClick={handlerExit} role='presentation'>
                {SMALL_MENU.textItem_exit}
            </div>
        </div>
    );
}
