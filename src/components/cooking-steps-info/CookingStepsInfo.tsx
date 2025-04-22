import { Badge, Card, CardBody, Flex, Image, Stack, Text } from '@chakra-ui/react';

import { CookingStepsInfoPropsType } from '~/components/types';
import { COOKINGSTEPS_INFO_TEXT } from '~/constants';

export function CookingStepsInfo({ data }: CookingStepsInfoPropsType) {
    return (
        <Flex
            direction='column'
            mx='auto'
            gap='20px'
            mb={{ base: '24px', lg: '40px' }}
            w={{ md: '604px', lg: '578px', xl: '668px' }}
        >
            <Flex justify='flex-start'>
                <Text
                    fontWeight={500}
                    fontSize={{ base: '24px', lg: '48px' }}
                    lineHeight={{ base: '133%', lg: '100%' }}
                    color='rgba(0, 0, 0, 0.8)'
                >
                    {COOKINGSTEPS_INFO_TEXT.title}
                </Text>
            </Flex>

            {data.map((el, index) => (
                <Card
                    direction='row'
                    overflow='hidden'
                    variant='outline'
                    borderRadius='8px'
                    maxH={{ xl: '244px' }}
                >
                    {el.image && (
                        <Image
                            objectFit='cover'
                            maxW={{ base: '158px', lg: '346px' }}
                            h={{ base: '128px', lg: '244px' }}
                            src={el.image}
                            alt={el.description}
                        />
                    )}

                    <Stack
                        px={{ base: '8px', lg: '24px' }}
                        spacing={{ base: '20px', lg: '24px' }}
                        w='100%'
                    >
                        <CardBody px={0}>
                            <Flex direction='column' gap={{ base: '8px', md: '12px', lg: '16px' }}>
                                <Flex justify='space-between' align='center' h='24px' p={0}>
                                    <Badge
                                        textTransform='none'
                                        px='8px'
                                        borderRadius='4px'
                                        bg={
                                            index === data.length - 1
                                                ? '#ffffd3'
                                                : 'rgba(0, 0, 0, 0.06)'
                                        }
                                    >
                                        {`${COOKINGSTEPS_INFO_TEXT.step} ${el.stepNumber}`}
                                    </Badge>
                                </Flex>

                                <Flex direction='column' gap={{ xl: '24px' }}>
                                    <Text fontWeight={400} fontSize='14px' lineHeight='143%'>
                                        {el.description}
                                    </Text>
                                </Flex>
                            </Flex>
                        </CardBody>
                    </Stack>
                </Card>
            ))}
        </Flex>
    );
}
