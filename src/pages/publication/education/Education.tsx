import { FC, useState } from "react";

import { Accordion, AccordionItem } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle } from "pages/about/common/title/Title";

export const Education: FC = () => {
    const [educationExpanded, setEducationExpanded] = useState<number[]>([]);

    return (
        <>
            <ArticleTitle title="Education" />

            <br />

            <Accordion pt="2" allowMultiple index={educationExpanded} id="education">
                {configs.about.educations.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="8" key={`panel-${edu.school}-${edu.degree}`}>
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
            {/* <ArticleTitle title="Experiences" />
            <br />
            <Accordion pt="2" allowMultiple index={educationExpanded} id="experiences_real">
                {configs.about.experiences_real.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="8" key={`panel-${edu.school}-${edu.degree}`}>
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
            </Accordion> */}
            
        </>
    );
};
