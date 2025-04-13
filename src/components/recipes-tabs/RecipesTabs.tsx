import { Flex, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';

import { PageRecipesSectionPropsType } from '~/components/types';
import { NAV_DATA } from '~/constants';

export function RecipesTabs({ page }: PageRecipesSectionPropsType) {
    const data = NAV_DATA.find((el) => el.categoryNav === page)?.items;

    return (
        <Flex justify='center' flexWrap='nowrap' mb='24px' direction='column' align='center'>
            <Tabs
                defaultIndex={2}
                position='relative'
                variant='unstyled'
                borderBottom='1px solid rgba(0, 0, 0, 0.08)'
            >
                <TabList w='max-content'>
                    {data?.map((el) => (
                        <Tab
                            key={el.id}
                            as='div'
                            flexShrink={0}
                            borderBottom='2px solid transparent'
                            py='8px'
                            px='16px'
                            cursor='pointer'
                            color='#134b00'
                            fontWeight={500}
                            fontSize={{ base: '14px', lg: '16px' }}
                            lineHeight={{ base: '143%', lg: '150%' }}
                            _focus={{ boxShadow: 'none' }}
                            _selected={{ color: '#2db100', borderBottom: '2px solid #2db100' }}
                        >
                            {el.title}
                        </Tab>
                    ))}
                </TabList>
                <TabIndicator height='2px' bg='#2db100' />
            </Tabs>
        </Flex>
    );
}
