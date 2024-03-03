import React from 'react';
import './feedbacks.css';
import { Button } from 'antd';
import { FEEDBACK_TEXT } from '@constants/constants';
import { FeedbackItem } from '@components/feedback-item';

export const Feedbacks: React.FC = () => {

    return (
        <div className="feedbacks">
            <div className="feedbacks-wrapper">
                <FeedbackItem />
                <FeedbackItem />
            </div>
            <div className="feedbacks-btns">
                <Button
                    type="primary"
                    size="large"
                    className='custom-btn'
                >
                    {FEEDBACK_TEXT.BTN_NEW_FEEDBACK}
                </Button>
                <Button
                    type="text"
                    className='btn-3'
                >
                    {FEEDBACK_TEXT.BTN_ALL}
                </Button>
            </div>
        </div>
    );
};
