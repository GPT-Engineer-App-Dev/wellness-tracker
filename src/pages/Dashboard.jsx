import { useState, useEffect } from "react";
import { Box, Text, VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import WorkoutForm from "../components/WorkoutForm";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from "recharts";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);
  const [stepsData, setStepsData] = useState([]);
  const [caloriesData, setCaloriesData] = useState([]);
  const [durationData, setDurationData] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  useEffect(() => {
    const steps = workouts.map((workout, index) => ({ name: `Workout ${index + 1}`, steps: Math.floor(Math.random() * 10000) }));
    const calories = workouts.map((workout, index) => ({ name: `Workout ${index + 1}`, calories: workout.calories }));
    const duration = workouts.map((workout, index) => ({ name: `Workout ${index + 1}`, duration: workout.duration }));
    setStepsData(steps);
    setCaloriesData(calories);
    setDurationData(duration);
  }, [workouts]);

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading as="h2" size="xl">Dashboard</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="full">
          <Box>
            <Heading as="h3" size="md" mb={4}>Steps Over Time</Heading>
            <LineChart width={500} height={300} data={stepsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="steps" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Calories Burned Over Time</Heading>
            <BarChart width={500} height={300} data={caloriesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="calories" fill="#82ca9d" />
            </BarChart>
          </Box>
          <Box>
            <Heading as="h3" size="md" mb={4}>Workout Duration Over Time</Heading>
            <LineChart width={500} height={300} data={durationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="duration" stroke="#82ca9d" />
            </LineChart>
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