import React from 'react';
import './content.css';
import { Button, Card } from 'antd';
import { CONTENT_TEXT } from '@constants/constants';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

const cardItems = [
    {
        id: '001',
        itemIcon: <HeartFilled />,
        itemText: 'Тренировки',
        itemText_1: 'Расписать',
        itemText_2: 'тренировки',
    },
    {
        id: '002',
        itemIcon: <CalendarOutlined />,
        itemText: 'Календарь',
        itemText_1: 'Назначить',
        itemText_2: 'календарь',
    },
    {
        id: '003',
        itemIcon: <IdcardOutlined />,
        itemText: 'Профиль',
        itemText_1: 'Заполнить',
        itemText_2: 'профиль',
    },
];

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
                    {cardItems.map((el) => (
                        <div className='ant-card action-card' key={el.id}>
                            <div className='btn-title'>
                                {el.itemText_1} <span className={spanClass}>{el.itemText_2}</span>
                            </div>
                            <Button className='btn-1'>
                                {el.itemIcon}
                                {el.itemText}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};
