import {Button, Input, InputGroup, InputRightAddon, Tooltip} from "@chakra-ui/react";
import {useState} from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar(){

    const [input, setInput] = useState('')

    return(
        <InputGroup marginBottom={4} >
            <Input borderRadius='14px 0px 0px 14px' bg="#f9f9f7"
                   value={input} onChange={e=>setInput(e.target.value)} placeholder='Tên sản phẩm...' />
            <Tooltip hasArrow label='Tìm sản phẩm' bg='pink.400'>
                <InputRightAddon borderRadius='0px 14px 14px 0px'
                                 p={0} children={
                    <Button w='100%' borderRadius='0px 14px 14px 0px'
                            onClick={()=>setInput("Test Button")}
                    ><FaSearch />
                    </Button>
                } />
            </Tooltip>
        </InputGroup>
    )
}

