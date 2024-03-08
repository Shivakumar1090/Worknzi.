import { Box } from "@mui/material";
import { motion } from "framer-motion";

const BottomLine = () => {
    return ( 
        <Box 
            sx={line} 
            component={motion.div}
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2,type: 'spring',delay : 0.2}}
            viewport={{once: true}}
        />
    );
}

const line = {
    height: '50px',
    border: '2px solid #66FCF1',
    width: '0px',
    // alignItems: 'center',
    // textAlign: 'center',
    margin:"30px auto 30px auto"
}
 
export default BottomLine;