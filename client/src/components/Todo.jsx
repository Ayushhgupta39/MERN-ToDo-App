import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

export default function Todo({ todo }) {
  return (
    <Box>
      <List>
        <ListItem
          display={"flex"}
          justifyContent="space-between"
          width={{
            base: '72',
            md: '72',
            xl: '96'
          }}
          bgColor='cyan.50'
          p={'2'}
          m={'2'}
        >
          {todo.data}
          <Box>
          <ListIcon as={EditIcon} />
          <ListIcon as={DeleteIcon} />
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}
