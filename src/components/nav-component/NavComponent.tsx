import { Accordion, Flex } from '@chakra-ui/react';
import { useSize } from '@chakra-ui/react-use-size';
import { useEffect, useRef, useState } from 'react';

import { Category } from '~/components';
import { NAV_DATA } from '~/constants';

import { NavComponentPropsType } from '../types';

export function NavComponent({ isLeftNav }: NavComponentPropsType) {
    const containerRef = useRef<HTMLDivElement>(null);
    const dimensions = useSize(containerRef);
    const [height, setHeight] = useState(0);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (height === 0) {
            dimensions?.height && setHeight(dimensions.height);
        } else {
            dimensions?.height && setOpenMenu(dimensions.height > height);
        }
    }, [dimensions?.height, height]);

    return (
        <Flex
            direction='column'
            h='100%'
            overflowY='auto'
            overflowX='hidden'
            py='10px'
            pl='10px'
            pr='16px'
            transition='0.2s'
            borderRadius='12px'
            boxShadow={
                openMenu
                    ? '0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    : 'unset'
            }
            pb='12px'
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(0, 0, 0, 0.16)',
                    borderRadius: '8px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: 'rgba(0, 0, 0, 0.32)',
                },
            }}
        >
            <Accordion allowToggle ref={containerRef}>
                {NAV_DATA.map((el) => (
                    <Category key={el.id} data={el} isLeftNav={isLeftNav} />
                ))}
            </Accordion>
        </Flex>
    );
}
