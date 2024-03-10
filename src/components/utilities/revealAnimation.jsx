import { Box } from "@mui/material";
import { motion } from "framer-motion";

const Reveal = ({children,sx}) => {
    const scrollVariant = {
        "hidden" : {
            y: 50,
            opacity: 0,
        },
        "visible": {
            y: 0,
            opacity: 1,
        },
        "changeover": {
            duration: 1.5,
            type: 'spring',
            delay: 0.2,
        },
        "viewport": {
            once: true,
        }
    }
    return ( 
        <Box
            component={motion.div}
            variants={scrollVariant}
            initial={scrollVariant.hidden}
            transition={scrollVariant.changeover}
            whileInView={scrollVariant.visible}
            viewport={scrollVariant.viewport}

            sx={sx}
        >
            {children}
        </Box>
     );
}
 
export default Reveal;