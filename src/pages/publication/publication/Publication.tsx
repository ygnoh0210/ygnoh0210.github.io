import { FC } from "react";

import { Box } from "@chakra-ui/react";

import { configs } from "shared/content/Content";
import { Tags } from "shared/tags/Tags";
import { ArticleTitle, SectionTitle } from "../common/title/Title";

export const Skills: FC = () => {
    return (
        <>
            {/* <ArticleTitle title="Papers" pb="2" /> */}

            <br />
            {configs.about.papers.map((paper) => (
                <Box p="" mb="12" key={`skills-${paper.title}`}>
                    <SectionTitle title={paper.title} />
                    <h1>{paper.authors}</h1>
                    <h1>{paper.publication}</h1>
                    <h1>{paper.date}</h1>
                    <Tags id={`skills-tags-${paper.title}`} tags={paper.tools} />
                </Box>
            ))}
        </>
    );
};
