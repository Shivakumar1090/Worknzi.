import { Box } from "@mui/material";
import { motion } from "framer-motion";

const BottomLine = () => {
    return ( 
        <Box sx={{padding: '30px'}}>
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
    height: {xs: '40px' , sm: '60px'},
    border: '1px solid #66FCF1',
    width: '0px',
    margin: 'auto'
    // marginTop:"30px",
    // marginBottom: '30px',
}
 
export default BottomLine;