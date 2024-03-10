import { Box, Button, Stack, Typography } from "@mui/material";
import IMG_Ostrich1 from "../../../Assets/images/ostrich11.png";
import IMG_Ostrich2 from "../../../Assets/images/ostrich22.png";
import Reveal from "../../utilities/revealAnimation";
import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";

const Home = () => {

    return ( 
        <Element name="Home">
            <Box alignItems="center"  margin="auto" width={{xs: '90%' ,sm: '85%', md: '80%',lg: '80%'}} height={{xs: '90vh',sm: '100vh',md: '80vh'}} position="relative">
                <Stack 
                    textAlign={{xs: 'center',md: 'left'}}
                    justifyContent="center"
                    alignItems={{xs: 'center',md: 'start'}}
                    height="100%"
                >
                    <Reveal><Typography fontSize={{xs: '13px',sm: '14px',lg: '15px'}} variant="caption" gutterBottom letterSpacing={3}>Where Your ideas take flight.</Typography></Reveal>
                    <Reveal>
                        <Typography sx={largetext1} gutterBottom>
                            Your <span style={{color: '#66fcf1',opacity: 0.8}}>Destination</span> for <span style={{color: '#66fcf1',opacity: 0.9}}>Digital</span> Solutions.
                        </Typography>
                    </Reveal>
                    <Reveal>
                        <Link to="Services" smooth={true}>
                        <Button sx={button}>
                            Getting Started
                        </Button>
                        </Link>
                    </Reveal>
                    <Box 
                        sx={Imgscontainer}
                        component={motion.div}
                        initial={{y: -500,opacity: 0}}
                        animate={{opacity: 1,y: 0}}
                        
                        transition={{duration : 2,delay: 0.3,type: 'spring'}}
                    >
                        <Box sx={img}>
                            <img src={IMG_Ostrich1} alt="" style={{width: '100%',objectFit: 'cover'}}/>
                        </Box>
                        <Box sx={img2}>
                            <img src={IMG_Ostrich2} alt=""  style={{width: '100%',objectFit: 'cover'}}/>
                        </Box>
                    </Box>
                
                </Stack>

            </Box>
        </Element>
     );
}

const largetext1 = {
    fontWeight: {xs: 600,sm: 600},
    letterSpacing: {xs: 5,md: 6},
    fontSize: {xs: '50px', sm: '85px' ,lg: '90px'},
    lineHeight: {xs: 1.2,md: 1.2},
}

const button = {
    border: "3px solid #fff",
    textTransform: 'capitalize',
    borderRadius: {xs: '30px' ,sm: '40px', md: '50px'},
    padding: '15px',
    fontWeight: 500,
    width: {xs: '150px' ,sm:'180px', md: '200px'},
    "&:hover" : {
        background: '#66FCF1',
        color: '#000',
        border: "3px solid #66FCF1",
    }
}

const Imgscontainer = {
    maskImage: "linear-gradient(#000,transparent)",
    "-webkit-mask-image": "linear-gradient(#000 10%,transparent 90%)",
    display: "flex",
    zIndex: -200,
    alignItems: 'center',
    justifyContent: 'center',
    position: {xs: "relative",md: "absolute"},
    top: "10%", 
    right: '0%',
}

const img = {
    // width: {xs: '120px',sm: '200px',md: '230px', lg:'250px',xl: '270px'},
    width: {xs: '50%',sm: '40%',md: '35%',},
    opacity: 0.8,
}

const img2 = {
    // width: {xs: '150px',sm:'230px', md: '250px', lg:'300px'},
    width: {xs: '60%',sm: '50%',md: '40%'},
    opacity: 0.9,

}

export default Home;