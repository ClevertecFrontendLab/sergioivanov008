import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { CategoryItemPropsType } from '../types';

export function CategoryItem({ data }: CategoryItemPropsType) {
    const [isHover, setIsHover] = useState(false);

    const handlerHover = () => setIsHover(!isHover);

    return (
        <Flex
            gap={3}
            py={1.5}
            pr={2}
            pl={4}
            cursor='pointer'
            transition='0.2s'
            bg={isHover ? '#ffffd3' : ''}
            onMouseEnter={handlerHover}
            onMouseLeave={handlerHover}
        >
            <Flex boxSize={6} justify='flex-end'>
                <Box w='1px' h='24px' bg={isHover ? '' : '#c4ff61'} />
            </Flex>
            <Text fontWeight={500} fontSize='16px' lineHeight='150%'>
                {data.title}
            </Text>
        </Flex>
    );
}
