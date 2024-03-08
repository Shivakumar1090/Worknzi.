import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { scrollVariant } from "../../Animations/variants";

const Header = ({heading,body}) => {
    return ( 
        <Box
            component={motion.div}
            variants={scrollVariant}
            initial={scrollVariant.hidden}
            transition={scrollVariant.changeover}
            whileInView={scrollVariant.visible}
            viewport={scrollVariant.viewport}
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