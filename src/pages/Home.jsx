import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box
        bgImage="url('http://stock.calucid.com/fetch/calucid/alexandras-bistro/restaurant-interior')"
        bgSize="cover"
        bgPosition="center"
        height={{ base: "60vh", md: "80vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
      >
        <Box bg="rgba(0, 0, 0, 0.5)" p={6} borderRadius="md">
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>Welcome to Alexandra's Bistro</Heading>
          <Text fontSize={{ base: "md", md: "lg" }} mt={3}>
            Serving South Side Bethlehem since 1989 with delicious meals at affordable prices.
          </Text>
          <Button as={Link} to="/menu" mt={5} colorScheme="red" size="lg">
            View Menu
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" py={10} px={5}>
        <Image
          src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/chef-cooking"
          alt="Chef Cooking"
          width={{ base: "100%", md: "50%" }}
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
        <Box p={5} textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="2xl">About Us</Heading>
          <Text mt={3} fontSize="md">
            Since 1989, Alexandra's Bistro has been a staple in South Side Bethlehem, offering mouthwatering dishes
            made with love and fresh ingredients.
          </Text>
          <Button as={Link} to="/about" mt={4} colorScheme="red">
            Learn More
          </Button>
        </Box>
      </Flex>

      {/* Featured Dishes */}
      <Box textAlign="center" py={10} px={5}>
        <Heading fontSize="2xl">Our Signature Dishes</Heading>
        <Stack direction={{ base: "column", md: "row" }} spacing={5} mt={5} justify="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/delicious-pasta"
            alt="Delicious Pasta"
            width="300px"
            height="200px"
            objectFit="cover"
            borderRadius="md"
          />
          <Image
            src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/tasty-burger"
            alt="Tasty Burger"
            width="300px"
            height="200px"
            objectFit="cover"
            borderRadius="md"
          />
          <Image
            src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/fresh-salad"
            alt="Fresh Salad"
            width="300px"
            height="200px"
            objectFit="cover"
            borderRadius="md"
          />
        </Stack>
        <Button as={Link} to="/menu" mt={5} colorScheme="red">
          Explore Full Menu
        </Button>
      </Box>

      {/* Visit Section */}
      <Flex direction={{ base: "column", md: "row" }} align="center" bg="gray.100" py={10} px={5}>
        <Box p={5} textAlign={{ base: "center", md: "left" }}>
          <Heading fontSize="2xl">Visit Us</Heading>
          <Text mt={3} fontSize="md">
            9 E 4th St, Bethlehem, PA 18015, USA
          </Text>
          <Text fontSize="md">(610) 868-0366</Text>
          <Button as={Link} to="/visit" mt={4} colorScheme="red">
            Get Directions
          </Button>
        </Box>
        <Image
          src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/restaurant-exterior"
          alt="Restaurant Exterior"
          width={{ base: "100%", md: "50%" }}
          height="300px"
          objectFit="cover"
          borderRadius="md"
        />
      </Flex>
    </Container>
  );
};

export default Home;