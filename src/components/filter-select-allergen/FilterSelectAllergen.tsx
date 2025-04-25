import { AddIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    IconButton,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tag,
    TagLabel,
    Text,
    Wrap,
    WrapItem,
} from '@chakra-ui/react';
import { useState } from 'react';

import { FILTER_CUSTOM } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';
import { checkIsOdd } from '~/utils';

import { FilterCustomType, FilterItemType, FilterSelectAllergenPropsType } from '../types';

export function FilterSelectAllergen({ keyFilter, isSideMenu }: FilterSelectAllergenPropsType) {
    const dispatch = useAppDispatch();
    const { isExcludeAllergens, selectedFilters } = useAppSelector(mainSelector);
    const selectedCurFilters = selectedFilters[keyFilter];
    const [isAllergenMenuOpen, setIsAllergenMenuOpen] = useState(false);
    const [newAllergen, setNewAllergen] = useState('');

    const toggleMenuOpen = () => setIsAllergenMenuOpen(!isAllergenMenuOpen);

    const toggleFilter = (filter: FilterItemType) => {
        const updatedFilters: Record<FilterCustomType, FilterItemType[]> = {
            ...selectedFilters,
            [keyFilter]: selectedFilters[keyFilter].includes(filter)
                ? selectedFilters[keyFilter].filter((el) => el !== filter)
                : [...selectedFilters[keyFilter], filter],
        };

        dispatch(mainActions.setSelectedFilters(updatedFilters));
    };

    const handleAddCustomAllergen = () => {
        const curAllergen = newAllergen.trim();
        const tempAllergen: FilterItemType = {
            type: 'allergens',
            key: curAllergen,
            value: curAllergen,
        };
        if (curAllergen && !selectedCurFilters.some((elem) => elem.key === curAllergen)) {
            dispatch(
                mainActions.setSelectedFilters({
                    ...selectedFilters,
                    [keyFilter]: [...selectedFilters[keyFilter], tempAllergen],
                }),
            );
            setNewAllergen('');
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAddCustomAllergen();
        }
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
                    w={isSideMenu ? { base: '299px', lg: '390px' } : '269px'}
                    borderRadius='4px'
                    padding='4px 0px'
                    boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                    background='#fff'
                    zIndex={2}
                >
                    {FILTER_CUSTOM[keyFilter].list.map((el, index) => (
                        <MenuItem key={index} bg={checkIsOdd(index) ? 'rgba(0, 0, 0, 0.06)' : ''}>
                            <Checkbox
                                colorScheme='myGreen'
                                iconColor='black'
                                isChecked={selectedCurFilters.some((elem) => elem.key === el.key)}
                                onChange={() => toggleFilter(el)}
                                sx={{
                                    '.chakra-checkbox__control': {
                                        borderColor: '#d7ff94',
                                    },
                                }}
                            >
                                {el.value}
                            </Checkbox>
                        </MenuItem>
                    ))}

                    <Flex align='center' py='8px' pl='24px' pr='14px'>
                        <Input
                            border-radius='4px'
                            height='32px'
                            placeholder={FILTER_CUSTOM[keyFilter].addText}
                            value={newAllergen}
                            onChange={(e) => setNewAllergen(e.target.value)}
                            onKeyDown={handleInputKeyDown}
                        />
                        <IconButton
                            ml='14px'
                            minW='12px'
                            h='12px'
                            isRound={true}
                            variant='solid'
                            bgColor='myGreenButton.500'
                            color='white'
                            aria-label='Done'
                            icon={<AddIcon boxSize='7px' />}
                            onClick={handleAddCustomAllergen}
                        />
                    </Flex>
                </MenuList>
            </Menu>
        </Box>
    );
}
