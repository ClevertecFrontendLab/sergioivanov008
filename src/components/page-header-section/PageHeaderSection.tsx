import { Flex, Heading, Text } from '@chakra-ui/react';

import { Filters } from '~/components';
import { PAGE_DB } from '~/constants';

import { PagePropsType } from '../types';

export function PageHeaderSection({ page }: PagePropsType) {
    const data = PAGE_DB[page];

    return (
        <Flex
            gap={{ base: '12px', lg: '32px' }}
            direction='column'
            align='center'
            mt={{ base: '16px', lg: '32px' }}
            mb={{ base: '32px', md: '38px', lg: '48px' }}
            mx='auto'
        >
            <Flex direction='column' align='center' gap={{ base: '16px', lg: '12px' }}>
                <Heading
                    fontWeight={700}
                    fontSize={{ base: '24px', lg: '48px' }}
                    lineHeight={{ base: '133%', lg: '100%' }}
                >
                    {data.title}
                </Heading>
                {data.desc && (
                    <Text
                        noOfLines={2}
                        fontWeight={500}
                        fontSize={{ base: '14px', lg: '16px' }}
                        lineHeight={{ base: '143%', lg: '150%' }}
                        color='rgba(0, 0, 0, 0.48);'
                        maxW={{ base: '328px', md: '727px', lg: '696px' }}
                        align='center'
                    >
                        {data.desc}
                    </Text>
                )}
            </Flex>
            <Filters />
        </Flex>
    );
}
