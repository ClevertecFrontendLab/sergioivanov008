import React from 'react';
import './footer.css';
import { Button, Card } from 'antd';
import { FOOTER_TEXT } from '@constants/constants';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
const { Meta } = Card;

export const Footer: React.FC = () => {

    return (
        <footer className="footer">
            <Button type="text">{FOOTER_TEXT.BTN_REVIEW}</Button>
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
