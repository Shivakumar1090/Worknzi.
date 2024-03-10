import { Button, Stack, Typography } from "@mui/material";
import fbicon from "../../../Assets/icons/accounts/fb.png";
import instaicon from "../../../Assets/icons/accounts/insta.png";
import Reveal from "../../utilities/revealAnimation";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Inquiry = () => {
    return ( 
        <Element name="Contact">
            <Reveal>
                <Stack 
                    spacing={3} 
                    alignItems="center" 
                    textAlign="center" 
                    height={{xs: '40vh',sm: '50vh'}}
                    padding={{xs: '5px',sm: '0px'}}
                    justifyContent="center"
                >
                    <Typography 
                        variant="h3" 
                        fontWeight={600}
                        component={motion.div}
                        whileHover={{scale: 1.1,transition: {duration: 0.2}}}
                    >Have any project in mind ?</Typography>
                    <Stack spacing={3} direction="row">
                        <img src={fbicon} alt="" style={{width: '30px',height: '30px'}}/>
                        <img src={instaicon} alt="" style={{width: '30px',height: '30px'}}/>
                    </Stack>
                    <Button sx={button}>Make inquiry</Button>
                </Stack>
            </Reveal>
        </Element>
    );
}

const button = {
    border: "3px solid #fff",
    borderRadius: '50px',
    padding: '10px',
    fontWeight: 400,
    width: '150px',
    "&:hover" : {
        background: '#66FCF1',
        color: '#000',
        border: "3px solid #66FCF1",
    }
}
 
export default Inquiry;