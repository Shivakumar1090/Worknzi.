import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Header = ({heading,body}) => {
    return ( 
        <Box
            component={motion.div}
            initial={{x: -300,opacity: 0}}
            whileInView={{x: 0,opacity: 1}}
            transition={{duration: 2,delay: 0.5,type: 'spring'}}
            viewport={{once: true}}
        >
             <Stack direction="row" alignItems="center" spacing={2}>
                <Box sx={line}/> 
                <Typography sx={{"&:hover": {color: '#66fcf1'}}} fontSize={{xs: '40px' , sm: '50px',lg: '60px'}} fontWeight={700}>{heading}.</Typography>
            </Stack>
            <Typography variant="caption" letterSpacing={5}>{body}</Typography>
        </Box>
    );
}

const line = {
    width: '5%',
    border: '2px solid #66FCF1',
}
 
export default Header;