import { Box } from "@mui/material";
import CardHeading from "../../utilities/Card/cardHeading";
import CardCaption from "../../utilities/Card/cardCaption";
import { scrollVariant } from "../../Animations/variants";
import { motion } from "framer-motion";

const AboutCard = () => {
    return ( 
        <Box 
            sx={container}
            component={motion.div}
            variants={scrollVariant}
            initial={scrollVariant.hidden}
            transition={scrollVariant.changeover}
            whileInView={scrollVariant.visible}
            viewport={scrollVariant.viewport}
        >
            <CardHeading>Future Concept.</CardHeading>
            <CardCaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus urna,</CardCaption>
        </Box>
     );
}

const container = {
    padding: '0px 0px 20px 20px',
    borderLeft: '3px solid #66FCF1',
}
export default AboutCard;