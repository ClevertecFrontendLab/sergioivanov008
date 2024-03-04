import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { FEEDBACK_TEXT, ROUTE } from '@constants/constants';
import { Button } from 'antd';
import { push } from 'redux-first-history';
import { FormItems } from '../../types/types';
import { IconWrong } from '@components/icon-wrong';
import { toggleBodyNotScrollable } from '@utils/utils';
import { feedbacksActions } from '@redux/slices/feedbacks-slice';

export const ModalFeedbacks: React.FC = () => {
    const dispatch = useAppDispatch();
    const showModalFeedbacks = useAppSelector(state => state.feedbacks.showModalFeedbacks);
    const isLoaderVisible = useAppSelector(state => state.loaders.isLoaderVisible);

    const curItem = showModalFeedbacks ? showModalFeedbacks as string : false;
    const isSetBodyNotScrollable = curItem ? true : false;

    useEffect(() => {
        if (!isLoaderVisible && isSetBodyNotScrollable) toggleBodyNotScrollable(true);
    }, [isLoaderVisible, isSetBodyNotScrollable])

    const formItems: FormItems = {
        'modal-wrong': {
            icon: <div className="result-icon"><IconWrong /></div>,
            title: <div className="result-text__title">Что-то пошло не так</div>,
            main: <div className="result-text__main custom12">Произошла ошибка, попробуйте ещё раз.</div>,
            btn: <Button
                    className='result-btn custom13'
                    type="primary"
                    onClick={() => {
                        dispatch(feedbacksActions.setShowModalFeedbacks(null));
                        dispatch(push(ROUTE.MAIN));
                        toggleBodyNotScrollable(false);
                    }}
                    data-test-id='check-back-button'
                >
                    {FEEDBACK_TEXT.BTN_BACK}
                </Button>
        },
    }

    return (curItem &&
        <div className="cover-element">
            <div className="form-result">
                {formItems[curItem].icon}
                <div className="result-text__wrapper">
                    {formItems[curItem].title}
                    {formItems[curItem].main}
                </div>
                {formItems[curItem].btn}
            </div>
        </div>
    );
};
