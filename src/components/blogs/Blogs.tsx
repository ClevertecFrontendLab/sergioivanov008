import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';

import { BlogsItem } from '~/components';
import { BLOGS_DATA, BTN_TEXT, TITLES } from '~/constants';

export function Blogs() {
    return (
        <Flex backgroundColor='#c4ff61' direction='column' gap={8} p='24px'>
            <Flex justify='space-between' align='center'>
                <Heading fontWeight={400} fontSize={36} lineHeight='111%'>
                    {TITLES.blogs}
                </Heading>
                <Button
                    rightIcon={<ArrowForwardIcon />}
                    colorScheme='myGreen'
                    variant='ghost'
                    color='black'
                    size='lg'
                >
                    {BTN_TEXT.allSelection}
                </Button>
            </Flex>
            <Flex gap={4}>
                {BLOGS_DATA.map((el) => (
                    <BlogsItem key={el.id} data={el} />
                ))}
            </Flex>
        </Flex>
    );
}
