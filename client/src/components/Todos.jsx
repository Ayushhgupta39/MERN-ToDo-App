import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/actions";
import Todo from "./Todo";


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
                   <Todo
                    key={todo._id} 
                    todo = {todo}
                   />
                ))
            }
        </ul>
    </Box>
  );
}

export default Todos;
