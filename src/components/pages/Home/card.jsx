import { Box, Stack, Typography } from "@mui/material";
import icon_idea from "../../../Assets/icons/idea.png";
import { motion } from "framer-motion";
import { useState } from "react";
import CardCaption from "../../utilities/Card/cardCaption";
import CardLine from "../../utilities/Card/cardLine";
import CardHeading from "../../utilities/Card/cardHeading";
import { scrollVariant } from "../../Animations/variants";

const Card = () => {
    return ( 
        <Stack 
            sx={container}
            justifyContent="center"
            component={motion.div}
            whileHover={{scale: 1.1,transition: {duration:0.3},border: '2px solid #66FCF1'}}
            variants={scrollVariant}
            initial={[scrollVariant.hidden,{border: '2px solid #121212'}]}
            transition={scrollVariant.changeover}
            whileInView={scrollVariant.visible}
            viewport={scrollVariant.viewport}
            // initial={{border: '2px solid #121212',y: 100,opacity: 0}}
        >
            <Box sx={imgContainer}>
                <img src={icon_idea} alt="" style={{width: '100%',objectFit: 'cover'}}/>
            </Box>
            <CardHeading>Future Concept.</CardHeading>
            <CardLine />
            <CardCaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus urna,</CardCaption>
        </Stack>
    );
}

const container = {
    background: '#121212', 
    textAlign: 'left',
    height: {xs: '200px' , sm: '250px',lg: '250px'},
    padding: {xs: '15px',sm: '15px',lg: '25px'},
}

const imgContainer = {
    marginBottom: {xs: '15px',sm: '20px',md: '25px'},
    width : {xs: '30px' , sm: '40px',lg: '50px'},
}
 
export default Card;