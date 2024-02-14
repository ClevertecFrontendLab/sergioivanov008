import React from 'react';
import './content.css';
import { Button, Card } from 'antd';
import { CONTENT_TEXT } from '@constants/constants';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

export const Content: React.FC = () => {
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);
    const spanClass = collapsed ? '' : 'span-block';

    return (
        <main className="main">
            <Card className='main-card'>
              <div className='card-text-1'>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_1}<br/>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_2}<br/>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_3}<br/>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_4}<br/>
                    {CONTENT_TEXT.CARD_1_TEXT_LINE_5}
              </div>
            </Card>
            <div className="main-content">
                <Card className='main-card'>
                  <div className='card-text-2'>
                        {CONTENT_TEXT.CARD_2_TEXT}
                  </div>
                </Card>
                <div className="action-cards-wrapper">
                    <div className='ant-card action-card'>
                        <div className='btn-title'>
                            Расписать <span className={spanClass}>тренировки</span>
                        </div>
                        <Button className='btn-1'>
                            <HeartFilled />
                            Тренировки
                        </Button>
                    </div>
                    <div className='ant-card action-card'>
                        <div className='btn-title'>
                            Назначить <span className={spanClass}>календарь</span>
                        </div>
                        <Button className='btn-1'>
                            <CalendarOutlined />
                            Календарь
                        </Button>
                    </div>
                    <div className='ant-card action-card'>
                        <div className='btn-title'>
                            Заполнить <span className={spanClass}>профиль</span>
                        </div>
                        <Button className='btn-1'>
                            <IdcardOutlined />
                            Профиль
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};
