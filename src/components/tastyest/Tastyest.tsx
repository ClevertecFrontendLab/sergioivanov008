import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import { TastyestItem } from '~/components';
import { BTN_TEXT, TASTYEST_DATA, TITLES } from '~/constants';

import s from './Tastyest.module.css';

export function Tastyest() {
    return (
        <Flex h='584px' backgroundColor='#ffa2a2' direction='column' gap={6}>
            <Flex justify='space-between' align='center'>
                <Text className={s.text}>{TITLES.tastyest}</Text>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='myGreen'
                    variant='solid'
                    color='black'
                    size='lg'
                >
                    {BTN_TEXT.allSelection}
                </Button>
            </Flex>
            <SimpleGrid columns={2} spacing={6}>
                {TASTYEST_DATA.map((el) => (
                    <TastyestItem key={el.id} data={el} />
                ))}
            </SimpleGrid>
        </Flex>
    );
}
