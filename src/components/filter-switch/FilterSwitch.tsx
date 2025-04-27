import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

import { TEXT } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

import { FilterSwitchPropsType } from '../types';

export function FilterSwitch({ dataTestId }: FilterSwitchPropsType) {
    const dispatch = useAppDispatch();
    const { isExcludeAllergens, isOpenDrawer, isCanFiltered } = useAppSelector(mainSelector);

    const handlerSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(mainActions.setIsExcludeAllergens(e.target.checked));

        if (!isOpenDrawer && !isCanFiltered) dispatch(mainActions.setIsCanFiltered(true));
        else if (!isOpenDrawer && isCanFiltered) dispatch(mainActions.setIsCanFiltered(false));
    };

    return (
        <FormControl
            display='flex'
            alignItems='center'
            w='231px'
            justifyContent='space-between'
            h='36px'
        >
            <FormLabel htmlFor='exclude-allergens' mb='0'>
                {TEXT.switchPlaceholder}
            </FormLabel>
            <Switch
                data-test-id={dataTestId}
                id='exclude-allergens'
                colorScheme='myGreen'
                isChecked={isExcludeAllergens}
                onChange={handlerSwitch}
            />
        </FormControl>
    );
}
