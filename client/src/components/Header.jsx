import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";


export default function Header() {
  return (
    <Box
      bgColor={"gray.200"}
      color="cyan.900"
      border={"1px"}
      borderRadius="md"
      shadow={"lg"}
      display="flex"
      justifyContent="center"
    >
      <Heading 
      fontSize={{base: '3xl',
      xl: '6xl',}}
      textAlign="center" 
      width={"50%"} 
      m="2"
      fontWeight={'thin'}
      >
        <Text as={'abbr'}>ToDo App</Text>
      </Heading>
    </Box>
  );
}
