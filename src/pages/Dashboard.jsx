import { useState, useEffect } from "react";
import { Box, Text, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import WorkoutForm from "../components/WorkoutForm";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  const [steps, setSteps] = useState([]);
  const [calories, setCalories] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  useEffect(() => {
    // Mock data for steps and calories
    setSteps([
      { date: "2023-10-01", steps: 3000 },
      { date: "2023-10-02", steps: 5000 },
      { date: "2023-10-03", steps: 7000 },
    ]);

    setCalories([
      { date: "2023-10-01", calories: 200 },
      { date: "2023-10-02", calories: 400 },
      { date: "2023-10-03", calories: 600 },
    ]);
  }, []);

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">Dashboard</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="full">
          <Box>
            <Heading as="h3" size="lg">Steps Over Time</Heading>
            <LineChart width={500} height={300} data={steps}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="steps" stroke="#8884d8" />
            </LineChart>
          </Box>
          <Box>
            <Heading as="h3" size="lg">Calories Burned Over Time</Heading>
            <BarChart width={500} height={300} data={calories}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart>
          </Box>
        </SimpleGrid>
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