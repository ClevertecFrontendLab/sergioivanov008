import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

import { TEXT } from '~/constants';

export function FilterSwitch() {
    return (
        <FormControl display='flex' alignItems='center' w='268px' justifyContent='space-between'>
            <FormLabel htmlFor='email-alerts' mb='0'>
                {TEXT.switchPlaceholder}
            </FormLabel>
            <Switch id='email-alerts' />
        </FormControl>
    );
}
