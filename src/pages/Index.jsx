import React, { useState } from "react";
import { Container, VStack, Text, Select, Button, Box, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [summary, setSummary] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    if (!selectedCandidate || !selectedPosition) {
      toast({
        title: "Error",
        description: "Please select both a candidate and a position.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setSummary(`Candidate ${selectedCandidate} fits the position ${selectedPosition}.`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">AI Agent for Position Fit Analysis</Text>

        <Box width="100%">
          <Text>Select Candidate:</Text>
          <Select placeholder="Select candidate" onChange={(e) => setSelectedCandidate(e.target.value)}>
            <option value="Candidate 1">Candidate 1</option>
            <option value="Candidate 2">Candidate 2</option>
            <option value="Candidate 3">Candidate 3</option>
          </Select>
        </Box>

        <Box width="100%">
          <Text>Select Position:</Text>
          <Select placeholder="Select position" onChange={(e) => setSelectedPosition(e.target.value)}>
            <option value="Position 1">Position 1</option>
            <option value="Position 2">Position 2</option>
            <option value="Position 3">Position 3</option>
          </Select>
        </Box>

        <Button colorScheme="teal" onClick={handleSubmit} leftIcon={<FaUpload />}>
          Submit
        </Button>

        {summary && (
          <Box p={4} mt={4} borderWidth={1} borderRadius="md" width="100%">
            <Text fontSize="lg">{summary}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
