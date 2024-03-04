import React from 'react';
import './feedback-item.css';
import { Avatar, Card, Rate } from 'antd';
import { StarFilled, StarOutlined, UserOutlined } from '@ant-design/icons';
import { FeedbackItemProps } from '../../types/types';
import { FEEDBACK_TEXT } from '@constants/constants';
import { getDateForFeedback } from '@utils/utils';

export const FeedbackItem: React.FC<FeedbackItemProps> = ({ item }) => {
    const {createdAt, fullName, imageSrc, message, rating} = item;

    return (
        <Card className='feedback-item'>
            <div className='item-user'>
                <div className="item-user-avatar">
                    {imageSrc
                        ? <Avatar src={imageSrc} size={42} />
                        : <Avatar icon={<UserOutlined />} size={42} />
                    }
                </div>
                <div className='item-user-name'>
                    {fullName || FEEDBACK_TEXT.ANONIMOUS_USER}
                </div>
            </div>
            <div className='item-body'>
                <div className='item-body-rating'>
                     <Rate
                        character={
                            ({ index }) => index !== undefined && index + 1 <= rating
                                ? <StarFilled style={{ color: 'var(--character-light-warning)', fontSize: '13px' }} />
                                : <StarOutlined style={{ color: 'var(--character-light-warning)', fontSize: '13px' }} />
                        }
                        value={rating}
                        disabled={true}
                    />
                    <div className='item-body-date'>{getDateForFeedback(createdAt)}</div>
                </div>
                <div className='item-body-message'>{message}</div>
            </div>
        </Card>
    );
};
