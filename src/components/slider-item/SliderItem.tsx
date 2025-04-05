import { Flex, Image, Text } from '@chakra-ui/react';

import { Badge, CustomIcon12 } from '~/components';

import { SliderItemPropsType } from '../types';
import s from './SliderItem.module.css';

export function SliderItem({ data }: SliderItemPropsType) {
    return (
        <Flex direction='column' w='322px' h='414px' className={s.wrapper}>
            <Image h='230px' objectFit='cover' src={data.image} alt={data.title} />
            <Flex h='100%' gap={6} direction='column' className={s.data}>
                <Flex gap={2} direction='column'>
                    <Text className={s.title}>{data.title}</Text>
                    <Text className={s.description}>{data.description}</Text>
                </Flex>
                <Flex justify='space-between'>
                    <Badge type={data.badgeType} color='#d7ff94' />
                    {data.recipeProps && (
                        <Flex gap={2}>
                            {data.recipeProps.map((el) => (
                                <CustomIcon12
                                    key={el.id}
                                    props={{ boxSize: '12px' }}
                                    iconType={el.type}
                                    value={el.value}
                                />
                            ))}
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}
