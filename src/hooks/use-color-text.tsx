import { Text } from '@chakra-ui/react';

export const useColorText = (title: string, searchQuery: string) => {
    const colorText = () => {
        if (!searchQuery) {
            return (
                <Text as='span' color='#000000'>
                    {title}
                </Text>
            );
        }

        const regex = new RegExp(`(${searchQuery})`, 'gi');
        const parts = title.split(regex);

        return parts.map((part, index) =>
            regex.test(part) ? (
                <Text as='span' color='#2db100' key={index}>
                    {part}
                </Text>
            ) : (
                <Text as='span' color='#000000' key={index}>
                    {part}
                </Text>
            ),
        );
    };

    return colorText();
};
