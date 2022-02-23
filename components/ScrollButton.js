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

    return () => {
        window.removeEventListener('scroll', toggleVisible);
        btnToTop.removeEventListener('click', scrollToTop);
    }
},[])

return (
	<Button width={{ base: '39px', md: '59px' }}
            height={{ base: '40px', md: '60px' }} 
            fontSize={{ base: '2.5rem', md: '3.6rem' }}
            p={0} borderRadius='30px' cursor='pointer' color='#ffc136'
            display={visible ? 'block' : 'none'} 
            id='btnToTop'
    >
        <FaArrowCircleUp/>
	</Button>
);
}

export default ScrollButton;
