import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { CategoryItem } from '~/components';

import { CategoryPropsType } from '../types';
import s from './Category.module.css';

export function Category({ data }: CategoryPropsType) {
    const [isOpen, setIsOpen] = useState(false);

    const handlerCategoryClick = () => setIsOpen(!isOpen);

    const openIconStyle = isOpen ? s.openIcon : `${s.openIcon} ${s.close}`;

    return (
        <Flex direction='column' w='230px'>
            <Flex gap={3} align='center' className={s.category} onClick={handlerCategoryClick}>
                <Image boxSize='24px' objectFit='cover' src={data.image} alt={data.category} />
                <Text className={s.text}>{data.category}</Text>
                <ChevronDownIcon boxSize={4} className={openIconStyle} />
            </Flex>
            {isOpen && (
                <Flex direction='column'>
                    {data.items.map((el) => (
                        <CategoryItem key={el.id} data={el} />
                    ))}
                </Flex>
            )}
        </Flex>
    );
}
