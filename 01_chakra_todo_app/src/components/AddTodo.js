import { Button } from '@chakra-ui/button'
import { Input } from '@chakra-ui/input'
import { HStack } from '@chakra-ui/layout'
import React, { useState } from 'react'

function AddTodo({ addTodo }) {

    const [todoText, setTodoText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todoText)
        setTodoText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt='5'>
                <Input id='add-txt' variant='filled' value={todoText} onChange={e => setTodoText(e.target.value)} placeholder='Write a todo here' />
                <Button colorScheme='pink' px='8' type='submit'>Add Todo</Button>
            </HStack>
        </form>
    )
}

export default AddTodo
