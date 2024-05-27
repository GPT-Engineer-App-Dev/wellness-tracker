import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";

const WorkoutForm = ({ onAddWorkout }) => {
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddWorkout({ date, type, duration, calories });
    setDate("");
    setType("");
    setDuration("");
    setCalories("");
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <VStack spacing={4}>
        <FormControl id="date" isRequired>
          <FormLabel>Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <FormControl id="type" isRequired>
          <FormLabel>Type of Workout</FormLabel>
          <Select placeholder="Select type" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="running">Running</option>
            <option value="cycling">Cycling</option>
            <option value="weightlifting">Weightlifting</option>
            <option value="swimming">Swimming</option>
          </Select>
        </FormControl>
        <FormControl id="duration" isRequired>
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </FormControl>
        <FormControl id="calories" isRequired>
          <FormLabel>Calories Burned</FormLabel>
          <Input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">Add Workout</Button>
      </VStack>
    </Box>
  );
};

export default WorkoutForm;