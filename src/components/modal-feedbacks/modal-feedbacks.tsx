import React from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { MODAL_FEEDBACKS, ROUTE } from '@constants/constants';
import { Button, Modal, Result } from 'antd';
import { push } from 'redux-first-history';
import { ModalFeedbacksItems } from '../../types/types';
import { feedbacksActions } from '@redux/slices/feedbacks-slice';
import { getModalWidth } from '@utils/utils';
import { showModalFeedbacksSelector } from '@redux/sagas/selectors';

export const ModalFeedbacks: React.FC = () => {
    const dispatch = useAppDispatch();
    const showModalFeedbacks = useAppSelector(showModalFeedbacksSelector);

    const modalWidth = getModalWidth(document.documentElement.clientWidth);

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
                            dispatch(feedbacksActions.setShowModalFeedbacks(''));
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
                            dispatch(feedbacksActions.setShowModalFeedbacks(''));
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
                            dispatch(feedbacksActions.setShowModalFeedbacks(''));
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
                            dispatch(feedbacksActions.setShowModalFeedbacks(''));
                        }}
                    >
                        {MODAL_FEEDBACKS.BTN_ERROR_CLOSE}
                    </Button>
                ]}
            />,
    }

    return (
        <Modal
            open={Boolean(showModalFeedbacks)}
            centered
            closable={false}
            title={null}
            footer={null}
            width={modalWidth}
            maskStyle={{ backgroundColor: 'rgba(121, 156, 213, 0.5)', backdropFilter: 'blur(5px)' }}
            className='feedbaks-modal'
        >
            {Boolean(showModalFeedbacks) && modalFeedbacksItems[showModalFeedbacks]}
        </Modal>
    );
};
