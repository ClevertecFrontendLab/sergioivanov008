import React, { useState } from 'react';
import './feedbacks.css';
import { Button } from 'antd';
import { FEEDBACK_TEXT, NUMBER_DATA } from '@constants/constants';
import { FeedbackItem } from '@components/feedback-item';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { feedbacksActions } from '@redux/slices/feedbacks-slice';

export const Feedbacks: React.FC = () => {
    const dispatch = useAppDispatch();
    const feedbacks = useAppSelector(state => state.feedbacks.feedbacks);
    const [isCollapsedFeedbacks, setIsCollapsedFeedbacks] = useState(true);
    const curFeedbacks = [...feedbacks].reverse();

    const handleToggleFeedbacks = () => {
        setIsCollapsedFeedbacks(!isCollapsedFeedbacks);
    }

    const handleNewFeedback = () => {
        dispatch(feedbacksActions.setShowModalNewFeedback(true));
    }

    return (
        <div className="feedbacks">
            <div className="feedbacks-wrapper">
                {
                    isCollapsedFeedbacks
                        ? curFeedbacks.slice(0, NUMBER_DATA.QUAN_FEEDBACKS).map((el) => <FeedbackItem key={el.id} item={el} />)
                        : curFeedbacks.map((el) => <FeedbackItem key={el.id} item={el} />)
                }
            </div>
            <div className="feedbacks-btns">
                <Button
                    type="primary"
                    size="large"
                    className='custom-btn'
                    onClick={handleNewFeedback}
                >
                    {FEEDBACK_TEXT.BTN_NEW_FEEDBACK}
                </Button>
                <Button
                    type="text"
                    className='btn-3'
                    onClick={handleToggleFeedbacks}
                >
                    {isCollapsedFeedbacks ? FEEDBACK_TEXT.BTN_EXPAND : FEEDBACK_TEXT.BTN_COLLAPSE}
                </Button>
            </div>
        </div>
    );
};
