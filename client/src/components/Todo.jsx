import { Box, List, ListIcon, ListItem, Text } from '@chakra-ui/react'
import React from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'


export default function Todo({ todo }) {
  return (
    <Box>
        <List>
            <ListItem>
                { todo.data }
                <ListIcon as={EditIcon}/>
                <ListIcon as={DeleteIcon}/>
            </ListItem>
        </List>
    </Box>
  )
}
