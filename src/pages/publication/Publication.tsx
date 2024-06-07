import { FC } from "react";

import { Box, Flex, Heading, Text, Image, Button, IconButton, Grid, GridItem } from "@chakra-ui/react";
import { Tags_second } from "shared/tags/Tags_second";
import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Blog } from "pages/publication/blog/Blog";
import { Education } from "pages/publication/education/Education";
import { Experience } from "pages/publication/experience/Experience";
import { Skills } from "pages/publication/publication/Publication";
import { VolumeIcon } from "utils/Icons";
import { ArticleTitle } from "pages/about/common/title/Title";

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);

    const onPlay = () => {
        const audio = new Audio(configs.common.audioFile);
        audio.play();
    };

    return (
        <Box>
           
            <Content data-aos="fade-up" data-aos-delay="200" mb="5" fontSize="23px"  color="4A5568" fontStyle={"italic"} fontWeight={"bold"}>International </Content>
            <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={1} colSpan={1} w='100%' h='80%' bg='white'> 
                    <picture>
                        <source type="image/webp" srcSet={"/assets/other-projects/CMP_project1.jpeg"}></source>
                        <source type="image/jpeg"srcSet={"/assets/other-projects/CMP_project1.jpeg"}></source>
                        <Image src={"/assets/publication_img/1Publi_Understanding of cus.png"} w="100%" />
                    </picture>
                </GridItem>
            <GridItem rowSpan={1} colSpan={3} w='100%' h='100%'>
                        <Box pb="10">
                            {/* <Skills /> */}
                            {/* <ArticleTitle title="Understanding of Customer Decision-Making Behaviors Depending on Online Reviews" /> */}
                            <Content fontSize="18px" fontWeight={"bold"}>A Way for Deaf and Hard of Hearing People to Enjoy Music by Exploring and Customizing Cross-modal Music Concepts</Content>
                            <h1 style={{display:"inline"}}>Youjin Choi, Junryoel Jeon, ChungHa Lee, <h1 style={{display:"inline", textDecoration:"underline"}}>Yeo-Gyeong Noh</h1>, Jin-Hyuk Hong</h1>
                            <Content fontSize="md">CHI '24: Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems</Content>
                            <h1>Published: 2024 <a style={{color: "44546A", fontWeight:"700"}} href="">[doi]</a></h1>
                            <Tags_second id={`skills-tags-${"Keyword"}`} tags={["deaf and hard of hearing (DHH)", "music appreciation", "sensory substitution system", "conceptualization"]} />
                        </Box>
                </GridItem> 
            </Grid>


            <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={1} colSpan={1} w='100%' h='80%' bg='white'> 
                    <picture>
                        <source type="image/webp" srcSet={"/assets/publication_img/1Publi_Understanding of cus.png"}></source>
                        <source type="image/jpeg"srcSet={"/assets/publication_img/1Publi_Understanding of cus.png"}></source>
                        <Image src={"/assets/publication_img/1Publi_Understanding of cus.png"} w="100%" />
                    </picture>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} w='100%' h='100%'>
                        <Box pb="10">
                            {/* <Skills /> */}
                            {/* <ArticleTitle title="Understanding of Customer Decision-Making Behaviors Depending on Online Reviews" /> */}
                            <Content fontSize="18px" fontWeight={"bold"}>Understanding of Customer Decision-Making Behaviors Depending on Online Reviews</Content>
                            <h1 style={{display:"inline", textDecoration:"underline"}}>Yeo-Gyeong Noh</h1><h1 style={{display:"inline"}}>*, Junryeol Jeon, Jin-Hyuk Hong</h1>
                            <Content fontSize="md">Applied Sciences, Application of Artificial Intelligence Methods in Processing of Emotions, Decisions and Opinions</Content>
                            <h1>Published: 20 March 2023 <a style={{color: "44546A", fontWeight:"700"}} href="https://www.mdpi.com/2076-3417/13/6/3949">[doi]</a></h1>
                            <Tags_second id={`skills-tags-${"Keyword"}`} tags={["consumer decision-making", "star rating", "review comment", "sentiment analysis"]} />
                        </Box>
                </GridItem> 
            </Grid>
            <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={1} colSpan={1} w='100%' h='80%' bg='white'> 
                    <picture>
                        <source type="image/webp" srcSet={"/assets/publication_img/2Publi.png"}></source>
                        <source type="image/jpeg"srcSet={"/assets/publication_img/2Publi.png"}></source>
                        <Image src={"/assets/publication_img/2Publi.png"} w="100%" />
                    </picture>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} w='100%' h='100%'>
                        <Box pb="10">
                            <Content fontSize="18px" fontWeight={"bold"}>Designing Reenacted Chatbots to Enhance Museum Experience</Content>
                            {/* <ArticleTitle title="Designing Reenacted Chatbots to Enhance Museum Experience" /> */}
                            <h1 style={{display:"inline", textDecoration:"underline"}}>Yeo-Gyeong Noh</h1><h1 style={{display:"inline"}}>*, Jin-Hyuk Hong</h1>
                            <Content fontSize="md">Applied Sciences, Advanced Technologies in Digitizing Cultural Heritage</Content>
                            <h1>Published: 12 August 2021 <a style={{color: "44546A", fontWeight:"700"}} href="https://www.mdpi.com/2076-3417/11/16/7420">[doi]</a></h1>
                            <Tags_second id={`skills-tags-${"Keyword"}`} tags={["chatbot", "embodiment", "historical reenactment", "learning style", "museum experience"]} />
                        </Box>

                </GridItem> 
            </Grid>
            <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={1} colSpan={1} w='100%' h='80%' bg='white'> 
                    <picture>
                        <source type="image/webp" srcSet={"/assets/publication_img/3Publi.png"}></source>
                        <source type="image/jpeg"srcSet={"/assets/publication_img/3Publi.png"}></source>
                        <Image src={"/assets/publication_img/3Publi.png"} w="100%" />
                    </picture>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} w='100%' h='100%'>
                        <Box pb="10">
                            {/* <ArticleTitle title="Design Proposal for Sign Language Services in TV Broadcasting from the Perspective of People Who Are Deaf or Hard of Hearing" /> */}
                            <Content fontSize="18px" fontWeight={"bold"}>Design Proposal for Sign Language Services in TV Broadcasting from the Perspective of People Who Are Deaf or Hard of Hearing</Content>
                            <h1 style={{display:"inline"}}>Ji Hyun Yi, Songei Kim,</h1> <h1 style={{display:"inline", textDecoration:"underline"}}>Yeo-Gyeong Noh</h1><h1 style={{display:"inline"}}>, Jin-Hyuk Hong</h1>
                            <Content fontSize="md">Applied Sciences, State-of-the-Art in Human Factors and Interaction Design</Content>
                            <h1>Published: 25 November 2021 <a style={{color: "44546A", fontWeight:"700"}} href="https://www.mdpi.com/2076-3417/11/23/11211">[doi]</a></h1>
                            <Tags_second id={`skills-tags-${"Keyword"}`} tags={["deaf or hard-of-hearing (DHH)", "TV sign language service", "layout design"]} />
                        </Box>

                </GridItem> 
            </Grid>

            <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={1} colSpan={1} w='100%' h='80%' bg='white'> 
                    <picture>
                        <source type="image/webp" srcSet={"/assets/publication_img/4Publi.png"}></source>
                        <source type="image/jpeg"srcSet={"/assets/publication_img/4Publi.png"}></source>
                        <Image src={"/assets/publication_img/4Publi.png"} w="100%" />
                    </picture>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} w='100%' h='100%'>
                        <Box pb="10">
                            {/* <ArticleTitle title="Topic Recommendation to Expand Knowledge and Interest in Question-and-Answer Agents" /> */}
                            <Content fontSize="18px" fontWeight={"bold"}>Topic Recommendation to Expand Knowledge and Interest in Question-and-Answer Agents</Content>
                            <h1 style={{display:"inline"}}>Albert Deok-Young Yang, </h1> <h1 style={{display:"inline", textDecoration:"underline"}}>Yeo-Gyeong Noh</h1><h1 style={{display:"inline"}}>, Jin-Hyuk Hong</h1>
                            <Content fontSize="md">Applied Sciences, Human-Computer Interaction: Theory and Practice</Content>
                            <h1>Published: 8 November 2021 <a style={{color: "44546A", fontWeight:"700"}} href="https://www.mdpi.com/2076-3417/11/22/10600">[doi]</a></h1>
                            <Tags_second id={`skills-tags-${"Keyword"}`} tags={["context-aware services", "education technology", "learning management systems"]} />
                        </Box>

                </GridItem> 
            </Grid>

        
            <Content data-aos="fade-up" data-aos-delay="200" mb="5" fontSize="23px"  color="4A5568" fontStyle={"italic"} fontWeight={"bold"}>Domestic </Content>
            <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={1} colSpan={1} w='100%' h='80%' bg='white'> 
                    <picture>
                        <source type="image/webp" srcSet={"/assets/publication_img/1Dom.png"}></source>
                        <source type="image/jpeg"srcSet={"/assets/publication_img/1Dom.png"}></source>
                        <Image src={"/assets/publication_img/1Dom.png"} w="100%" />
                    </picture>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} w='100%' h='100%'>
                        <Box pb="10">
                            {/* <ArticleTitle title="A Study on the Analysis of Answers Preference by User Personality for Personalized Museum Chatbot Design" /> */}
                            <Content fontSize="18px" fontWeight={"bold"}>A Study on the Analysis of Answers Preference by User Personality for Personalized Museum Chatbot Design</Content>
                            <h1 style={{display:"inline", textDecoration:"underline"}}>Yeo-Gyeong Noh</h1><h1 style={{display:"inline"}}>*, Jin-Hyuk Hong</h1>
                            <Content fontSize="md">Proceeding of The HCI Society of Korea Conference</Content>
                            <h1>Published: Feburary 2023 <a style={{color: "44546A", fontWeight:"700"}} href="https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11229819&googleIPSandBox=false&mark=0&ipRange=false&b2cLoginYN=false&accessgl=Y&language=ko_KR&hasTopBanner=true">[doi]</a></h1>
                            <Tags_second id={`skills-tags-${"Keyword"}`} tags={["conversational agent", "personalized chatbot", "museum experience", "personality"]} />
                        </Box>

                </GridItem> 
            </Grid>

            <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={1} colSpan={1} w='100%' h='80%' bg='white'> 
                    <picture>
                        <source type="image/webp" srcSet={"/assets/publication_img/2Dom.png"}></source>
                        <source type="image/jpeg"srcSet={"/assets/publication_img/2Dom.png"}></source>
                        <Image src={"/assets/publication_img/2Dom.png"} w="100%" />
                    </picture>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} w='100%' h='100%'>
                        <Box pb="10">
                            {/* <ArticleTitle title="Comparative Study on Screen Design for Improving Hearing Impaired People's News Viewing Experience" /> */}
                            <Content fontSize="18px" fontWeight={"bold"}>Comparative Study on Screen Design for Improving Hearing Impaired People's News Viewing Experience</Content>
                            <h1 style={{display:"inline", textDecoration:"underline"}}>Yeo-Gyeong Noh</h1><h1 style={{display:"inline"}}>*, Songei Kim, Subin Ok, Junryeol Jeon, Jin-Hyuk Hong</h1>
                            <Content fontSize="md">Proceedings of the Korean Information Science Society Conference</Content>
                            <h1>Published: December 2020  <a style={{color: "44546A", fontWeight:"700"}} href="https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE10529852&googleIPSandBox=false&mark=0&ipRange=false&b2cLoginYN=false&accessgl=Y&language=ko_KR&hasTopBanner=true">[doi]</a></h1>
                            <Tags_second id={`skills-tags-${"Keyword"}`} tags={["deaf of hard-of-hearing", "news content", "screen design"]} />
                        </Box>

                </GridItem> 
            </Grid>

            <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={1} colSpan={1} w='100%' h='80%' bg='white'> 
                    <picture>
                        <source type="image/webp" srcSet={"/assets/publication_img/3Dom.png"}></source>
                        <source type="image/jpeg"srcSet={"/assets/publication_img/3Dom.png"}></source>
                        <Image src={"/assets/publication_img/3Dom.png"} w="100%" />
                    </picture>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} w='100%' h='100%'>
                        <Box pb="10">
                            {/* <ArticleTitle title="Maintenance and inventory history management application using NFC" /> */}
                            <Content fontSize="18px" fontWeight={"bold"}>Maintenance and inventory history management application using NFC</Content>
                            <h1 style={{display:"inline"}}> Seoyoung Lee, Junyong Jang, </h1> <h1 style={{display:"inline", textDecoration:"underline"}}>Yeo-Gyeong Noh</h1><h1 style={{display:"inline"}}>, Sungbae Jo</h1>
                            <Content fontSize="md">Proceedings of the Korean Information Science Society Conference</Content>
                            <h1>Published: December 2018  <a style={{color: "44546A", fontWeight:"700"}} href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=KzrZ7zAAAAAJ&citation_for_view=KzrZ7zAAAAAJ:u5HHmVD_uO8C">[doi]</a></h1>
                            <Tags_second id={`skills-tags-${"Keyword"}`} tags={["hybrid web/app", "NFC tagging", "management application"]} />
                        </Box>

                </GridItem> 
            </Grid>

            

            <Content data-aos="fade-up" data-aos-delay="200" mb="5" fontSize="23px"  color="4A5568" fontStyle={"italic"} fontWeight={"bold"}>Intellectual Property Right </Content>
            <Grid templateRows='repeat(1, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={1} colSpan={1} w='100%' h='80%' bg='white'> 
                    <picture>
                        <source type="image/webp" srcSet={"/assets/publication_img/1right.png"}></source>
                        <source type="image/jpeg"srcSet={"/assets/publication_img/1right.png"}></source>
                        <Image src={"/assets/publication_img/1right.png"} w="100%" />
                    </picture>
                </GridItem>
                <GridItem rowSpan={1} colSpan={3} w='100%' h='100%'>
                        <Box pb="10">
                            {/* <ArticleTitle title="Maintenance and inventory history management application using NFC" /> */}
                            <Content fontSize="18px" fontWeight={"bold"}>Inventory and maintenance history management using Near Field Communication</Content>
                            <h1 style={{display:"inline", textDecoration:"underline"}}>Yeo-Gyeong Noh</h1><h1 style={{display:"inline"}}>, Junyong Jang, Seoyoung Lee, Sungbae Jo</h1>
                            <Content fontSize="md">Corporate Registration Number : 171771-0003542</Content>
                            <Content fontSize="md">Korea Copyright Commission - Computer Program Works - Application Programs - Industrial Use - S/W</Content>
                            <h1>Registered: August 2018 </h1>
                            {/* <Tags_second id={`skills-tags-${"Keyword"}`} tags={["hybrid web/app", "NFC tagging", "management application"]} /> */}
                        </Box>

                </GridItem> 
            </Grid>
        
   
        
        </Box>
    );
};
