import { Box, Heading, Text, Image, VStack, HStack, Link, Divider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Visit = () => {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" textAlign="center" color="red.600">
          Visit Alexandra's Bistro
        </Heading>

        <Image
          src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/restaurant-exterior"
          alt="Alexandra's Bistro Exterior"
          width="100%"
          maxW="800px"
          height="400px"
          objectFit="cover"
          borderRadius="md"
        />

        <Text fontSize="lg" textAlign="center" maxW="800px">
          Since 1989, Alexandra's Bistro has been serving South Side Bethlehem with delicious meals at affordable prices.
          Come visit us for a cozy dining experience!
        </Text>

        <Divider />

        <VStack spacing={4} align="center">
          <Heading as="h2" size="lg" color="red.500">
            Location
          </Heading>
          <Text fontSize="md">9 E 4th St, Bethlehem, PA 18015, USA</Text>
          <Text fontSize="md">(610) 868-0366</Text>

          <Box width="100%" maxW="800px" height="400px">
            <iframe
              title="Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "8px" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZfNxROLqjeHORHMSc28B1mvxbvKHlukU&q=9+E+4th+St,+Bethlehem,+PA+18015`}
            ></iframe>
          </Box>
        </VStack>

        <Divider />

        <VStack spacing={4} align="center">
          <Heading as="h2" size="lg" color="red.500">
            Hours of Operation
          </Heading>
          <Text fontSize="md">Monday - Friday: 8:00 AM - 8:00 PM</Text>
          <Text fontSize="md">Saturday - Sunday: 9:00 AM - 10:00 PM</Text>
        </VStack>

        <Divider />

        <VStack spacing={4} align="center">
          <Heading as="h2" size="lg" color="red.500">
            Explore More
          </Heading>
          <HStack spacing={6}>
            <Link as={RouterLink} to="/" fontSize="lg" color="blue.500">
              Home
            </Link>
            <Link as={RouterLink} to="/menu" fontSize="lg" color="blue.500">
              Menu
            </Link>
            <Link as={RouterLink} to="/about" fontSize="lg" color="blue.500">
              About Us
            </Link>
            <Link as={RouterLink} to="/contact" fontSize="lg" color="blue.500">
              Contact
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Visit;