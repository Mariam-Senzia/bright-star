import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useStats from "../../hooks/useStats";
import { AddIcon } from "@chakra-ui/icons";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Statistics = () => {
  const stats = useStats();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box bgGradient="linear(to-b, #f9fafc, #f2f4f8)">
      <Container maxW="container.xl">
        {/* <Box textAlign="center" paddingTop="3rem">
          <Heading fontSize="2rem" mb="0.5rem">
            Our Impact in Numbers
          </Heading>
          <Text fontSize="1.2rem">
            We have been making homes and offices cleaner, one space at a time
          </Text>
        </Box> */}

        <SimpleGrid
          gridTemplateColumns="repeat(4, 1fr)"
          paddingTop="2.5rem"
          paddingBottom="4rem"
        >
          {stats.map((item) => {
            return (
              <Box ref={ref}>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  gap="0.3rem"
                  color="#1239AC"
                >
                  <Heading fontWeight="light">
                    {inView ? (
                      <CountUp
                        start={item.start}
                        end={item.number}
                        duration={item.number >= 1000 ? 1 : 2}
                      />
                    ) : (
                      0
                    )}
                  </Heading>
                  <AddIcon fontSize="1.2rem" />
                </Flex>

                <Box display="flex" justifyContent="center">
                  <Text fontWeight="bold">{item.text}</Text>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Statistics;
