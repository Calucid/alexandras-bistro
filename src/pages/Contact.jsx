import { Box, Heading, Text, Link, VStack, HStack, Input, Textarea, Button, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Contact Us
      </Heading>

      <VStack spacing={4} align="stretch">
        <Box textAlign="center">
          <img
            src="http://stock.calucid.com/fetch/calucid/alexandras-bistro/location"
            alt="Restaurant Location"
            width="100%"
            height="250px"
            style={{ borderRadius: "8px" }}
          />
        </Box>

        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            Alexandra's Bistro
          </Text>
          <Text>9 E 4th St, Bethlehem, PA 18015, USA</Text>
          <Text>Phone: <Link href="tel:+16108680366" color="red.500">(610) 868-0366</Link></Text>
          <Text>Email: <Link href="mailto:info@alexandrasbistro.com" color="red.500">info@alexandrasbistro.com</Link></Text>
        </Box>

        <HStack justify="center" spacing={4}>
          <IconButton as={Link} href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="red" />
          <IconButton as={Link} href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="red" />
          <IconButton as={Link} href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="red" />
        </HStack>

        <Heading as="h2" size="lg" textAlign="center" mt={6}>
          Contact Form
        </Heading>

        <Box as="form" bg="gray.100" p={4} borderRadius="8px">
          <VStack spacing={3}>
            <Input placeholder="Your Name" size="lg" />
            <Input type="email" placeholder="Your Email" size="lg" />
            <Textarea placeholder="Your Message" size="lg" />
            <Button colorScheme="red" size="lg">Send Message</Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Contact;