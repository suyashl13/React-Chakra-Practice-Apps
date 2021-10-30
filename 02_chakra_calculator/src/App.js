import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Center, Grid, GridItem, Text, VStack } from '@chakra-ui/layout';
import { useState } from 'react';
import './App.css';
import { FaBackspace } from 'react-icons/fa'
import { useToast } from '@chakra-ui/toast';

function App() {

  const calculatorKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const calculatorSymbols = ['+', '-', '/', '*']
  const [expression, setExpression] = useState('')

  const toast = useToast()

  const calculate = () => {
    if (!expression) {
      toast({
        title: "Expression cannot be empty !",
        status: 'error',
        isClosable: true
      })
      return;
    }
    setExpression(eval(expression).toString())
  }

  return (
    <Center display='flex' height='80vh' border='black' borderWidth='4px'>
      <VStack alignSelf='center' m='14'>
        <Text fontSize='5xl' bgGradient="linear(to-r, blue.200, teal.500)" bgClip='text' fontWeight='bold' p='6'>Chakra Calculator</Text>
        <Box w='lg' display='flex'>
          <Input isDisabled={true} variant='filled' value={expression} />
          <Button colorScheme='teal' ml='1' onClick={() => {
            setExpression(expression.substr(0, expression.length - 1))
          }} ><FaBackspace /></Button>
          <Button colorScheme='teal' ml='1' onClick={() => {
            setExpression('')
          }}  >C</Button>
        </Box>
        <Grid
          width='lg'
          templateRows='repeat(4, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap='2'
        >
          <GridItem rowSpan={4} colSpan={1}>
            <VStack>
              {
                calculatorSymbols.map((sym, index) => <Input type='button' color='teal.500' value={sym} key={index} onClick={() => {
                  if (!expression) {
                    return;
                  }
                  if (calculatorSymbols.includes(expression.substr(expression.length - 1, expression.length))) {
                    return;
                  }
                  setExpression(expression + sym)
                }} />)
              }
            </VStack>
          </GridItem>
          {
            calculatorKeys.map((key, index) => <GridItem key={index} colSpan={1}><Input type='button'
              onClick={() => { setExpression(expression + key) }}
              color='teal.500' value={key} /></GridItem>)
          }
          <GridItem colSpan={3} alignSelf='center' ><Input type='button' color='teal.500' value='0' onClick={() => setExpression(expression + 0)} /></GridItem>
          <GridItem colSpan={4}>
            <Input type='button' color='teal.500' value='=' onClick={() => calculate()} />
          </GridItem>
        </Grid>
      </VStack>
    </Center>
  );
}

export default App;
