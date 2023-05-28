import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react';
// import { ReactNode } from 'react';
import {useState} from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const Logo = (props) => {
    return (
        <img width="179vw" src='https://res.cloudinary.com/dqkwom77k/image/upload/v1682397099/playlistify-low-resolution-logo-black-on-transparent-background_bmz88d.png' alt='' />
    );
};

const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={20}
            h={20}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

export default function LargeWithNewsletter() {
    const [email ,setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); 


        // Make a POST request to the API endpoint
        
        fetch(`${process.env.REACT_APP_BACKEND_URL}/Update-email`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email}),
        })
        .then ((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log('Error was', error)
        })
    }
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    style={{ display: "flex", justifyContent: "space-around", flexDirection: "row" }}
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Logo color={useColorModeValue('gray.700', 'white')} />
                        </Box>
                        <Text fontSize={'sm'}>
                            © 2023 Playlistify. All rights reserved
                        </Text>
                        <Stack  direction="row" spacing={8} align="center">
                            <SocialButton label="Twitter" href="#">
                                <FaTwitter style={{ fontSize: "30px", color:"#b49f9f"}} />
                            </SocialButton>
                            <SocialButton label="YouTube" href="#">
                                <FaYoutube style={{ fontSize: "30px", color:"#b49f9f"}} />
                            </SocialButton>
                            <SocialButton label="Instagram" href="#">
                                <FaInstagram style={{ fontSize: "30px", color:"#b49f9f"}} />
                            </SocialButton>
                        </Stack>

                    </Stack>
                    <Stack fontWeight={'bold'} align={'flex-start'}>
                        
                        <ListHeader  >Company</ListHeader>
                        <Link textDecoration={'none'}  color={'black'} href={'#'}>About us</Link>
                        <Link  textDecoration={'none'} color={'black'} href={'#'}>Blog</Link>
                        <Link textDecoration={'none'} color={'black'} href={'#'}>Contact us</Link>
                        <Link textDecoration={'none'} color={'black'}  href={'#'}>Pricing</Link>
                        <Link textDecoration={'none'}  color={'black'} href={'#'}>Testimonials</Link>
                    </Stack>
                    <Stack  fontWeight={'bold'} align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link  textDecoration={'none'} color={'black'} href={'#'}>Help Center</Link>
                        <Link textDecoration={'none'}  color={'black'} href={'#'}>Terms of Service</Link>
                        <Link textDecoration={'none'}  color={'black'} href={'#'}>Legal</Link>
                        <Link  textDecoration={'none'} color={'black'} href={'#'}>Privacy Policy</Link>
                        <Link  textDecoration={'none'} color={'black'} href={'#'}>Satus</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Stay up to date</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Your email address'}
                                height={'2rem'}
                                bg={useColorModeValue('white', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                    
                                }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <IconButton
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('black', 'gray.800')}
                                width={'2rem'}
                                _hover={{
                                    bg: '#EEDBDB',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend  onClick={handleSubmit}/>}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
