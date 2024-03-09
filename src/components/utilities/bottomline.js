import { Box } from "@mui/material";
import { motion } from "framer-motion";

const BottomLine = () => {
    return ( 
        <Box padding="30x 0px 30px 0px">
            <Box 
                sx={line} 
                component={motion.div}
                initial={{scale: 0.1}}
                whileInView={{scale: 1}}
                transition={{duration: 2,type: 'spring',delay : 0.2}}
                viewport={{once: true}}
            />
        </Box>
    );
}

const line = {
    height: '50px',
    border: '1px solid #66FCF1',
    width: '0px',
    margin: 'auto',
    // paddingTop:"30px",
    // paddingBottom: '310px',
}
 
export default BottomLine;