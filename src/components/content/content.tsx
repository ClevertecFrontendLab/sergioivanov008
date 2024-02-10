import React from 'react';
import './content.css';
import { Button, Card } from 'antd';
import { CONTENT_TEXT } from '@constants/constants';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';

export const Content: React.FC = () => {

    return (
        <main className="main">
            <Card className='main-card'>
              <p className='card-text-1'>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_1}<br/>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_2}<br/>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_3}<br/>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_4}<br/>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_5}<br/>
              </p>
            </Card>
            <div className="main-content">
                <Card className='main-card'>
                  <p className='card-text-2'>
                        {CONTENT_TEXT.CARD_2_TEXT}
                  </p>
                </Card>
                <div className="action-cards-wrapper">
                    <Card
                        title="Расписать тренировки"
                        bordered={false}
                        className='action-card'
                    >
                        <Button type="text">
                            <HeartFilled />
                            Тренировки
                        </Button>
                    </Card>
                    <Card
                        title="Назначить календарь"
                        bordered={false}
                        className='action-card'
                    >
                        <Button type="text">
                            <CalendarOutlined />
                            Календарь
                        </Button>
                    </Card>
                    <Card
                        title="Заполнить профиль"
                        bordered={false}
                        className='action-card'
                    >
                        <Button type="text">
                            <IdcardOutlined />
                            Профиль
                        </Button>
                    </Card>
                </div>
            </div>
        </main>
    );
};
