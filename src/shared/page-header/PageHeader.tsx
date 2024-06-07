import { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

interface Props {
    id?: string;
    label: string;
}
export const PageHeader: FC<Props> = ({ id, label }) => {
    const borderColor = "grey";

    return (
        <Box
            // w='100%'
            // h='3px'
            // bgGradient={'linear(to-r,  primary.700, white)'}
            id={id}
            pt={{ base: "4", md: "4" }}
            pb="10"
            
            _after={{
                display: "inline-block",
                content: "''",
                borderBottom: "2px solid ",
                borderColor,
                width: "80%",
                margin: "auto",
                marginRight: "0.5rem",
                transform: "translateY(-0.35rem)",
            }}
            textTransform="uppercase"
            fontSize="25"
        >
            <Text as="span" color={borderColor} fontWeight="900">
                {label}
            </Text>
        </Box>
    );
};
