import { FC } from "react";

import { Box } from "@chakra-ui/react";

import { configs, Content } from "shared/content/Content";
import { Tags } from "shared/tags/Tags";
import { ArticleTitle, SectionTitle } from "../common/title/Title";

export const Skills: FC = () => {
    return (
        <>
            
            {configs.about.skills.map((skill) => (
                <Box pt="0" mb="0" key={`skills-${skill.title}`}>
                    {/* <SectionTitle title={skill.title} /> */}
                    <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg" fontWeight="bold">Skills</Content>
                    {/* <Content data-aos="fade-up" data-aos-delay="500" fontSize="15px">Programming and Framework</Content> */}
                    <Tags id={`skills-tags-${skill.title}`} tags={skill.tools} />
                </Box>
            ))}
        </>
    );
};
