import { FC, useState } from "react";

import { Center, Container, Heading, Image, HStack, Stack, Flex, Box, IconButton, Button } from "@chakra-ui/react";

import { Accordion, AccordionItem } from "@chakra-ui/react";

import { Content, configs, useContent, MarkdownFile } from "shared/content/Content";
import { Socials } from "shared/socials/Socials";
import { WorkPageId } from "utils/useScroll";
import { ChevronDownIcon } from "utils/Icons";
import { Skills } from "pages/about/skills/Skills";
import { Expandable } from "pages/about/common/expandable/Expandable";

export const Sidebar: FC = () => {
    const content = useContent(MarkdownFile.Landing);
    const [educationExpanded, setEducationExpanded] = useState<number[]>([]);

    return (
    <Container
        maxW="250px"
        alignItems="center"
        // flex="0.4"
        display={{ base: "none", lg: "block" }}
        mr="0"
        ml="0"
        pl="0"
        pr="0"
        pt="8"
        // data-aos="fade-up"
        // data-aos-delay="400"
    >
        <Stack spacing="5">
            {/* <picture>
                <source type="image/webp" src={configs.landing.picture}></source>
                <source type="image/jpeg" src={configs.landing.jpg}></source>
                <Image mb="5" borderRadius="70px" src={configs.landing.jpg} alt={`face-cover-image`} />
            </picture> */}
            {/* <Heading
                fontSize={{ base: "5xl", md: "7xl" }}
                lineHeight="1"
                // data-aos="fade-down"
                // data-aos-delay="400"
            >
                {configs.landing.headline}
            </Heading> */}
            <hr></hr>
            <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg" fontWeight="bold"> Education </Content>
          
            <Accordion pt="0" allowMultiple index={educationExpanded} id="education">
                {configs.about.educations.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${edu.school}-${edu.degree}`}>
                        <Expandable
                            title={edu.school}
                            subTitle={edu.degree}
                            content={edu.content}
                            date={edu.duration}
                            id={edu.id}
                            idx={idx}
                            onChange={setEducationExpanded}
                            expanded={educationExpanded}
                        />
                    </AccordionItem>
                ))}
            </Accordion>
            
            <hr></hr>
            <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg" fontWeight="bold"> Research Area </Content>
       
            <Content pt="1" pb="1" data-aos="fade-up" data-aos-delay="500" fontSize="lg">
                {content.landing}
            </Content>
            <hr></hr>
            {/* <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg" fontWeight="bold"> Skills </Content> */}
            <Skills/>
            <hr></hr>
            <Box pt="0">
                
            <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg" fontWeight="bold"> Contact </Content>
                <Socials delay={100} resume={false}  />
            </Box>
            <hr></hr>
            
        </Stack>

    </Container>
    );
};
