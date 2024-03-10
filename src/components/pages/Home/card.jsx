import { Box, Stack } from "@mui/material";
import icon_idea from "../../../Assets/icons/idea.png";
import { motion } from "framer-motion";
import CardCaption from "../../utilities/Card/cardCaption";
import CardLine from "../../utilities/Card/cardLine";
import CardHeading from "../../utilities/Card/cardHeading";
import Reveal from "../../utilities/revealAnimation";

const Card = ({id,data}) => {
    const {name,desc} = data[id];

    return ( 
        <Reveal>
            <Stack 
                sx={container}
                justifyContent="center"
                component={motion.div}
                whileHover={{scale: 1.1,transition: {duration:1},border: '2px solid #66FCF1',type: 'spring'}}
                initial={{border: '2px solid #121212'}}
            >
                <Box sx={imgContainer}>
                    <img src={icon_idea} alt="" style={{width: '100%',objectFit: 'cover'}}/>
                </Box>
                <CardHeading>{name}</CardHeading>
                <CardLine />
                <CardCaption>{desc}</CardCaption>
            </Stack>
        </Reveal>
    );
}

const container = {
    background: '#121212', 
    textAlign: 'left',
    height: {xs: '200px' , sm: '250px',lg: '250px'},
    padding: {xs: '20px',sm: '15px',lg: '25px'},
}

const imgContainer = {
    marginBottom: {xs: '17px',sm: '20px',md: '25px'},
    width : {xs: '40px' , sm: '40px',lg: '50px'},
}
 
export default Card;