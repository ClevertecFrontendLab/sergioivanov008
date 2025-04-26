import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Heading,
    IconButton,
    useDisclosure,
    VStack,
} from '@chakra-ui/react';

import {
    CustomIcon24,
    FilterListCustom,
    FilterSelectAllergen,
    FilterSelectCustom,
    FilterSwitch,
    SelectedFilters,
} from '~/components';
import { BTN_TEXT, EMPTY_SELECTED_FILTERS, TEXT } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

export function FilterButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useAppDispatch();
    const { selectedFilters, isExcludeAllergens } = useAppSelector(mainSelector);
    const allFiltersArray = [
        ...selectedFilters.category,
        ...selectedFilters.author,
        ...selectedFilters.garnir,
        ...selectedFilters.meat,
    ];

    const handlerClearFilter = () => {
        dispatch(mainActions.setSelectedFilters(EMPTY_SELECTED_FILTERS));
        dispatch(mainActions.setIsExcludeAllergens(false));
    };

    const handlerOpenDrawer = () => {
        dispatch(mainActions.setIsCanFiltered(false));
        handlerClearFilter();
        onOpen();
    };

    const checkIsDisabledButton = () => {
        const isDisabled = !(isExcludeAllergens || allFiltersArray.length > 0);

        return isDisabled;
    };

    const handlerFindRecipe = () => {
        dispatch(mainActions.setIsCanFiltered(true));
        onClose();
    };

    return (
        <>
            <IconButton
                data-test-id='filter-button'
                colorScheme='myBlack'
                aria-label='new-recipes'
                size={{ base: 'sm', lg: 'lg' }}
                width={{ base: '32px', lg: '48px' }}
                icon={<CustomIcon24 iconType='filter' />}
                variant='outline'
                border='1px solid rgba(0, 0, 0, 0.48)'
                borderColor='rgba(0, 0, 0, 0.48)'
                onClick={handlerOpenDrawer}
            />
            <Drawer
                data-test-id='filter-drawer'
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent
                    maxW={{ base: '344px', lg: '463px' }}
                    p={{ base: '16px', lg: '32px' }}
                >
                    <DrawerCloseButton
                        top={{ base: '16px', md: '32px' }}
                        right={{ base: '16px', md: '32px' }}
                        borderRadius='full'
                        bg='black'
                        size='sm'
                        color='white'
                    />

                    <DrawerHeader p={0} mb='40px'>
                        <Heading fontWeight='700' fontSize='24px' lineHeight='133%'>
                            {TEXT.filterTitle}
                        </Heading>
                    </DrawerHeader>

                    <DrawerBody
                        p={0}
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
                        <VStack spacing='24px' align='flex-start'>
                            <FilterSelectCustom keyFilter='category' />
                            <FilterSelectCustom keyFilter='author' />
                            <FilterListCustom keyFilter='meat' />
                            <FilterListCustom keyFilter='garnir' />
                            <VStack spacing='8px' align='flex-start'>
                                <FilterSwitch />
                                <FilterSelectAllergen keyFilter='allergens' isSideMenu={true} />
                            </VStack>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter
                        p={0}
                        w='100%'
                        flexDirection='column'
                        alignItems='flex-start'
                        gap='32px'
                        mt='32px'
                    >
                        <SelectedFilters />

                        <Flex w='100%' justify='space-between'>
                            <Button
                                data-test-id='clear-filter-button'
                                colorScheme='myBlack'
                                variant='outline'
                                size={{ base: 'sm', lg: 'lg' }}
                                onClick={handlerClearFilter}
                            >
                                {BTN_TEXT.clearFilter}
                            </Button>
                            <Button
                                data-test-id='find-recipe-button'
                                colorScheme='myBlack'
                                variant='solid'
                                size={{ base: 'sm', lg: 'lg' }}
                                isDisabled={checkIsDisabledButton()}
                                onClick={handlerFindRecipe}
                            >
                                {BTN_TEXT.findRecipe}
                            </Button>
                        </Flex>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
}
