import { Box, Image, Text, VStack, Heading, Link, Button, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl" color="red.600">
          About Alexandra's Bistro
        </Heading>

        <Image
          src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/restaurant-exterior"
          alt="Alexandra's Bistro Exterior"
          width="100%"
          height={{ base: "200px", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
        />

        <Text fontSize="lg" color="gray.700">
          Alexandra's Bistro has been serving South Side Bethlehem since 1989 with delicious meals at affordable prices.
          Located at <strong>9 E 4th St, Bethlehem, PA 18015, USA</strong>, we take pride in providing high-quality
          food in a welcoming atmosphere.
        </Text>

        <Image
          src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/restaurant-interior"
          alt="Alexandra's Bistro Interior"
          width="100%"
          height={{ base: "200px", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
        />

        <Text fontSize="lg" color="gray.700">
          Whether you're stopping by for breakfast, lunch, or dinner, our menu is filled with delicious options that
          satisfy every craving. Our friendly staff is always ready to serve you with a smile.
        </Text>

        <Image
          src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/delicious-food"
          alt="Delicious Food at Alexandra's Bistro"
          width="100%"
          height={{ base: "200px", md: "400px" }}
          objectFit="cover"
          borderRadius="md"
        />

        <Text fontSize="lg" color="gray.700">
          Come visit us and experience the taste of Alexandra's Bistro for yourself!
        </Text>

        <Box>
          <Button as={RouterLink} to="/menu" colorScheme="red" size="lg" mx={2}>
            View Menu
          </Button>
          <Button as={RouterLink} to="/visit" colorScheme="gray" size="lg" mx={2}>
            Plan Your Visit
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;