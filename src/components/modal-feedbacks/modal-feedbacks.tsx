import React from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { MODAL_FEEDBACKS, ROUTE } from '@constants/constants';
import { Button, Modal, Result } from 'antd';
import { push } from 'redux-first-history';
import { ModalFeedbacksItems } from '../../types/types';
import { feedbacksActions } from '@redux/slices/feedbacks-slice';

export const ModalFeedbacks: React.FC = () => {
    const dispatch = useAppDispatch();
    const showModalFeedbacks = useAppSelector(state => state.feedbacks.showModalFeedbacks);

    const curItem = showModalFeedbacks ? showModalFeedbacks as string : false;
    const isSetBodyNotScrollable = curItem ? true : false;

    const modalWidth = document.documentElement.clientWidth >= 805 ? 539 : 328;

    const modalFeedbacksItems: ModalFeedbacksItems = {
        'modal-wrong':
            <Result
                status="500"
                title="Что-то пошло не так"
                subTitle="Произошла ошибка, попробуйте ещё раз."
                className="feedbaks-modal-result modal-wrong"
                extra={
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => {
                            dispatch(feedbacksActions.setShowModalFeedbacks(null));
                            dispatch(push(ROUTE.MAIN));
                        }}
                    >
                        {MODAL_FEEDBACKS.BTN_BACK}
                    </Button>
                }
            />,
        'modal-success':
            <Result
                status="success"
                title="Отзыв успешно опубликован"
                className="feedbaks-modal-result modal-success"
                extra={[
                    <Button
                        type="primary"
                        size="large"
                        block
                        onClick={() => {
                            dispatch(feedbacksActions.setShowModalFeedbacks(null));
                        }}
                    >
                        {MODAL_FEEDBACKS.BTN_SUCCESS}
                    </Button>
                ]}
            />,
        'modal-error':
            <Result
                status="error"
                title="Данные не сохранились"
                subTitle="Что-то пошло не так. Попробуйте ещё раз."
                className="feedbaks-modal-error"
                extra={[
                    <Button
                        type="primary"
                        size="large"
                        block
                        onClick={() => {
                            dispatch(feedbacksActions.setShowModalFeedbacks(null));
                            dispatch(dispatch(feedbacksActions.setShowModalNewFeedback(true)));
                        }}
                        data-test-id='write-review-not-saved-modal'
                    >
                        {MODAL_FEEDBACKS.BTN_NEW_FEEDBACK}
                    </Button>,
                    <Button
                        type="default"
                        size="large"
                        block
                        onClick={() => {
                            dispatch(feedbacksActions.setShowModalFeedbacks(null));
                        }}
                    >
                        {MODAL_FEEDBACKS.BTN_ERROR_CLOSE}
                    </Button>
                ]}
            />,
    }

    return (
        <Modal
            open={isSetBodyNotScrollable}
            centered
            closable={false}
            title={null}
            footer={null}
            width={modalWidth}
            maskStyle={{ backgroundColor: 'rgba(121, 156, 213, 0.5)', backdropFilter: 'blur(5px)' }}
            className='feedbaks-modal'
        >
            {curItem && modalFeedbacksItems[curItem]}
        </Modal>
    );
};
