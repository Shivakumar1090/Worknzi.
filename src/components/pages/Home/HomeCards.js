import { Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import BottomLine from "../../utilities/bottomline";
import Card from "./card";
const {HomeCardsData}  = require("./data");

const HomeCards = () => {
    return ( 
        <Box>
            <Grid
                component={motion.div}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={{ xs: 3, sm: 3, lg: 3 }}
                columnSpacing={{ xs: 2, sm: 3, lg: 8 }}
            >
                {HomeCardsData.map((item) => {
                    return(
                        <Grid
                            key={item.id} item xs={8} sm={4} lg={2.75}
                        >
                            <Card data={HomeCardsData} id={item.id}/>
                        </Grid>
                    )
                })}
            </Grid>
            <BottomLine />
        </Box>
    );
}

export default HomeCards;