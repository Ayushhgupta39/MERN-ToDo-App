import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { MdOutlinePostAdd } from "react-icons/md";

export default function Form() {
    const [inputText, setInputText] = useState("");

    const onFormSubmit = () => {

    }

    const onInputChange = (event) => {
        setInputText(event.target.value);
        
    }
  return (
    <Box p={"2"}>
      <form action="" onSubmit={onFormSubmit}>
        <Stack alignItems={"center"} spacing={4}>
          <InputGroup width="50%" mt={"4"}>
            <Input placeholder="New Task" variant={"flushed"} onChange={onInputChange} />
            <InputRightElement children={<MdOutlinePostAdd className="input-add-icon" onClick={onFormSubmit} />} />
          </InputGroup>
        </Stack>
      </form>
    </Box>
  );
}
