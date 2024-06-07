import { FC, useState } from "react";

import { Accordion, AccordionItem } from "@chakra-ui/react";

import { configs, Content } from "shared/content/Content";
import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle } from "pages/about/common/title/Title";

export const Experience: FC = () => {
    const [experiencesExpanded, setExperiencesExpanded] = useState<number[]>([]);

    return (
        <>
           {/* <ArticleTitle title="Experiences" /> */}
           <Content data-aos="fade-up" data-aos-delay="500" fontSize="22" fontWeight="bold">Experience</Content>
            <br />
            <Accordion pt="0" allowMultiple index={experiencesExpanded} id="experiences_real">
                {configs.about.experiences_real.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${edu.school}-${edu.degree}`}>
                        <Expandable
                            title={edu.school}
                            subTitle={edu.degree}
                            content={edu.content}
                            date={edu.duration}
                            id={edu.id}
                            idx={idx}
                            onChange={setExperiencesExpanded}
                            expanded={experiencesExpanded}
                        />
                    </AccordionItem>
                ))}
            </Accordion>
            <hr></hr>
            {/* <ArticleTitle title="Certifications" /> */}
            <Content mt="6" data-aos="fade-up" data-aos-delay="500" fontSize="22" fontWeight="bold">Certification</Content>
            <br />
            <Accordion pt="0" allowMultiple index={experiencesExpanded}>
                {configs.about.certification.map((exp, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${exp.company}`}>
                        <Expandable
                            id={exp.id}
                            title={exp.company}
                            subTitle={exp.position}
                            date={exp.duration}
                            content={exp.description}
                            idx={idx}
                            onChange={setExperiencesExpanded}
                            expanded={experiencesExpanded}
                        />
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};
