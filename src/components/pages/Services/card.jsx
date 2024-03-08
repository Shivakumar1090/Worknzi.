import { Box, Stack, Typography } from "@mui/material";
import icon_idea from "../../../Assets/icons/idea.png";
import icon_ideaDark from "../../../Assets/icons/ideaDark.png";
import { motion } from "framer-motion";
import { useState } from "react";
import CardHeading from "../../utilities/Card/cardHeading";
import CardCaption from "../../utilities/Card/cardCaption";
import CardLine from "../../utilities/Card/cardLine";
import { scrollVariant } from "../../Animations/variants";

const ServiceCard = () => {
    const [ishover,setisHover] = useState(false);
    return ( 
        <Stack 
            component={motion.div}
            variants={scrollVariant}
            initial={scrollVariant.hidden}
            transition={scrollVariant.changeover}
            whileInView={scrollVariant.visible}
            viewport={scrollVariant.viewport}
           
            sx={{...container, '&:hover': hoverStyle}}
            onMouseEnter={() => setisHover(true)}
            onMouseLeave={() => setisHover(false)}
            
            justifyContent="center"
        >
            <Box sx={icon}>
                <img src={ishover ? icon_ideaDark : icon_idea} alt="" style={{width: '100%',objectFit: 'cover'}}/>
            </Box>
            <CardHeading color={ishover ? "#000" : '#ffff'} >Web Development.</CardHeading>
            <CardLine  border={ishover ? "solid #000" : "solid #66FCF1"}/>
            <CardCaption 
                color={ishover ? "#000" : '#fff'} 
                fontWeight={ishover && 400}
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus urna,</CardCaption>
        </Stack>
    );
}

const container = {
    background: '#121212', 
    padding: {xs: '10px',sm: '15px',md: '20px',lg: '30px'},
    textAlign: 'left',
    height: {xs: '200px' , sm: '220px',md: '250px' ,lg: '300px'},
    borderBottom:'2px solid #66FCF1',
    borderBottomRadius: "50%",
}

const icon = {
    width:  {xs: '30px' , sm: '35px',md: '40px', lg: '50px'},
    paddingBottom: {xs: '15px',sm: '18px',md: '25px'},
}

const hoverStyle = {
    backgroundColor: '#66FCF1', // Change background color on hover
    color: '#000000', // Change text color on hover
}
 
export default ServiceCard;