import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, useToast } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";

const Index = () => {
  const [cv, setCv] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [positionDescription, setPositionDescription] = useState(null);
  const [summary, setSummary] = useState("");
  const toast = useToast();

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!cv || !feedback || !positionDescription) {
      toast({
        title: "Error",
        description: "Please upload all required files.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate an AI agent processing the files and returning a summary
    setSummary("The user fits the position based on the provided CV, feedback, and position description.");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">AI Agent for Position Fit Analysis</Text>

        <Box width="100%">
          <Text>Upload CV:</Text>
          <Input type="file" onChange={(e) => handleFileChange(e, setCv)} icon={<FaUpload />} />
        </Box>

        <Box width="100%">
          <Text>Upload Feedback:</Text>
          <Input type="file" onChange={(e) => handleFileChange(e, setFeedback)} icon={<FaUpload />} />
        </Box>

        <Box width="100%">
          <Text>Upload Position Description:</Text>
          <Input type="file" onChange={(e) => handleFileChange(e, setPositionDescription)} icon={<FaUpload />} />
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
