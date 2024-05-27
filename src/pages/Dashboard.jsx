import { Box, Text, VStack } from "@chakra-ui/react";

const Dashboard = () => (
  <Box p={4}>
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">Dashboard</Text>
      <Text>Steps: --</Text>
      <Text>Calories Burned: --</Text>
      <Text>Workout History: --</Text>
    </VStack>
  </Box>
);

export default Dashboard;