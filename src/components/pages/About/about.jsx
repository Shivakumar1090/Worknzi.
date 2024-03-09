import { Box, Grid, Stack } from "@mui/material";
import Header from "../../utilities/Header/header";
import AboutCard from "./card";

import IMG_about1 from "../../../Assets/images/about/about1.png";
import IMG_about2 from "../../../Assets/images/about/about2.png";
import IMG_about3 from "../../../Assets/images/about/about3.png";
import BottomLine from "../../utilities/bottomline";
import { motion } from "framer-motion";
import Reveal from "../../utilities/revealAnimation";
import { AboutusData } from "./data";

const About = () => {
    return ( 
        <Box alignItems="center" margin="auto" width={{xs: '90%' ,sm: '80%', md: '80%'}}>
            <Header 
                heading="About us"
                body="We are more than digital agency"
            />
            <Reveal>
                <Stack 
                    direction={{xs: 'column',md: 'row'}}
                    alignItems="center"
                    justifyContent="center"
                    spacing={{xs: 2,sm: 5}}
                    height={{xs: '50vh',md: '60vh'}}
                    marginTop='30px'
                    marginBottom='30px'
                    overflow="hidden"
                >
                    <Box 
                        height={{xs: '100%',sm: '100%'}}
                        component={motion.div}
                        whileHover={{scale: 0.9}}
                    >
                        <img src={IMG_about1} alt="" style={{height: "100%",objectFit: 'cover'}}/>
                    </Box>
                    <Stack display={{xs: 'none',md: 'flex'}} spacing={5} height="100%">
                        <img src={IMG_about2} alt="" style={{height: '45%'}}/>
                        <img src={IMG_about3} alt="" style={{height: '45%'}}/>
                    </Stack>
                </Stack>
            </Reveal>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={{ xs: 3, sm: 3, lg: 3 }}
                columnSpacing={{ xs: 2, sm: 3, lg: 3 }}
            >
                {AboutusData.map((item) => {
                    return(
                        <Grid
                            key={item.id} style={{ display: 'flex' }} item xs={6} sm={4} md={4} lg={3}
                        >
                            <AboutCard data={AboutusData}  id={item.id}/>
                        </Grid>
                    )
                })}
            </Grid>
            <BottomLine />
        </Box>
     );
}
 
export default About;