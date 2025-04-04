import { Flex, Text } from '@chakra-ui/react';

import { CustomIcon16 } from '~/components';

import { FooterButtonPropsType } from '../types';
import s from './FooterButton.module.css';

export function FooterButton(data: FooterButtonPropsType) {
    const curStyle = data.isActive ? `${s.wrapper} ${s.active}` : s.wrapper;

    return (
        <Flex align='center' justify='center' direction='column' className={curStyle}>
            <Flex boxSize={10} align='center' justify='center' className={s.center}>
                <CustomIcon16 iconType={data.type} props={{ boxSize: '24px' }} />
            </Flex>
            <Text className={s.text}>{data.text}</Text>
        </Flex>
    );
}
