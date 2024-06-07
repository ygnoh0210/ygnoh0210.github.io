import { FC } from "react";

import { Box, Flex, Heading, Text, Image, Button, IconButton } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Blog } from "pages/about/blog/Blog";
import { Education } from "pages/about/education/Education";
import { Experience } from "pages/about/experience/Experience";
import { Skills } from "pages/about/skills/Skills";
import { VolumeIcon } from "utils/Icons";

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);

    const onPlay = () => {
        const audio = new Audio(configs.common.audioFile);
        audio.play();
    };

    return (
        <Box>
            <Flex pt="2" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35" data-aos="fade-up">
                    <picture>
                        <source type="image/webp" srcSet={configs.common.mainPicture}></source>
                        <source type="image/jpeg" srcSet={configs.common.mainPictureJPG}></source>
                        <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" alt="profile image" />
                    </picture>
                </Box>
                <Box flex="1">
                <Text fontSize="25px" mt="0" mb="0" fontWeight="bold" opacity="0.5" data-aos="fade" data-aos-delay="200">
                            Hi, I am Yeo-Gyeong Noh 
                            <Button
                            size="xs"
                            aria-label="pronunciation button"
                            as={IconButton}
                            variant="icon"
                            fontSize="md"
                            icon={<VolumeIcon />}
                            onClick={onPlay}
                            data-aos="fade"
                            data-aos-delay="400"
                        /> 
                        </Text>
                    {/* <Heading data-aos="fade-down" fontSize={"45px"}>{configs.common.name}</Heading>
                    <Flex alignItems="center">
                        <Text fontWeight="bold" opacity="0.5" data-aos="fade" data-aos-delay="200">
                            {configs.common.pronunciation}
                        </Text>
                        
                        <Button
                            size="xs"
                            aria-label="pronunciation button"
                            as={IconButton}
                            variant="icon"
                            fontSize="md"
                            icon={<VolumeIcon />}
                            onClick={onPlay}
                            data-aos="fade"
                            data-aos-delay="400"
                        />
                    </Flex> */}
                    <Box pt="0" data-aos="fade-up" data-aos-delay="400">
                        <Content fontSize="20px">{content.about}</Content>
                        <h1 style={{fontSize:"20px"}}>  I majored in computer science and used it as a foundation for my research in Human-Computer Interaction. I am particularly interested in <h1 style={{display:"inline", fontWeight:'bold'}}>user modeling</h1> and <h1 style={{display:"inline", fontWeight:'bold'}}>AI-powered applications</h1>. Specifically, my main research interests include understanding users with <h1 style={{display:"inline", fontWeight:'bold'}}>linguistic aspects</h1> and designing <h1 style={{display:"inline", fontWeight:'bold'}}>conversational agent</h1>.</h1>
                    </Box>
                </Box>
            </Flex>
            {/* <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="10"
                justifyContent="space-between"
            >
                <Box flex="0.6" flexShrink={0} overflow="hidden">
                    <Education />
                </Box>
                <Box flex="0.6" overflow="hidden">
                    <Experience />
                </Box>
            </Flex> */}
            {/* <Box pt="0">
                <Skills />
            </Box> */}
            {/* <Box pt="2">
                <Blog />
            </Box> */}
        </Box>
    );
};
