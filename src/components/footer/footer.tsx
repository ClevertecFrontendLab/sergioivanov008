import React from 'react';
import './footer.css';
import { Button, Card } from 'antd';
import { FOOTER_TEXT, ROUTE } from '@constants/constants';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { push } from 'redux-first-history';
import { useLocation } from 'react-router-dom';
const { Meta } = Card;

export const Footer: React.FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const collapsed = useAppSelector(state => state.aside.isAsideCollapsed);
    const footerClass = `footer ${collapsed ? 'collapsed' : ''}`;

    const handleBtnFeedbacks = () => {
        dispatch(push(ROUTE.FEEDBACKS));
    }

    return (location.pathname === ROUTE.MAIN &&
        <footer className={footerClass}>
            <Button
                type="text"
                className='btn-3'
                onClick={handleBtnFeedbacks}
            >
                {FOOTER_TEXT.BTN_FEEDBACKS}
            </Button>
            <Card
                hoverable
                bordered={false}
                actions={[
                    <Button type="text" className='footer-btn'>
                        <AndroidFilled />
                        {FOOTER_TEXT.BTN_ANDROID}
                    </Button>,
                    <Button type="text" className='footer-btn'>
                        <AppleFilled />
                        {FOOTER_TEXT.BTN_APPLE}
                    </Button>
                ]}
            >
                <Meta title={FOOTER_TEXT.CARD_TITLE} description={FOOTER_TEXT.CARD_DESC} />
            </Card>
        </footer>
    );
};
