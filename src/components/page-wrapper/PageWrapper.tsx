import { Flex } from '@chakra-ui/react';

export function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <Flex
            direction='column'
            pl={{ base: '16px', md: '20px', lg: '24px' }}
            pr={{ base: '16px', md: '20px', lg: '24px' }}
            minH='100vh'
        >
            {children}
        </Flex>
    );
}
