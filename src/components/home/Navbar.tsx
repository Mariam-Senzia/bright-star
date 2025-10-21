import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaPhoneVolume } from "react-icons/fa6";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Box>
        <Container maxW="container.xl" padding="0">
          <Flex justifyContent="space-between" alignItems="center">
            <Box>
              <Image
                src="./bright-logo-cropped-no-bcground.png"
                alt="Bright Star Logo"
                width="16rem"
                height="5rem"
              />
            </Box>

            <Flex gap="25px" fontSize="1.1rem" fontWeight="600" color="#555">
              <Link
                href="/"
                color={pathname === "/" ? "#1239AC" : "#555"}
                textDecoration={pathname === "/" ? "underline" : "none"}
                textUnderlineOffset="8px"
                _hover={{
                  color: "#1239AC",
                  textDecorationLine: "5rem",
                  textDecoration: "underline",
                  textUnderlineOffset: "8px",
                }}
              >
                Home
              </Link>
              <Link
                href="services"
                color={pathname === "/services" ? "#1239AC" : "#555"}
                textDecoration={pathname === "/services" ? "underline" : "none"}
                textUnderlineOffset="8px"
                _hover={{
                  color: "#1239AC",
                  textDecoration: "underline",
                  textUnderlineOffset: "8px",
                }}
              >
                Services
              </Link>
              <Link
                href="contact"
                color={pathname === "/contact" ? "#1239AC" : "#555"}
                textDecoration={pathname === "/contact" ? "underline" : "none"}
                textUnderlineOffset="8px"
                _hover={{
                  color: "#1239AC",
                  textDecoration: "underline",
                  textUnderlineOffset: "8px",
                }}
              >
                Contact
              </Link>
            </Flex>

            <Flex alignItems="center" gap="10px">
              <Box>
                <FaPhoneVolume fontSize="2.2rem" color="#1239AC" />
              </Box>
              <Box>
                <Heading fontSize="lg" color="#555">
                  Quick Connect
                </Heading>
                <Text fontSize="xl" color="#1239AC">
                  0710852217
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
