import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/actions";


export const Todos = () => {
    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(getAllTodos());
    }, [])

  return (
    <Box display={"flex"} justifyContent='center'>
        <ul>
            {
                todos.map(todo => (
                    <li>{ todo.data }</li>
                ))
            }
        </ul>
    </Box>
  );
}

export default Todos;
