import {Button, Input, InputGroup, InputRightAddon, Tooltip} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import productApi from "../pages/api/productApi";
import {addSearchedProduct, onLoadingProduct, selectIsLoadingProduct} from "../components/item/productSlice"

export default function SearchBar(){

    const [keyword, setKeyword] = useState('')
    
    const isLoading = useSelector(selectIsLoadingProduct);

    const dispatch = useDispatch();

    useEffect(()=>{
        const search = async () =>{
            var keywordInput = document.getElementById("keywordInput").value;
            if(keywordInput == ""){
                console.log("No keyword. Search canceled !");
            } else {
                dispatch(onLoadingProduct());
                try {
                    const response = await productApi.search(keywordInput);
                    // console.log("data"+ JSON.stringify(response));
                    dispatch(addSearchedProduct(response));
                    console.log("Search API success !!!");
                    // setIsLoading(false)
                    // console.log("data"+ response);
                } catch (error) {
                    console.log("Search API Fail !!");
                    console.log(error);
                }
            }
        }
        var submitSearch = document.getElementById("submitSearch");
        submitSearch.addEventListener('click', search);
        return () => {submitSearch.removeEventListener('click', search);}
    }, [])

    return(
        <InputGroup marginBottom={4} 
                    zIndex={1}
        >
            <Input borderRadius='14px 0px 0px 14px' 
                //    bg="#f9f9f7"
                   bg="white"
                   id="keywordInput"
                   value={keyword} onChange={e=>setKeyword(e.target.value)} placeholder='Tên sản phẩm...' />
            <Tooltip hasArrow label='Tìm sản phẩm' bg='pink.400'>
                <InputRightAddon borderRadius='0px 14px 14px 0px'
                                 p={0} children={
                    <Button w='100%' borderRadius='0px 14px 14px 0px'
                            onClick={()=>setKeyword(keyword)}
                            id="submitSearch"
                            disabled={isLoading}
                    ><FaSearch />
                    </Button>
                } />
            </Tooltip>
        </InputGroup>
    )
}

