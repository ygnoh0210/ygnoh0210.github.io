import { FC } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup';
import { Image, Box, Badge, Flex, Heading, Text, HStack, Center} from "@chakra-ui/react";


import { Tags } from "shared/tags/Tags";
import { ProjectCardFooter } from "shared/project-card-footer/ProjectCardFooter";

interface Props {
    id: string;
    title: string;
    demo?: string;
    github?: string;
    tags: string[];
    description: string;
    readMore?: string;
    image: string;
    jpg: string;
    year: string;
    recent:string;
}

export const OtherProjectCard: FC<Props> = ({ id, title, demo, github, tags, description, readMore, image, jpg, year, recent}) => {

  function new_badge(recent_yn: string){
    if(recent_yn=="yes"){
      return  <Badge borderRadius='full' px='2' colorScheme='teal'> New </Badge>
    } else{
      return null;
    }
};
    return (
        <Flex
        alignItems={{ base: "flex-start", lg: "center" }}
        gap="10"
        id={`other-project-card-${id}`}
        py={{ base: "4", md: "4" }}
        
        >
        
        <Box minWidth="250px" maxW='800px' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='2xl'>
        {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */
                  <Center>
                  <picture>
                  <source type="image/webp" srcSet={image}></source>
                  <source type="image/jpeg" srcSet={jpg}></source>
                  <Image ignoreFallback src={image} borderRadius="xl" alt={`${title}-cover-image`} />
                </picture>
                </Center>
        }
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline' >
            <div>
            {
              recent === "yes"
              ? <Badge borderRadius='full' px="2" mr='2' colorScheme='teal'> New </Badge>
              : null
            }
            </div>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
            >
            {year}
            </Box>
          </Box>
  
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            <Heading fontSize="xl" data-aos="fade-down" data-aos-offset="200">
              {title}
            </Heading>
          </Box>
  
          <Box>
            <Text py="2" data-aos="fade" data-aos-delay="200" data-aos-offset="200">
              {description}
            </Text>
            <Tags tags={tags} id={id} size="xs" />
          </Box>
        </Box>
      </Box>
      
     </Flex>
        
       
    );
};
