import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Box
        bgImage="linear-gradient(rgba(18,57,172,0.35), rgba(10,20,60,0.55)),url('/hero/hero.webp')"
        bgSize="cover"
        bgPosition="center, 60% bottom"
        height="92vh"
      >
        <Container
          maxW="container.xl"
          height="92vh"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box
            borderLeftColor="#fff"
            borderLeftWidth="0.4rem"
            paddingLeft="2rem"
          >
            <Heading fontSize="1rem" color="#fff" textTransform="uppercase">
              Cleaning & Pest control
            </Heading>
            <Heading
              width="80%"
              fontSize="6rem"
              color="#fff"
              marginBottom="-1rem"
            >
              Best Cleaning Service in Town!
            </Heading>
          </Box>

          <Box>
            <Text width="65%" fontSize="1.5rem" mt="4rem" color="#eee">
              We are a professional cleaning and pest control service provider
              based in Busia. We deliver quality, reliable, and affordable
              cleaning services to homes and offices with a trained team and
              eco-friendly cleaning products.
            </Text>
          </Box>

          <Box display="flex" gap="1rem" alignItems="center" mt="3rem">
            <Box display="flex">
              <Image
                src="/hero/happy-cust-5.webp"
                alt="happy-customer"
                width="3.5rem"
                height="3.5rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="top"
                style={{
                  border: "3px solid #fff",
                }}
              />

              <Image
                src="/hero/happy-cust-1.webp"
                alt="happy-customer"
                ml="-15px"
                width="3.5rem"
                height="3.5rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="top"
                style={{
                  border: "3px solid #fff",
                }}
              />

              <Image
                src="/hero/happy-cust-4.webp"
                alt="happy-customer"
                ml="-15px"
                width="3.5rem"
                height="3.5rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="top"
                style={{
                  border: "3px solid #fff",
                }}
              />

              <Image
                src="/hero/happy-cust-2.webp"
                alt="happy-customer"
                ml="-15px"
                width="3.5rem"
                height="3.5rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="center"
                style={{
                  border: "3px solid #fff",
                }}
              />

              <Image
                src="/hero/happy-cust-6.webp"
                alt="happy-customer"
                ml="-15px"
                width="3.5rem"
                height="3.5rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="center"
                style={{
                  border: "3px solid #fff",
                }}
              />

              <Image
                src="/hero/happy-cust-3.webp"
                alt="happy-customer"
                ml="-15px"
                width="3.5rem"
                height="3.5rem"
                borderRadius="50%"
                objectFit="cover"
                objectPosition="center"
                style={{
                  border: "3px solid #fff",
                }}
              />
            </Box>

            <Box color="#fff">
              <Text fontSize="1.3rem">
                <span style={{ color: "#F7C02D" }}>1,000+ </span>happy
                customers!
              </Text>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" mt="3rem" gap="2rem">
            <Link href="/services">
              <Button
                fontSize="1.1rem"
                py="1.5rem"
                px="2rem"
                bgColor="#F7C02D"
                rightIcon={<ArrowForwardIcon />}
                transition="all 0.25s ease-in-out"
                _hover={{
                  bgColor: "#e0aa25",
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 15px rgba(247, 192, 45, 0.4)",
                }}
                _active={{
                  transform: "translateY(0)",
                  boxShadow: "0 3px 8px rgba(247, 192, 45, 0.3)",
                }}
              >
                Our Services
              </Button>
            </Link>

            <Text color="#eee" fontSize="1.1rem">
              Need help?
            </Text>

            <Link
              href="/contact"
              color="#eee"
              fontSize="1.1rem"
              transition="all 0.3s ease"
              _hover={{
                color: "#F7C02D",
                transform: "translateY(-2px)",
              }}
              ml="-1.5rem"
            >
              <span style={{ color: "#F7C02D", fontWeight: "bold" }}>
                Contact Us
              </span>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
