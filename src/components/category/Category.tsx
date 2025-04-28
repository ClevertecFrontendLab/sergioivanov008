import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Flex,
    Image,
    Text,
    useMediaQuery,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { CategoryItem } from '~/components';

import { CategoryPropsType } from '../types';

export function Category({ data, isLeftNav }: CategoryPropsType) {
    const navigate = useNavigate();
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    const curDataTestId = () => {
        let dataTestId = '';
        if (isLeftNav) {
            if (isLargerThan1440) dataTestId = data.testId;
        } else {
            if (!isLargerThan1440) dataTestId = data.testId;
        }

        return dataTestId;
    };

    return (
        <AccordionItem w={{ base: 'unset', lg: '230px' }} border='none'>
            <AccordionButton
                py='12px'
                px='8px'
                justifyContent='space-between'
                alignItems='center'
                _expanded={{ bg: '#eaffc7', fontWeight: 700 }}
                _hover={{ bg: '#ffffd3' }}
                as='span'
                onClick={() => navigate(`/${data.categoryNav}/${data.items[0].subcategoryNav}`)}
                data-test-id={curDataTestId()}
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
