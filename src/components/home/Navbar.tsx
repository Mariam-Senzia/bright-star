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

const Navbar = () => {
  return (
    <>
      <Box bgColor={"pink"}>
        <Container maxW={"container.xl"} bgColor={"#eee"} padding={0}>
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box>
              <Image
                src="./bright-logo-cropped-no-bcground.png"
                alt="Bright Star Logo"
                width={"16rem"}
                height={"6rem"}
              />
            </Box>

            <Flex gap={"25px"}>
              <Link href="">Home</Link>
              <Link href="">Services</Link>
              <Link href="">Contact</Link>
            </Flex>

            <Flex alignItems={"center"} gap="8px">
              <Box>
                <FaPhoneVolume fontSize={"2rem"} />
              </Box>
              <Box>
                <Heading fontSize={"2xl"}>Quick Connect</Heading>
                <Text>0705799614</Text>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
