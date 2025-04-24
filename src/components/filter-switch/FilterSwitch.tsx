import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

import { TEXT } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { mainActions, mainSelector } from '~/store/slices/main-slice';

export function FilterSwitch() {
    const dispatch = useAppDispatch();
    const { isExcludeAllergens } = useAppSelector(mainSelector);

    const handlerSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(mainActions.setIsExcludeAllergens(e.target.checked));
    };

    return (
        <FormControl
            display='flex'
            alignItems='center'
            w='231px'
            justifyContent='space-between'
            pl='8px'
        >
            <FormLabel htmlFor='exclude-allergens' mb='0'>
                {TEXT.switchPlaceholder}
            </FormLabel>
            <Switch
                id='exclude-allergens'
                colorScheme='myGreen'
                isChecked={isExcludeAllergens}
                onChange={handlerSwitch}
            />
        </FormControl>
    );
}
