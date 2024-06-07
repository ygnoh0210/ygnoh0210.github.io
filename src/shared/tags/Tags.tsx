import { FC } from "react";

import { Flex, Box, Badge, ColorHues } from "@chakra-ui/react";



interface Props {
    id: string;
    tags: Array<string>;
    size?: string;
    delay?: number;
}

export const Tags: FC<Props> = ({ id, tags, size = "sm" }) => { 
    return (
        <Flex py="2" wrap="wrap" gap="4">
            {tags.map((tag, idx) => (
                <Box data-aos="flip-left" data-aos-delay={idx * 50} key={`${id}-tag-${tag}`}>
                    <Badge
                        transition="0.2s ease-in-out"
                        transitionProperty="primary.50, color"
                        // _hover={{ color: "white", bg: "primary.200" }}
                        textTransform="none"
                        // variant='solid'
                        // colorScheme="default"
                        color="g"
                        borderRadius="md"
                        px="8px"
                        py="1px"
                        fontSize={size}
                        fontWeight="600"
                    >
                        {tag}
                    </Badge>
                </Box>
            ))}
        </Flex>
    );
};
