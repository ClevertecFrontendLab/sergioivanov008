import React, { useEffect, useRef } from 'react';
import './feedbacks-page.css';
import { FeedbackEmptyItem } from '@components/feedback-empty-item';
import { Feedbacks } from '@components/feedbacks';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { feedbacksActions } from '@redux/slices/feedbacks-slice';
import { ModalFeedbacks } from '@components/modal-feedbacks';
import { ModalNewFeedback } from '@components/modal-new-feedback';
import { feedbacksSelector } from '@redux/sagas/selectors';

export const FeedbacksPage: React.FC = () => {
    const isRendered = useRef(false);
    const dispatch = useAppDispatch();
    const feedbacks = useAppSelector(feedbacksSelector);

    useEffect(() => {
        if (isRendered.current === false) {
            isRendered.current = true;
            dispatch(feedbacksActions.getFeedbacksFetch());
        }
    }, [dispatch, isRendered]);

    return (
        <>
            {feedbacks.length ? <Feedbacks /> : <FeedbackEmptyItem />}
            <ModalFeedbacks />
            <ModalNewFeedback />
        </>

    );
};
