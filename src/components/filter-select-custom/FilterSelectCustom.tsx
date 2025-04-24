import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
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

import { FilterCustomType, FilterSelectCustomPropsType } from '../types';

export function FilterSelectCustom({ keyFilter, width }: FilterSelectCustomPropsType) {
    const dispatch = useAppDispatch();
    const { selectedFilters } = useAppSelector(mainSelector);
    const selectedCurFilters = selectedFilters[keyFilter];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen);

    const toggleFilter = (filter: string) => {
        const updatedFilters: Record<FilterCustomType, string[]> = {
            ...selectedFilters,
            [keyFilter]: selectedFilters[keyFilter].includes(filter)
                ? selectedFilters[keyFilter].filter((el) => el !== filter)
                : [...selectedFilters[keyFilter], filter],
        };

        dispatch(mainActions.setSelectedFilters(updatedFilters));
    };

    return (
        <Box w={width}>
            <Menu
                isOpen={isMenuOpen}
                onOpen={toggleMenuOpen}
                onClose={toggleMenuOpen}
                closeOnSelect={false}
            >
                <MenuButton
                    as={Button}
                    rightIcon={isMenuOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    w='100%'
                    minH='40px'
                    h='auto'
                    py='10px'
                    textAlign='left'
                    colorScheme='black'
                    variant='outline'
                    _hover={{ borderColor: '#c4ff61' }}
                    borderColor={isMenuOpen ? '#c4ff61' : 'rgba(0, 0, 0, 0.08)'}
                >
                    {selectedCurFilters.length > 0 ? (
                        <Wrap spacing={2}>
                            {selectedCurFilters.map((el, index) => (
                                <WrapItem key={index}>
                                    <Tag size='sm' variant='outline' colorScheme='myGreen'>
                                        <TagLabel color='#2db100'>{el}</TagLabel>
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
                    w={width}
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
                                isChecked={selectedCurFilters.includes(el.value)}
                                onChange={() => toggleFilter(el.value)}
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
                </MenuList>
            </Menu>
        </Box>
    );
}
