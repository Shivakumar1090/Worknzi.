import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import IMG_Ostrich1 from "../../../Assets/images/ostrich11.png";
import IMG_Ostrich2 from "../../../Assets/images/ostrich22.png";
import Card from "./card";
import BottomLine from "../../utilities/bottomline";
import Services from "../Services/services";
import { motion } from "framer-motion";
import { FadeVaraint, MoveUpVariant } from "../../Animations/variants";

const Home = () => {
    const textVariant = {
        "hidden" : {
            // x: -500,
            opacity: 0,
        },
        "visible": {
            x: 0,
            opacity: 1,
        },
        "changeover": {
            duration: 2,
            type: "spring"
        }
    }

    return ( 
        <Box>
            <Stack
                height={{xs: '100vh',sm: '70vh',md: '85vh'}}
                direction={{xs: 'column',md: 'row'}}
                spacing={{xs: 0, md: -30,lg: -50,xl: -70}}
                alignItems="center"
                textAlign={{xs: 'center',md: 'left'}}
                justifyContent={{xs: 'center' , md: 'space-around'}}
            >
                <Box 
                    component={motion.div}
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    transition={textVariant.changeover}
                >
                    <Typography variant="caption" fontSize={{xs: '12px',sm: '15px'}}>Creative Mind, Creative Works.</Typography>
                    <Stack spacing={0}>
                        <Typography  sx={largetext}>We are digital</Typography>
                        <Typography sx={largetext} gutterBottom>agency.</Typography>
                    </Stack>
                    <Button sx={button} size='large'>Getting Started</Button>
                </Box>
                <Box 
                    component={motion.div}
                    variants={FadeVaraint}
                    initial="hidden"
                    animate="visible"
                    sx={Imgscontainer}
                >
                    <Box sx={img}><img src={IMG_Ostrich1} alt="" style={{width:'100%',objectFit: 'cover'}}/></Box>
                    <Box sx={img2}><img src={IMG_Ostrich2} alt="" style={{width:'100%',objectFit: 'cover'}}/></Box>
                </Box>
            </Stack>
            
        </Box>
     );
}


const data = [ "h","h","h"]
 
const largetext = {
    fontWeight: 700,
    letterSpacing: {xs: 5,md: 8},
    fontSize: {xs: '70px', sm: '85px' ,lg: '100px'},
    lineHeight: {xs: 1.2,md: 1},
    "&:hover" : {
        color: "#66FCF1"
    }
}

const button = {
    border: "3px solid #fff",
    textTransform: 'capitalize',
    borderRadius: {xs: '30px' ,sm: '40px', md: '50px'},
    padding: '15px',
    fontWeight: 400,
    width: {xs: '150px' ,sm:'180px', md: '200px'},
    marginTop: '20px',
    "&:hover" : {
        background: '#66FCF1',
        color: '#000',
        fontWeight: 600,
        border: "3px solid #66FCF1",
    }
}

const Imgscontainer = {
    maskImage: "linear-gradient(#000,transparent)",
    "-webkit-mask-image": "linear-gradient(#000 10%,transparent 90%)",
    display: "flex",
    zIndex: -10,
    alignItems: 'center',
}

const img = {
    width: {xs: '150px',sm: '200px',md: '230px', lg:'250px'},
}

const img2 = {
    width: {xs: '180px',sm:'230px', md: '250px', lg:'300px'},
}

export default Home;