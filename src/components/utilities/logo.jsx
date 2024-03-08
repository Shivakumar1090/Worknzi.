import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const Logo = () => {
    return ( 
        <Typography 
            component={motion.div}
            whileHover={{scale: 1.2}}
            transition={{duration: 1,type: "spring"}}
            variant="h4" 
            color='secondary' 
            sx={logo}
        >
            Work<span style={{color: '#fff'}}>nzi</span>.
        </Typography>
     );
}

const logo = {
    fontWeight: 600,
}
 
export default Logo;