import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import Carousel from 'nuka-carousel';
// import {Link} from 'react-scroll'

const images = [
    {
        "name" : "banner11.jpg",
    },{
        "name" : "banner12.jpg",
    }
]

function Slider(){

    return(
        <Box position='relative'>
            <Carousel withoutControls
                        autoplay={true}
                        autoplayInterval={1000}
                        autoplayReverse={true}
            >
                {images.map(img => {
                    return(
                        <Image
                            // borderRadius='14'
                            // objectFit='cover'
                            key={img.name}
                            src={'./slide/'+img.name}
                            alt={img.name}
                        />
                    )
                })}
            </Carousel>
            {/* <Link> */}
            <Box display={{base:'none', lg:'block'}}>
                <Button position='absolute' right='100px' bottom='100px'
                        background='cyan' color='red' 
                        height='80px' width='200px'
                        borderRadius='22px'
                        className='kreep'
                >
                    <Box position='absolute' top='0' bottom='0' left='0' right='0' margin='auto' height='25px' >
                        <Text fontSize='xl' fontWeight='bold' textAlign='center'>XEM CỬA HÀNG</Text>
                    </Box>
                </Button>
                <Box position='absolute' right='160px' bottom='25px'
                        className="arrow bounce">
                    <ChevronDownIcon w='5em' h='5em' color="cyan.100"/>
                </Box>
                <Box position='absolute' right='160px' bottom='0'
                        className="arrow bounce">
                    <ChevronDownIcon w='5em' h='5em' color="cyan.100"/>
                </Box>
            </Box>
            {/* </Link> */}
        </Box>
    );
}
export default Slider;