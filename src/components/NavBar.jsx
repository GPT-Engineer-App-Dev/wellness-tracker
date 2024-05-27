import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <Box as="nav" bg="brand.800" color="white" py={2}>
    <Flex justify="center" gap={4}>
      <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.300" }}>Home</Link>
      <Link as={NavLink} to="/dashboard" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.300" }}>Dashboard</Link>
      <Link as={NavLink} to="/profile" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.300" }}>Profile</Link>
    </Flex>
  </Box>
);

export default NavBar;