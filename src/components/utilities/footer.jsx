import { Box, Stack, Typography } from "@mui/material";
import Logo from "./logo";
import Reveal from "./revealAnimation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
    return ( 
        <Box display="flex" flexDirection={{xs: 'column',md: 'row'}} justifyContent="space-around" padding="30px">
             <Stack 
                spacing={{xs: 1,sm: 2}}
                component={motion.div}
                initial={{x: -300,opacity: 0.1}}
                whileInView={{x: 0,opacity: 1}}
                transition={{duration: 2,delay: 0.8,type: 'spring'}}
                viewport={{once: true}}
            >
                <Logo />
                <Typography>We are more than a digital agency</Typography>
                <Box sx={line}/>
            </Stack>
            <Reveal>
                <Stack marginTop={{xs: '20px',sm: '0px'}} direction={{xs: 'column',md: 'row'}} spacing={{xs: 2,md: 10}}>
                    <Stack spacing={1}>
                        <Typography fontSize="20px" fontWeight={600}>Contact us</Typography>
                        <Typography fontWeight={200}>+91 7396959754</Typography>
                        <Lightfont>ch.shivakumar491@gmail.com</Lightfont>
                        <Lightfont>Nit Agartala, Jirania, Tripura, India</Lightfont>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography fontSize="20px" fontWeight={600}>Our Services</Typography>
                        <Lightfont>Websites Development</Lightfont>
                        <Lightfont>App Development</Lightfont>
                        <Lightfont>Graphic Designing</Lightfont>
                        <Lightfont>Digital Marketing</Lightfont>
                        <Lightfont>Video Editing</Lightfont>
                        {/* <Lightfont>Service 03</Lightfont> */}
                    </Stack>
                    <Stack spacing={1}>
                        <Typography fontSize="20px" fontWeight={600}>Pages</Typography>
                        <Link to="Home" smooth={true} ><Lightfont cursor='pointer'>Home</Lightfont></Link>
                        <Link to="Services" smooth={true}><Lightfont cursor='pointer'>Services</Lightfont></Link>
                        <Link to="About" smooth={true}><Lightfont cursor='pointer'>About</Lightfont></Link>
                        <Link to="Testimonials" smooth={true}><Lightfont cursor='pointer'>Testimonials</Lightfont></Link>
                        <Link to="Blogs" smooth={true}><Lightfont cursor='pointer'>Blogs</Lightfont></Link>
                    </Stack>
                </Stack>
            </Reveal>
        </Box>
    );
}

const Lightfont = ({children,cursor}) => {
    return(
        <Typography sx={{cursor: cursor && "pointer"}} fontWeight={200}>{children}</Typography>
    )
}
const line = {
    border: '2px solid #66FCF1',
    width: '50%',
}
 
export default Footer;