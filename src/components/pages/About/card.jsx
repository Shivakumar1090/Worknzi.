import { Box } from "@mui/material";
import CardHeading from "../../utilities/Card/cardHeading";
import CardCaption from "../../utilities/Card/cardCaption";
import { motion } from "framer-motion";
import Reveal from "../../utilities/revealAnimation";

const AboutCard = ({data,id}) => {
    const {name,desc} = data[id];
    return ( 
        <Reveal>
            <Box 
                sx={container}
                component={motion.div}
            >
                <CardHeading>{name}</CardHeading>
                <CardCaption>{desc}</CardCaption>
            </Box>
        </Reveal>
     );
}

const container = {
    padding: '0px 0px 20px 20px',
    borderLeft: '3px solid #66FCF1',
}
export default AboutCard;