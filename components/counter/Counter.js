import { Button, Flex, Input, useNumberInput } from "@chakra-ui/react";

export function Counter(){
    
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
        useNumberInput({
            step: 1,
            defaultValue: 1,
            min: 1,
            max: 9,
        })
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps({ isReadOnly: true })
  
    return (
        <Flex margin='auto' maxW='150px'>
            <Button {...dec}
                    size='sm' bg='#f9f9f7'
            >-</Button>
            <Input {...input}
                textAlign='center' bg='#f9f9f7' size='sm'
                minW='40px'  p='1' borderRadius='20px'
            />
            <Button {...inc}
                    size='sm' bg='#f9f9f7'
            >+</Button>
        </Flex>
)
}