import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Image,
    Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { CategoryItem } from '~/components';

import { CategoryPropsType } from '../types';

export function Category({ data }: CategoryPropsType) {
    const navigate = useNavigate();

    return (
        <AccordionItem w='230px' border='none'>
            <AccordionButton
                py='12px'
                px='8px'
                justifyContent='space-between'
                alignItems='center'
                _expanded={{ bg: '#eaffc7', fontWeight: 700 }}
                _hover={{ bg: '#ffffd3' }}
                as='span'
                onClick={() => navigate(`/${data.categoryNav}`)}
                data-test-id={data.categoryNav}
            >
                <Flex gap='12px' align='center'>
                    <Image
                        boxSize='24px'
                        objectFit='cover'
                        src={data.image}
                        alt={data.categoryView}
                    />
                    <Text>{data.categoryView}</Text>
                </Flex>
                <AccordionIcon boxSize={6} />
            </AccordionButton>
            <AccordionPanel p={0}>
                <Flex direction='column'>
                    {data.items.map((el) => (
                        <CategoryItem key={el.id} data={el} categoryNav={data.categoryNav} />
                    ))}
                </Flex>
            </AccordionPanel>
        </AccordionItem>
    );
}
