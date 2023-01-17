import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTodos } from "../redux/actions";


export default function Todos() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

  return (
    <Box display={"flex"} justifyContent='center'>
      <Text>Todo Tasks</Text>
    </Box>
  );
}
