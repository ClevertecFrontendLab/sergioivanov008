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
            w={{ xl: '668px' }}
        >
            <CardHeader>
                <Avatar size='xl' name={`${data.firstName} ${data.lastName}`} src={data.image} />{' '}
            </CardHeader>

            <Stack
                py={{ xl: '24px' }}
                pr={{ xl: '24px' }}
                pl={{ xl: '16px' }}
                spacing={{ xl: '16px' }}
                w='100%'
            >
                <CardBody p={0}>
                    <Flex direction='column' gap={{ xl: '4px' }}>
                        <Flex justify='space-between' align='center' p={0}>
                            <Text fontWeight={700} fontSize='24px' lineHeight='133%'>
                                {`${data.firstName} ${data.lastName}`}
                            </Text>
                            <Text fontWeight={400} fontSize='14px' lineHeight='143%'>
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
