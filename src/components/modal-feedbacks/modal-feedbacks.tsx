import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { MODAL_FEEDBACKS, ROUTE } from '@constants/constants';
import { Button } from 'antd';
import { push } from 'redux-first-history';
import { FormItems } from '../../types/types';
import { IconWrong } from '@components/icon-wrong';
import { toggleBodyNotScrollable } from '@utils/utils';
import { feedbacksActions } from '@redux/slices/feedbacks-slice';
import { IconSuccess } from '@components/icon-success';
import { IconError } from '@components/icon-error';

export const ModalFeedbacks: React.FC = () => {
    const dispatch = useAppDispatch();
    const showModalFeedbacks = useAppSelector(state => state.feedbacks.showModalFeedbacks);
    const isLoaderVisible = useAppSelector(state => state.loaders.isLoaderVisible);

    const curItem = showModalFeedbacks ? showModalFeedbacks as string : false;
    const isSetBodyNotScrollable = curItem ? true : false;

    useEffect(() => {
        if (isSetBodyNotScrollable) toggleBodyNotScrollable(true);
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
                >
                    {MODAL_FEEDBACKS.BTN_BACK}
                </Button>
        },
        'modal-success': {
            icon: <div className="result-icon"><IconSuccess /></div>,
            title: <div className="result-text__title">Отзыв успешно опубликован</div>,
            main: <div className="result-text__main custom12"></div>,
            btn: <Button
                    type="primary"
                    block
                    onClick={() => {
                        dispatch(feedbacksActions.setShowModalFeedbacks(null));
                        toggleBodyNotScrollable(false);
                    }}
                >
                    {MODAL_FEEDBACKS.BTN_SUCCESS}
                </Button>
        },
        'modal-error': {
            icon: <div className="result-icon"><IconError /></div>,
            title: <div className="result-text__title">Данные не сохранились</div>,
            main: <div className="result-text__main custom12">Что-то пошло не так. Попробуйте ещё раз.</div>,
            btn: <div className="btns-modal-wrapper">
                <Button
                    type="primary"
                    block
                    onClick={() => {
                        dispatch(feedbacksActions.setShowModalFeedbacks(null));
                        toggleBodyNotScrollable(false);
                        dispatch(dispatch(feedbacksActions.setShowModalNewFeedback(true)));
                    }}
                    data-test-id='write-review-not-saved-modal'
                >
                    {MODAL_FEEDBACKS.BTN_NEW_FEEDBACK}
                </Button>
                <Button
                    block
                    onClick={() => {
                        dispatch(feedbacksActions.setShowModalFeedbacks(null));
                        toggleBodyNotScrollable(false);
                    }}
                >
                    {MODAL_FEEDBACKS.BTN_ERROR_CLOSE}
                </Button>
            </div>
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
