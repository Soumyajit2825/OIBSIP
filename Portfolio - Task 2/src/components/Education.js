import {
    Divider,
    Stack,
    Text,
    Container,
    Box,
    HStack,
    Heading,
  } from "@chakra-ui/react";
  import ProfileArray from "./ProfileArray";
  
  function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='10px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }
  export default function Education({ color }) {
    const profile = ProfileArray();
      return (
        <>
          <Container maxW={"3xl"} id="about">
            <Stack
              as={Box}
              textAlign={"center"}
              spacing={{ base: 8, md: 14 }}
              pb={{ base: 20, md: 36 }}
            >
              <Stack align="center" direction="row" px={4}>
                <HStack mx={4}>
                  <Text color={`${color}.400`} fontWeight={800}>
                    02
                  </Text>
                  <Text fontWeight={800}>Education</Text>
                </HStack>
                <Divider orientation="horizontal" />
              </Stack>
              <Text color={"gray.600"} fontSize={"xl"} px={4}>
                {/* {profile.education} */}
                <Stack spacing={8} direction='row'>
                  <Feature
                    title='Save Money'
                    desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
                  />
                </Stack>
              </Text>
            </Stack>
          </Container>
        </>
      );
  }
