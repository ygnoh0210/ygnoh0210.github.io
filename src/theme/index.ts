import { ThemeConfig, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { PrimaryColors, PrimaryDarkColors } from "theme/colors/Colors";
import { components } from "theme/component-styles/ComponentStyles";

const config: ThemeConfig = {
    cssVarPrefix: "hp",
};

const fonts = {
    body: "'Source Sans', sans-serif",
    heading: "'Source Sans', sans-serif",
};

const colors = {
    primary: {
        ...PrimaryColors,
    },
    gray: {
        ...PrimaryDarkColors,
    },
};

export const bgLight = "white";
export const bgDark = "gray.800";
export const NavbarHeight = "144px";

export const theme = extendTheme(
    {
        config,
        colors,
        fonts,
        components,
    },
    withDefaultColorScheme({ colorScheme: "primary" }),
);
