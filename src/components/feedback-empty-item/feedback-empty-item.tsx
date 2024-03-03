import React from 'react';
import './feedback-empty-item.css';
import { Button, Card, Typography } from 'antd';
import { FEEDBACK_TEXT } from '@constants/constants';

export const FeedbackEmptyItem: React.FC = () => {

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
                >
                    {FEEDBACK_TEXT.BTN_NEW_FEEDBACK}
                </Button>
            </div>
        </div>
    );
};
