import { FC, useRef } from "react";

import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    StyleProps,
    Flex,
    VStack,
    useColorModeValue,
} from "@chakra-ui/react";

import { ColorModeButton } from "shared/color-mode-button/ColorModeButton";
import { AboutPageId, WorkPageId, HomeId } from "utils/useScroll";

import { MenuIcon } from "utils/Icons";
import { Socials } from "shared/socials/Socials";
import { onResumeOpen } from "utils/Functions";

export const open = (link: string) => window.open(link, "_blank");
interface Props extends StyleProps {
    onSectionClick: (section: string) => void;
    currentPage: string;
}

export const MenuDrawer: FC<Props> = ({ onSectionClick, currentPage, ...props }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<any>(null);
    const navItemColor = useColorModeValue("gray.800", "white");

    return (
        <Box {...props}>
            <Button
                as={IconButton}
                variant="icon"
                ref={btnRef}
                onClick={onOpen}
                aria-label="open drawer"
                fontSize="lg"
                color="primary.500"
                icon={<MenuIcon />}
                px="0"
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose} autoFocus={false}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader px="4">
                        <Flex justifyContent="space-between">
                            <ColorModeButton />
                            <DrawerCloseButton position="relative" top="0" right="0" />
                        </Flex>
                    </DrawerHeader>

                    <DrawerBody>
                        <VStack spacing="6" my="16">
                            <Button
                                variant="link"
                                color={navItemColor}
                                textDecoration="primary.500"
                                textDecorationThickness="2px"
                                textDecorationColor={currentPage === AboutPageId ? "underline" : "transparent"}
                                onClick={() => {
                                    onClose();
                                    setTimeout(() => {
                                        onSectionClick(HomeId);
                                    }, 250);
                                }}
                                data-aos="fade"
                                data-aos-delay="200"
                                fontWeight="600"
                                fontSize="2xl"
                            >
                                Profile
                            </Button>
                            <Button
                                variant="link"
                                color={navItemColor}
                                textDecoration={currentPage === WorkPageId ? "primary.500" : "none"}
                                textDecorationThickness="2px"
                                textDecorationColor="underline"
                                onClick={() => {
                                    onClose();
                                    setTimeout(() => {
                                        onSectionClick(AboutPageId);
                                    }, 250);
                                }}
                                data-aos="fade"
                                data-aos-delay="300"
                                fontWeight="600"
                                fontSize="2xl"
                            >
                                Publication
                            </Button>
                            <Button
                                variant="link"
                                color={navItemColor}
                                textDecoration={currentPage === WorkPageId ? "primary.500" : "none"}
                                textDecorationThickness="2px"
                                textDecorationColor="underline"
                                onClick={() => {
                                    onClose();
                                    setTimeout(() => {
                                        onSectionClick(WorkPageId);
                                    }, 250);
                                }}
                                data-aos="fade"
                                data-aos-delay="300"
                                fontWeight="600"
                                fontSize="2xl"
                            >
                                Project
                            </Button>
                            
                            <Button
                                variant="link"
                                color="primary.500"
                                // onClick={onResumeOpen}
                                onClick={() => open("https://scholar.google.co.kr/citations?user=KzrZ7zAAAAAJ&hl")}
                                data-aos="fade"
                                data-aos-delay="400"
                                fontWeight="600"
                                fontSize="2xl"
                            >
                                Google Scholar
                            </Button>
                            {/* <Button variant="link" onClick={() => open("https://scholar.google.co.kr/citations?user=KzrZ7zAAAAAJ&hl")} data-aos="fade" data-aos-delay="400">
                                Google Scholar
                            </Button> */}
                        </VStack>
                        <Flex justifyContent="center" mt="16">
                            <Socials delay={100} resume={false} />
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};
