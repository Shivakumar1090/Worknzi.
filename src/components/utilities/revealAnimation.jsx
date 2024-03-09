import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { scrollVariant } from "../Animations/variants";

const Reveal = ({children}) => {
    return ( 
        <Box
            component={motion.div}
            variants={scrollVariant}
            initial={scrollVariant.hidden}
            transition={scrollVariant.changeover}
            whileInView={scrollVariant.visible}
            viewport={scrollVariant.viewport}
        >
            {children}
        </Box>
     );
}
 
export default Reveal;