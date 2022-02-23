import { Button } from '@chakra-ui/react';
import { FaFacebookMessenger } from 'react-icons/fa';

export default function MessengerButton(){

return (
	<Button width={{ base: '39px', md: '59px' }}
            height={{ base: '40px', md: '60px' }} 
            fontSize={{ base: '2.5rem', md: '3.6rem' }}
            p={0} borderRadius='30px' cursor='pointer' color='#0676e8'
    >
        <FaFacebookMessenger />
	</Button>
);
}