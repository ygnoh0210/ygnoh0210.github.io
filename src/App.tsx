import { FC, useEffect, lazy, Suspense } from "react";

import { Box, Container, Center, Spinner, HStack, Text, Button, IconButton} from "@chakra-ui/react";
import AOS from "aos";
import { VolumeIcon } from "utils/Icons";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { NavbarHeight } from "theme";
import { AboutPageId, WorkPageId, HomeId } from "utils/useScroll";

import "./App.scss";
import "aos/dist/aos.css";

const Navbar = lazy(() => import("shared/navbar/Navbar").then((module) => ({ default: module.Navbar })));
const Sidebar = lazy(() => import("pages/sidebar/Sidebar").then((module) => ({ default: module.Sidebar })));
const Landing = lazy(() => import("pages/landing/Landing").then((module) => ({ default: module.Landing })));
const PageHeader = lazy(() =>
    import("shared/page-header/PageHeader").then((module) => ({ default: module.PageHeader })),
);
const Footer = lazy(() => import("shared/footer/Footer").then((module) => ({ default: module.Footer })));
const FeaturedProjects = lazy(() =>
    import("pages/featured-projects/FeaturedProjects").then((module) => ({
        default: module.FeaturedProjects,
    })),
);
const OtherProjects = lazy(() =>
    import("pages/other-projects/OtherProjects").then((module) => ({
        default: module.OtherProjects,
    })),
);
const About = lazy(() => import("pages/about/About").then((module) => ({ default: module.About })));
const Publication = lazy(() => import("pages/publication/Publication").then((module) => ({ default: module.About })));

const Loader: FC = () => (
    <Center w="100%" h="100%">
        <Spinner size="lg" color="primary.500" />
    </Center>
);


const onPlay = () => {
    const audio = new Audio(configs.common.audioFile);
    audio.play();
};

export const App: FC = () => {

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <Suspense fallback={<Loader />}>

            <Container h="100%" px={{ base: 6, md: 6, lg: 4 }}>
                <Navbar />
                <Box mt={{ base: "75px" }}>
                    <HStack spacing="6" justifyContent="space-between" alignItems="flex-start" >
                        <Sidebar />
                        <Container maxW="5xl">
                            
                            <Box pt="8" id={HomeId}> 
                            {/* <Content>Hi there 👋🏻 nice to meet you! </Content>   */}
                            {/* <Text fontSize="25px" mt="0" mb="0" fontWeight="bold" opacity="0.5" data-aos="fade" data-aos-delay="200">
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
                        </Text> */}
                                <About/> 
                                
                            </Box>
                            {/* <Landing /> */}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Box id={AboutPageId}>
                                {/* <About /> */}
                                <PageHeader id="publications" label="Publication  " />
                                <Publication/>
                            </Box>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Box id={WorkPageId}>
                                {/* <PageHeader label="Projects" />
                                <FeaturedProjects /> */}

                                <PageHeader id="page-other-projects" label="Project  " />
                                <OtherProjects />
                            </Box>
                        </Container>
                    </HStack>
                </Box>

                <Footer />
            </Container>
        </Suspense>
    );
};
