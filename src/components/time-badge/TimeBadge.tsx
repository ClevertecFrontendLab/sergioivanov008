import { Flex, Text } from '@chakra-ui/react';

import { CustomIcon16 } from '../custom-icon-16/CustomIcon16';

export type TimeBadgePropsType = {
    time: string;
};

export function TimeBadge({ time }: TimeBadgePropsType) {
    return (
        <Flex
            align='center'
            gap={{ base: '4px', lg: '8px' }}
            backgroundColor='rgba(0, 0, 0, 0.06)'
            borderRadius='4px'
            py='2px'
            px={{ base: '4px', lg: '8px' }}
            h='24px'
        >
            <CustomIcon16 iconType='time' props={{ boxSize: '16px' }} />
            <Text fontWeight={400} fontSize={14} lineHeight='143%' whiteSpace='nowrap'>
                {time}
            </Text>
        </Flex>
    );
}
