import { Box, Heading } from "@chakra-ui/react";

const Header = () => (
  <Box as="header" bg="brand.700" color="white" py={4} textAlign="center">
    <Heading as="h1" size="lg">Fitness Tracker</Heading>
  </Box>
);

export default Header;