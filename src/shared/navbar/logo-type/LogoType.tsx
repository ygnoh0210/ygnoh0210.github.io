import { FC } from "react";

import { Box, Flex, Text, Heading, useBreakpointValue, Button, IconButton } from "@chakra-ui/react";
import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { VolumeIcon } from "utils/Icons";
interface Props {
    text: {
        mobile: string;
        desktop: string;
    };
}

export const LogoType: FC<Props> = ({ text }) => {
    const variant = useBreakpointValue({ base: text.mobile, md: text.desktop });
    const onPlay = () => {
        const audio = new Audio(configs.common.audioFile);
        audio.play();
    };


    return (
        <Box transition="all 0.2s ease-in-out" _hover={{ cursor: "pointer", color: "primary.600" }}>
            <Text fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1" fontFamily="Signature" mb={{ base: 0, md: -2 }}>
                {variant}
            </Text>
        </Box>
    );
};
