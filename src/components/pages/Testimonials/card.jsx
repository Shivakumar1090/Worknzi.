import { Box, Stack, Typography } from "@mui/material";
import profile from "../../../Assets/images/testimonials/profile.png";
import stars from "../../../Assets/images/testimonials/stars.png";
import testimonial from "../../../Assets/images/testimonials/testimonial.png";
import CardCaption from "../../utilities/Card/cardCaption";
import { motion } from "framer-motion";
import { scrollVariant } from "../../Animations/variants";

const TestimonialCard = () => {
    
    return ( 
        <Box 
            component={motion.div}
            variants={scrollVariant}
            initial={scrollVariant.hidden}
            transition={scrollVariant.changeover}
            whileInView={scrollVariant.visible}
            viewport={scrollVariant.viewport}
            // whileHover={{scale: 0.9}}
        >
            <Stack alignItems="center" textAlign="center"  direction="column" spacing={{xs: -3,sm: -5,md: -5}}>
                <Box sx={innercontainer} alignItems="center">
                    <Box sx={icon}>
                        <img src={testimonial} alt="" style={{width: '100%'}}/>
                    </Box>
                    <Stack spacing={2}  alignItems="center">
                        <CardCaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus urna,Lorem ipsum dolor sit amet, consectetur adipiscing elit. </CardCaption>
                        <img src={stars} alt="" style={{width: '100px'}}/>
                    </Stack>
                </Box>
                <Stack spacing={1} alignItems="center">
                    <Box width={{xs: '70px' , sm: '70px' ,lg: '100px'}}>
                        <img src={profile} alt="" style={{width: '100%',objectFit: 'cover'}}/>
                    </Box>
                    <Typography fontWeight={500}>Ram Kumar</Typography>
                    <Typography fontSize={{xs: '13px',sm: '14px'}} fontWeight={200}>Designer</Typography>
                </Stack>
            </Stack>
        </Box>
    );
}

const innercontainer = {
    background: '#0B0C10',
    padding: {xs: '15px',sm: '15px',lg: '25px'},
    height: {xs: '200px' , sm: '250px'},
    width: {xs: '80%' },
    display: 'flex',
    flexDirection: 'column'
}

const icon = {
    width:  {xs: '30px' , sm: '40px',lg: '40px'},
    paddingBottom: {xs: '15px',sm: '20px',md: '20px'},
}

 
export default TestimonialCard;