import { useAppDispatch } from '~/store/hooks';
import { mainActions } from '~/store/slices/main-slice';

export const useMenuClose = () => {
    const dispatch = useAppDispatch();

    const nandlerMenuClose = () => {
        dispatch(mainActions.setIsOpenBurger(false));
        document.body.classList.remove('not-scrolled');
    };

    return nandlerMenuClose;
};
