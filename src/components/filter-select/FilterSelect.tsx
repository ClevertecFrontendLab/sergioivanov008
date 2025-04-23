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

import { ALLERGENS, TEXT } from '~/constants';
import { useAppSelector } from '~/store/hooks';
import { mainSelector } from '~/store/slices/main-slice';
import { checkIsOdd } from '~/utils';

export function FilterSelect() {
    const { isExcludeAllergens } = useAppSelector(mainSelector);
    const [isAllergenMenuOpen, setIsAllergenMenuOpen] = useState(false);
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const [newAllergen, setNewAllergen] = useState('');

    const toggleMenuOpen = () => setIsAllergenMenuOpen(!isAllergenMenuOpen);

    const toggleAllergen = (allergen: string) => {
        if (selectedAllergens.includes(allergen)) {
            setSelectedAllergens(selectedAllergens.filter((el) => el !== allergen));
        } else {
            setSelectedAllergens([...selectedAllergens, allergen]);
        }
    };

    const handleAddCustomAllergen = () => {
        const curAllergen = newAllergen.trim();
        if (curAllergen && !selectedAllergens.includes(curAllergen)) {
            setSelectedAllergens([...selectedAllergens, curAllergen]);
            setNewAllergen('');
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAddCustomAllergen();
        }
    };

    return (
        <Box w='269px'>
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
                    {selectedAllergens.length > 0 && isExcludeAllergens ? (
                        <Wrap spacing={2}>
                            {selectedAllergens.map((el, index) => (
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
                            {TEXT.allergenPlaceholder}
                        </Text>
                    )}
                </MenuButton>

                <MenuList
                    w='269px'
                    borderRadius='4px'
                    padding='4px 0px'
                    boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                    background='#fff'
                    zIndex={2}
                >
                    {ALLERGENS.map((el, index) => (
                        <MenuItem key={el.id} bg={checkIsOdd(index) ? 'rgba(0, 0, 0, 0.06)' : ''}>
                            <Checkbox
                                colorScheme='myGreen'
                                iconColor='black'
                                isChecked={selectedAllergens.includes(el.key)}
                                onChange={() => toggleAllergen(el.key)}
                                sx={{
                                    '.chakra-checkbox__control': {
                                        borderColor: '#d7ff94',
                                    },
                                }}
                            >
                                {el.key}
                            </Checkbox>
                        </MenuItem>
                    ))}

                    <Flex align='center' py='8px' pl='24px' pr='14px'>
                        <Input
                            border-radius='4px'
                            height='32px'
                            placeholder={TEXT.inputAllergenPlaceholder}
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
