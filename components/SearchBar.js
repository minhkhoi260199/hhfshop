import {Button, Input, InputGroup, InputRightAddon, Tooltip} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useState} from "react";

export default function SearchBar(){

    const [input, setInput] = useState('')

    console.log(input);

    return(
        <InputGroup marginBottom={4}>
            <Input value={input} borderRadius='14px 0px 0px 14px'
                   onChange={e=>setInput(e.target.value)} placeholder='Tên sản phẩm...' />
            <Tooltip hasArrow label='Tìm sản phẩm' bg='pink.400'>
                <InputRightAddon borderRadius='0px 14px 14px 0px'
                                 p={0} children={
                    <Button w='100%' borderRadius='0px 14px 14px 0px'
                            onClick={()=>setInput("Test Button")}
                    ><SearchIcon />
                    </Button>
                } />
            </Tooltip>
        </InputGroup>
    )
}

