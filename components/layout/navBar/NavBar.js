import {useState} from "react";
import Link from "next/link";
import {
    Box,
    Center,
    Flex,
    Grid,
    GridItem,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList, Text
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

const tabs = [
    {
        "name" : "Danh mục",
        "path" : "/"
    },{
        "name" : "Bài viết",
        "path" : "/info/comingSoon"
    },{
        "name" : "Giới thiệu",
        "path" : "/about"
    },{
        "name" : "Liên hệ",
        "path" : "/contact"
    }
]

function NavBar(){

    const [state, setState] = useState("/");

    return(
        <Box bg='#ffde46' w='100%' color='#5f5338' fontWeight='bold'>
               <Flex margin='auto' maxW='1050px'>
                   <Box w='20%'>
                       <Image
                           p='0.5'
                           margin='auto'
                           boxSize='70px'
                           objectFit='cover'
                           src='./logo.jpg'
                           alt='Hiệp Hoà Farm'
                       />
                   </Box>
                   <Box w='80%' margin='auto'
                        display={{ base: 'none', md:'block'}}
                   >
                       <Grid templateColumns='repeat(4, 1fr)' gap={2}>
                           {tabs.map(tab => {
                               return(
                                   <GridItem w='100%' margin='auto' key={tab.path}>
                                       <Link href={tab.path}>
                                           <Center h='9' textAlign='center'
                                                   onClick={() => setState(tab.path)}
                                                   className={state===tab.path?('navActive'):('navItem')}
                                           >
                                               {tab.name}
                                           </Center>
                                       </Link>
                                   </GridItem>
                               )
                           })}
                       </Grid>
                   </Box>
                   <Box w='80%' margin='auto'
                        display={{ base: 'block', md:'none'}}
                   >
                       <Flex>
                           <Box w='80%' p={1} textDecoration='underline overline'>
                               <Text fontSize={{ base: 'sm', sm:'lg'}}
                               >MANG THỰC PHẨM SẠCH</Text>
                               <Text fontSize={{ base: 'sm', sm:'lg'}}
                                     textAlign='right'
                               >ĐẾN NGÔI NHÀ CỦA BẠN</Text>
                           </Box>
                           <Box backgroundColor='#eef0c6' margin='auto' borderRadius='10'>
                               <Menu>
                                   <MenuButton
                                       as={IconButton}
                                       aria-label='Options'
                                       icon={<HamburgerIcon />}
                                       variant='outline'
                                   />
                                   <MenuList background="#a6e9ca" zIndex={2}>
                                       {tabs.map(tab => {
                                           return(
                                            <Link href={tab.path} key={tab.path}>
                                            <MenuItem >{tab.name}</MenuItem>
                                               </Link>
                                           )
                                       })}
                                   </MenuList>
                               </Menu>
                           </Box>
                       </Flex>
                   </Box>
               </Flex>

        </Box>
    );
}
export default NavBar;