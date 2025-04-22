import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react';

import { CustomIcon12 } from '~/components';
import { AuthorInfoPropsType } from '~/components/types';
import { AUTHOR_INFO_TEXT } from '~/constants';

export function AuthorInfo({ data }: AuthorInfoPropsType) {
    return (
        <Card
            direction='row'
            overflow='hidden'
            variant='solid'
            bg='#c4ff61'
            borderRadius='8px'
            mx='auto'
            mb='56px'
            w={{ base: '328px', md: '604px', lg: '578px', xl: '668px' }}
        >
            <CardHeader p={{ base: '12px', md: '24px' }} pr={{ base: '8px', md: '16px' }}>
                <Avatar size='xl' name={`${data.firstName} ${data.lastName}`} src={data.image} />{' '}
            </CardHeader>

            <Stack
                pt={{ base: '8px', md: '24px' }}
                pr={{ base: '8px', md: '24px' }}
                pl={{ base: '0px' }}
                pb={{ base: '12px', md: '24px' }}
                spacing={{ xl: '16px' }}
                w='100%'
                justifyContent='space-between'
            >
                <CardBody p={0} flex-grow={{ base: '0', md: '1' }} flex='0 1 0%'>
                    <Flex direction='column' gap={{ xl: '4px' }}>
                        <Flex
                            justify='space-between'
                            p={0}
                            flexWrap={{ base: 'wrap-reverse', md: 'nowrap' }}
                        >
                            <Text
                                fontWeight={{ base: '600', md: '700' }}
                                fontSize={{ base: '18px', md: '24px' }}
                                lineHeight={{ base: '156%', md: '133%' }}
                            >
                                {`${data.firstName} ${data.lastName}`}
                            </Text>
                            <Text
                                fontWeight={400}
                                fontSize='14px'
                                lineHeight='143%'
                                textAlign='right'
                                w={{ base: '100%', md: 'unset' }}
                            >
                                {AUTHOR_INFO_TEXT.author}
                            </Text>
                        </Flex>

                        <Text
                            fontWeight={400}
                            fontSize='14px'
                            lineHeight='143%'
                            color='rgba(0, 0, 0, 0.64)'
                        >
                            {data.nickName}
                        </Text>
                    </Flex>
                </CardBody>

                <CardFooter p={0}>
                    <Flex justify='space-between' w='100%'>
                        <Button
                            leftIcon={<CustomIcon12 iconType='subscribe' />}
                            colorScheme='myBlack'
                            variant='solid'
                            size={{ base: 'xs' }}
                        >
                            {AUTHOR_INFO_TEXT.button}
                        </Button>
                        <CustomIcon12
                            props={{ boxSize: '12px' }}
                            iconType='subscribers'
                            value={data.subscribers.toString()}
                        />
                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
    );
}
