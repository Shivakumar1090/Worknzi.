import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import CardHeading from "../../utilities/Card/cardHeading";
import CardCaption from "../../utilities/Card/cardCaption";
import CardLine from "../../utilities/Card/cardLine";
import Reveal from "../../utilities/revealAnimation";

const ServiceCard = ({id,data}) => {
    const {name,desc,icon,darkIcon} = data[id];
    const [ishover,setisHover] = useState(false);
    return ( 
        <Reveal sx={{width: '100%'}}>
            <Stack 
                component={motion.div}
               
                // whileHover={{transition: {duration: 1}}}
                sx={{...container, '&:hover': hoverStyle}}
                onMouseEnter={() => setisHover(true)}
                onMouseLeave={() => setisHover(false)}
                
                justifyContent="center"
            >
                <Box 
                    sx={iconContainer}
                    component={motion.div}
                    initial={{ scale: 1 }}
                    animate={{ scale: ishover ? 1.2 : 1,transition: {duration: 0.3} }}
                >
                    <img src={ishover ? darkIcon : icon} alt="" style={{width: '100%',objectFit: 'cover'}}/>
                </Box>
                <CardHeading color={ishover ? "#000" : '#ffff'} >{name}</CardHeading>
                <CardLine  border={ishover ? "solid #000" : "solid #66FCF1"}/>
                <CardCaption 
                    color={ishover ? "#000" : '#fff'} 
                    fontWeight={ishover && 400}
                >{desc}</CardCaption>
            </Stack>
        </Reveal>
    );
}

const container = {
    background: '#121212', 
    padding: {xs: '20px',lg: '30px'},
    textAlign: 'left',
    height: {xs: '250px' ,lg: '280px'},
    borderBottom:'2px solid #66FCF1',
}

const iconContainer = {
    width:  {xs: '40px' , sm: '50px',md: '40px', lg: '70px'},
    paddingBottom: {xs: '15px',sm: '18px',md: '25px'},
}

const hoverStyle = {
    background: '#66FCF1', // Change background color on hover
    color: '#000000', // Change text color on hover
    transition: 'background 1s ease',
    borderBottom: '2px solid #121212',
}



 
export default ServiceCard;