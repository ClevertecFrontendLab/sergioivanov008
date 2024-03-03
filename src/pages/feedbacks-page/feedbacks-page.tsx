import React from 'react';
import './feedbacks-page.css';
import { FeedbackEmptyItem } from '@components/feedback-empty-item';
import { Feedbacks } from '@components/feedbacks';

export const FeedbacksPage: React.FC = () => {

    return (
        <>
            <Feedbacks />
            {/* <FeedbackEmptyItem /> */}
        </>
    );
};
