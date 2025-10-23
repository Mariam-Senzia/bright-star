import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import useServices from "../../hooks/useServices";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const HomeServices = () => {
  const services = useServices();

  return (
    <>
      <Box>
        <Container maxW="container.xl" paddingTop="5rem" paddingBottom="5rem">
          <Box textAlign="center">
            <Heading fontSize="2rem" mb="0.3rem">
              Cleaning Solutions for Every Space
            </Heading>
            <Text fontSize="1.2rem" color="#333">
              Expert cleaning solutions designed to make your spaces shine and
              your life easier.
            </Text>
          </Box>

          <Grid
            gridTemplateColumns="repeat(3, 1fr)"
            paddingTop="4rem"
            rowGap="2rem"
          >
            {services.map((item) => {
              return (
                <Card maxW="sm" borderWidth="0.05rem" borderColor="#eee">
                  <CardBody>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width="100%"
                      height="15rem"
                      borderRadius="lg"
                      objectFit="cover"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{item.title}</Heading>
                      <Text color="#333">{item.description}</Text>
                    </Stack>
                  </CardBody>
                  <Divider borderColor="#ddd" />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button
                        variant="link"
                        colorScheme="blue"
                        rightIcon={<ArrowForwardIcon />}
                        color="#333"
                      >
                        View more
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HomeServices;
