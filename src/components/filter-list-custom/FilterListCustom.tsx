import { Checkbox, Flex, Heading, VStack } from '@chakra-ui/react';

import { FILTER_CUSTOM } from '~/constants';
import { useFilterToggle } from '~/hooks/use-filter-toggle';

import { FilterListCustomPropsType } from '../types';

export function FilterListCustom({ keyFilter }: FilterListCustomPropsType) {
    const { selectedFilterSet, toggleFilter } = useFilterToggle(keyFilter);

    return (
        <VStack w='100%' spacing='12px' align='flex-start'>
            <Heading as='h6' size='xs' w='100%'>
                {FILTER_CUSTOM[keyFilter].title}
            </Heading>
            {FILTER_CUSTOM[keyFilter].list.map((el, index) => (
                <Flex key={index} gap='8px' align='center' w='100%'>
                    <Checkbox
                        colorScheme='myGreen'
                        iconColor='black'
                        isChecked={selectedFilterSet.has(el.key)}
                        onChange={() => toggleFilter(el)}
                        sx={{
                            '.chakra-checkbox__control': {
                                borderColor: '#d7ff94',
                            },
                        }}
                    >
                        {el.value}
                    </Checkbox>
                </Flex>
            ))}
        </VStack>
    );
}
