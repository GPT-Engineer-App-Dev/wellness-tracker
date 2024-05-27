import { Box, Text, VStack } from "@chakra-ui/react";

const Home = () => (
  <Box p={4}>
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">Welcome to Fitness Tracker</Text>
      <Text>Track your fitness journey with ease. Monitor your steps, calories burned, and workout history all in one place.</Text>
    </VStack>
  </Box>
);

export default Home;