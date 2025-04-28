import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    Tag,
    TagLabel,
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { useState } from 'react';

import { AdditionalInput } from '~/components';
import { FILTER_CUSTOM } from '~/constants';
import { useFilterToggle } from '~/hooks/use-filter-toggle';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';
import { checkIsOdd } from '~/utils';

import { FilterSelectAllergenPropsType } from '../types';

export function FilterSelectAllergen({ keyFilter, isSideMenu }: FilterSelectAllergenPropsType) {
    const { selectedFilterSet, toggleFilter } = useFilterToggle(keyFilter);
    const { isExcludeAllergens, selectedFilters, isOpenDrawer } = useAppSelector(mainSelector);
    const selectedCurFilters = selectedFilters[keyFilter];
    const [isAllergenMenuOpen, setIsAllergenMenuOpen] = useState(false);

    const toggleMenuOpen = () => setIsAllergenMenuOpen(!isAllergenMenuOpen);

    const curTestId = (index: number) => {
        const testIdFull = `allergen-${index}`;
        let testId = '';
        if (!isSideMenu && !isOpenDrawer) testId = testIdFull;
        else if (!isSideMenu && isOpenDrawer) testId = '';
        else if (isSideMenu && !isOpenDrawer) testId = '';
        else if (isSideMenu && isOpenDrawer) testId = testIdFull;

        return testId;
    };

    return (
        <Box w={isSideMenu ? { base: '299px', lg: '390px' } : '269px'}>
            <Menu
                isOpen={isAllergenMenuOpen}
                onOpen={toggleMenuOpen}
                onClose={toggleMenuOpen}
                closeOnSelect={false}
            >
                <MenuButton
                    data-test-id={
                        isSideMenu ? 'allergens-menu-button-filter' : 'allergens-menu-button'
                    }
                    as={Button}
                    rightIcon={isAllergenMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    w='100%'
                    minH='40px'
                    h='auto'
                    py='10px'
                    textAlign='left'
                    colorScheme='black'
                    variant='outline'
                    _hover={isExcludeAllergens ? { borderColor: '#c4ff61' } : ''}
                    borderColor={isAllergenMenuOpen ? '#c4ff61' : 'rgba(0, 0, 0, 0.08)'}
                    isDisabled={!isExcludeAllergens}
                >
                    {selectedCurFilters.length > 0 && isExcludeAllergens ? (
                        <Wrap spacing={2}>
                            {selectedCurFilters.map((el, index) => (
                                <WrapItem key={index}>
                                    <Tag size='sm' variant='outline' colorScheme='myGreen'>
                                        <TagLabel color='#2db100'>{el.value}</TagLabel>
                                    </Tag>
                                </WrapItem>
                            ))}
                        </Wrap>
                    ) : (
                        <Text
                            fontWeight='400'
                            fontSize='16px'
                            lineHeight='150%'
                            color='rgba(0, 0, 0, 0.64)'
                        >
                            {FILTER_CUSTOM[keyFilter].title}
                        </Text>
                    )}
                </MenuButton>

                <MenuList
                    data-test-id={isSideMenu ? '' : 'allergens-menu'}
                    w={isSideMenu ? { base: '299px', lg: '390px' } : '269px'}
                    borderRadius='4px'
                    padding='4px 0px'
                    boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                    background='#fff'
                    zIndex={2}
                >
                    {FILTER_CUSTOM[keyFilter].list.map((el, index) => (
                        <Flex
                            key={index}
                            h='32px'
                            px='16px'
                            gap='8px'
                            justify='flex-start'
                            bg={checkIsOdd(index) ? 'rgba(0, 0, 0, 0.06)' : ''}
                        >
                            <Checkbox
                                data-test-id={curTestId(index)}
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

                    <AdditionalInput keyFilter={keyFilter} isSideMenu={isSideMenu} />
                </MenuList>
            </Menu>
        </Box>
    );
}
