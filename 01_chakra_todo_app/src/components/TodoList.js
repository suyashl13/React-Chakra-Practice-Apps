import { VStack, IconButton, StackDivider, HStack, Text, Spacer, Badge } from '@chakra-ui/react'
import React from 'react'
import { FaTrash } from 'react-icons/fa'

function TodoList({ todos, deleteTodo }) {


    return (
        todos.length === 0 ?
            <Badge colorScheme='green' p='4' borderRadius='lg'>No Todos</Badge>
            : <VStack
                divider={<StackDivider />}
                borderColor='gray.100' borderWidth='2px' p='4'
                borderRadius='lg'
                width='100%'
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
                alignItems='stretch'
            >
                {
                    todos.map((todo, index) => <HStack key={index}>
                        <Text>{todo.body}</Text>
                        <Spacer />
                        <IconButton icon={<FaTrash />} onClick={e => { deleteTodo(todo.id) }} isRound='true' />
                    </HStack>
                    )
                }
            </VStack>
    )
}

export default TodoList
