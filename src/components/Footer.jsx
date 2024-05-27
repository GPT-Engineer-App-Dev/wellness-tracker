import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" bg="brand.700" color="white" py={4} mt={8}>
    <Flex justify="center" gap={4}>
      <Link href="#" _hover={{ textDecoration: "none" }}>About</Link>
      <Link href="#" _hover={{ textDecoration: "none" }}>Contact</Link>
      <Link href="#" _hover={{ textDecoration: "none" }}>Privacy Policy</Link>
    </Flex>
    <Text textAlign="center" mt={2}>© 2023 Fitness Tracker</Text>
  </Box>
);

export default Footer;