import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Box bgImage="url('./hero-background.webp')" bgSize="cover" height="95vh">
        <Navbar />
        <Container maxW="container.xl" display="flex">
          <Box flex="3">
            <Heading>Best Cleaning Service in Town!</Heading>
            <Text>
              We are a professional cleaning and pest control service provider
              based in Busia. We deliver quality, reliable, and affordable
              cleaning services to homes and offices with a trained team and
              eco-friendly cleaning products.
            </Text>
          </Box>

          <SimpleGrid columns={2} spacing="40px" flex="3">
            <Box>
              <Image
                src="./woman-holding-bucket-comp.webp"
                alt=""
                width="100%"
                height="18rem"
                borderRadius="12px"
                objectFit="cover"
              />
            </Box>
            <Box>
              <Image
                src="./public/pest-control-2-comp.webp"
                alt=""
                width="100%"
                height="18rem"
                borderRadius="12px"
                objectFit="cover"
                objectPosition="right"
              />
            </Box>

            <Box>
              <Image
                src="./pest-control-comp.webp"
                alt=""
                width="100%"
                height="15rem"
                borderRadius="12px"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box>
              <Image
                src="./cleaning-stuff.webp"
                alt=""
                width="100%"
                height="18rem"
                borderRadius="12px"
                objectFit="cover"
              />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
