import { Box, Text, VStack } from "@chakra-ui/react";

const Profile = () => (
  <Box p={4}>
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">Profile</Text>
      <Text>User Information: --</Text>
    </VStack>
  </Box>
);

export default Profile;