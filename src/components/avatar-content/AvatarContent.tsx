import { Avatar, Flex, Text } from '@chakra-ui/react';

import { AVATAR_DATA } from '~/constants/constants';

import s from './AvatarContent.module.css';

export function AvatarContent() {
    return (
        <Flex
            gap={3}
            display={{
                base: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
            }}
        >
            <Avatar name={AVATAR_DATA.imgAlt} src={AVATAR_DATA.imgSrc} />
            <Flex direction='column' justify='space-between'>
                <Text className={s.textName}>{AVATAR_DATA.name}</Text>
                <Text className={s.nickName}>{AVATAR_DATA.nickName}</Text>
            </Flex>
        </Flex>
    );
}
