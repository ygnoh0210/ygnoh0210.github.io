import { FC } from "react";

import { Center, Container, Heading, Image, HStack, Stack, Flex, Box, IconButton, Button } from "@chakra-ui/react";

import { Content, configs, useContent, MarkdownFile } from "shared/content/Content";
import { Socials } from "shared/socials/Socials";
import { WorkPageId } from "utils/useScroll";
import { ChevronDownIcon } from "utils/Icons";

export const Landing: FC = () => {
    const content = useContent(MarkdownFile.Landing);

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById(WorkPageId);

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box id="page-landing">
            <Center pb={{ base: 16, md: 32 }}>
                <Stack flex={{ base: "5"}} spacing="16">
                    <Stack spacing="8">
                        <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg">
                            {content.landing}
                        </Content>
                        
                    </Stack>
                    <Socials delay={1000} />
                </Stack>
            </Center>
            <Flex justifyContent="center" data-aos="fade" data-aos-delay="1400">
                <Button
                    as={IconButton}
                    fontSize="3xl"
                    variant="icon"
                    aria-label="down arrow button"
                    icon={<ChevronDownIcon />}
                    onClick={scrollIntoView}
                ></Button>
            </Flex>
        </Box>
    );
};
