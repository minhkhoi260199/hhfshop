import { Button } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

useEffect(()=>{
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        }
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
    };
    
    window.addEventListener('scroll', toggleVisible);
    var btnToTop = document.getElementById('btnToTop');
    btnToTop.addEventListener('click', scrollToTop);
},[])

return (
	<Button position='fixed' zIndex={1} right='10px' bottom='15px'
            width='59px' height='60px' fontSize='3.6rem' borderRadius='30px'
            p={0} cursor='pointer' color='#ffc136'
            display={visible ? 'block' : 'none'} 
            id='btnToTop'
    >
        <FaArrowCircleUp/>
	</Button>
);
}

export default ScrollButton;
