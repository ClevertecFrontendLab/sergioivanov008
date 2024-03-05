import React from 'react';
import './header.css';
import { Breadcrumb, Typography } from 'antd';
import { HEADER_TEXT, ROUTE } from '@constants/constants';
import { SettingOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useLocation } from 'react-router-dom';
import { push } from 'redux-first-history';
import { collapsedSelector } from '@redux/sagas/selectors';

const { Title } = Typography;

export const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const collapsed = useAppSelector(collapsedSelector);
    const spanClass = collapsed ? '' : 'span-block';
    const headerStyle = `header ${location.pathname === ROUTE.FEEDBACKS && 'feedback'}`;
    const pathName = location.pathname;

    return (
        <header className={headerStyle}>
            <Breadcrumb>
                <Breadcrumb.Item
                    className='breadcrumb-item'
                    onClick={() => dispatch(push(ROUTE.MAIN))}
                >
                    Главная
                </Breadcrumb.Item>
                {pathName === ROUTE.FEEDBACKS &&
                    <Breadcrumb.Item
                        className='breadcrumb-item'
                        onClick={() => dispatch(push(ROUTE.FEEDBACKS))}
                    >
                        Отзывы пользователей
                    </Breadcrumb.Item>}
            </Breadcrumb>
            {pathName === ROUTE.MAIN &&
                <div className="header-content">
                    <Title className='header-text'>
                        {HEADER_TEXT.HEADER_TEXT_2_1}
                        <span className={spanClass}>{HEADER_TEXT.HEADER_TEXT_2_2}</span>
                    </Title>
                    <div className='header-btn'>
                        <div className="header-btn-icon">
                            <SettingOutlined />
                        </div>
                        <div className="header-btn-text">
                            {HEADER_TEXT.HEADER_TEXT_3}
                        </div>
                    </div>
                </div>
            }
        </header>
    );
};
