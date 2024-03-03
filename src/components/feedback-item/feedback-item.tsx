import React from 'react';
import './feedback-item.css';
import { Avatar, Card, Rate } from 'antd';
import { StarTwoTone, UserOutlined } from '@ant-design/icons';

export const FeedbackItem: React.FC = () => {

    return (
        <Card className='feedback-item'>
            <div className='item-user'>
                <div className="item-user-avatar">
                    <Avatar icon={<UserOutlined />} size={42} />
                </div>
                <div className='item-user-name'>Елена Ковалева</div>
            </div>
            <div className='item-body'>
                <div className='item-body-rating'>
                    <Rate
                        allowHalf={false}
                        style={{ fontSize: 13, lineHeight: 1 }}
                        character={
                            <StarTwoTone
                                color={'#FAAD14'}
                                twoToneColor={'#FAAD14'}
                                style={{ fontSize: 13 }}
                            />
                        }
                    />
                    <div className='item-body-date'>17.01.2024</div>
                </div>
                <div className='item-body-message'>Классное приложение!</div>
            </div>
        </Card>
    );
};
