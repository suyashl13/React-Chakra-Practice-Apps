import { Heading, VStack, IconButton, useToast, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa'
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState } from 'react';


function App() {

  const { colorMode, toggleColorMode } = useColorMode()

  const [todos, settodos] = useState(() => (JSON.parse(
    localStorage.getItem('todos')
  ) || []))

  const deleteTodo = (id) => {
    const newTodos = todos.filter(e => e.id !== id);
    settodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const toast = useToast()

  const addTodo = (todo) => {
    if (!todo) {
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true,

      })
      return;
    }
    const newTodo = {
      id: todos.length,
      body: todo
    }
    settodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
  }


  return (
    <VStack m='5'>
      <IconButton icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={e => {
          toggleColorMode()}}
        isRound={true} size='lg' alignSelf='flex-end' />
      <Heading fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip='text'>Todo Application</Heading>
      <br />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;