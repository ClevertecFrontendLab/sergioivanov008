import React from 'react';
import './feedback-empty-item.css';
import { Button, Card, Typography } from 'antd';
import { FEEDBACK_TEXT } from '@constants/constants';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { feedbacksActions } from '@redux/slices/feedbacks-slice';

export const FeedbackEmptyItem: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleNewFeedback = () => {
        dispatch(feedbacksActions.setShowModalNewFeedback(true));
    }

    return (
        <div className="feedbacks-empty">
            <div className='feedback-empty-item'>
                    <Card className='feedback-empty-card'>
                        <Typography.Title className='title'>
                            {FEEDBACK_TEXT.TITLE}
                        </Typography.Title>
                        <Typography.Text className='description'>
                            {FEEDBACK_TEXT.DESC_1}<br />
                            {FEEDBACK_TEXT.DESC_2}<br />
                            {FEEDBACK_TEXT.DESC_3}
                        </Typography.Text>
                    </Card>
                <Button
                    type="primary"
                    size="large"
                    className='custom-btn'
                    onClick={handleNewFeedback}
                    data-test-id='write-review'
                >
                    {FEEDBACK_TEXT.BTN_NEW_FEEDBACK}
                </Button>
            </div>
        </div>
    );
};
