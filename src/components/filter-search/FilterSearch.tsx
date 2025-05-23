import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { TEXT } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

export function FilterSearch() {
    const dispatch = useAppDispatch();
    const { searchQuery, searchedDataLength } = useAppSelector(mainSelector);
    const [curQuery, setCurQuery] = useState(searchQuery);
    const [customColor, setCustomColor] = useState('unset');

    const curColor = searchQuery ? customColor : 'rgba(0, 0, 0, 0.48)';

    useEffect(() => {
        if (searchQuery) {
            if (searchedDataLength > 0) setCustomColor('green');
            else setCustomColor('red');
        }
    }, [searchQuery, searchedDataLength]);

    const isGoodLength = curQuery.trim().length > 2;

    const handleSetSerchQuery = () => {
        const query = curQuery.trim();
        if (isGoodLength || query === '') {
            dispatch(mainActions.setSearchQuery(query));
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSetSerchQuery();
        }
    };

    return (
        <InputGroup w={{ base: '284px', md: '404px', lg: '458px' }}>
            <Input
                data-test-id='search-input'
                placeholder={TEXT.searchPlaceholder}
                _placeholder={{ color: '#134b00' }}
                size={{ base: 'sm', lg: 'lg' }}
                borderRadius={{ base: '4px', lg: '6px' }}
                border='1px solid rgba(0, 0, 0, 0.48)'
                borderColor={curColor}
                _active={{ borderColor: `${curColor}` }}
                _hover={{ borderColor: `${curColor}` }}
                _focus={{ borderColor: `${curColor}`, boxShadow: 'unset' }}
                value={curQuery}
                onChange={(e) => setCurQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
            />
            <InputRightElement boxSize={{ base: '32px', lg: '48px' }}>
                <SearchIcon
                    data-test-id='search-button'
                    boxSize={{ base: '14px', lg: '18px' }}
                    onClick={handleSetSerchQuery}
                    pointerEvents={isGoodLength ? 'auto' : 'none'}
                />
            </InputRightElement>
        </InputGroup>
    );
}
