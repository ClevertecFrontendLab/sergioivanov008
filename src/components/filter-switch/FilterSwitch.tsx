import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

export function FilterSwitch() {
    return (
        <FormControl display='flex' alignItems='center' w='auto'>
            <FormLabel htmlFor='email-alerts' mb='0'>
                Исключить мои аллергены
            </FormLabel>
            <Switch id='email-alerts' />
        </FormControl>
    );
}
