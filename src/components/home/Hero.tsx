import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Box
        bgImage="linear-gradient(rgba(18,57,172,0.35), rgba(10,20,60,0.55)),url('/hero/hero.webp')"
        bgSize="cover"
        bgPosition="center"
        height="92vh"
      >
        <Container maxW="container.xl">
          <Box flex="3" color="#fff">
            <Heading width="80%" fontSize="6rem">
              Best Cleaning Service in Town!
            </Heading>
            <Text width="60%" fontSize="1.5rem">
              We are a professional cleaning and pest control service provider
              based in Busia. We deliver quality, reliable, and affordable
              cleaning services to homes and offices with a trained team and
              eco-friendly cleaning products.
            </Text>
          </Box>

          <Box display="flex">
            <Box
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              background="#fff"
              p="0.2rem"
            >
              <Image
                src="/hero/happy-cust-5.webp"
                alt="happy-customer"
                width="4rem"
                height="4rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              ml="-15px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              background="#fff"
              p="0.2rem"
            >
              <Image
                src="/hero/happy-cust-1.webp"
                alt="happy-customer"
                width="4rem"
                height="4rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              ml="-15px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              background="#fff"
              p="0.2rem"
            >
              <Image
                src="/hero/happy-cust-4.webp"
                alt="happy-customer"
                width="4rem"
                height="4rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="top"
              />
            </Box>
            <Box
              ml="-15px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              background="#fff"
              p="0.2rem"
            >
              <Image
                src="/hero/happy-cust-2.webp"
                alt="happy-customer"
                width="4rem"
                height="4rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
            <Box
              ml="-15px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              background="#fff"
              p="0.2rem"
            >
              <Image
                src="/hero/happy-cust-6.webp"
                alt="happy-customer"
                width="4rem"
                height="4rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>

            <Box
              ml="-15px"
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              background="#fff"
              p="0.2rem"
            >
              <Image
                src="/hero/happy-cust-3.webp"
                alt="happy-customer"
                width="4rem"
                height="4rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="center"
              />
            </Box>

            <Box color="#fff">
              <Text fontSize="1.3rem">
                <span style={{ color: "#F7C02D" }}>1,000+ </span>happy
                customers!
              </Text>
            </Box>
          </Box>

          <Box>
            <Button>Our Services</Button>
            <Button>Contact Us</Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
