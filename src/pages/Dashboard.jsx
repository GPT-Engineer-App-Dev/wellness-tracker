import { useState } from "react";
import { Box, Text, VStack, Heading } from "@chakra-ui/react";
import WorkoutForm from "../components/WorkoutForm";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">Dashboard</Heading>
        <Text fontSize="lg">Steps: --</Text>
        <Text fontSize="lg">Calories Burned: --</Text>
        <WorkoutForm onAddWorkout={addWorkout} />
        <Heading as="h3" size="lg" mt={8}>Workout History</Heading>
        {workouts.length === 0 ? (
          <Text>No workouts logged yet.</Text>
        ) : (
          <VStack spacing={4} width="full">
            {workouts.map((workout, index) => (
              <Box key={index} p={4} borderWidth={1} borderRadius="md" width="full">
                <Text><strong>Date:</strong> {workout.date}</Text>
                <Text><strong>Type:</strong> {workout.type}</Text>
                <Text><strong>Duration:</strong> {workout.duration} minutes</Text>
                <Text><strong>Calories Burned:</strong> {workout.calories}</Text>
              </Box>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default Dashboard;