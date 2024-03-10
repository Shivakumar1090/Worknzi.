import { Box, Grid, Stack, Typography } from "@mui/material";
import BlogsCard from "./card";
import BottomLine from "../../utilities/bottomline";
import Reveal from "../../utilities/revealAnimation";
import { Element } from "react-scroll";

const Blogs = () => {
    return ( 
        <Element>
            <Box sx={{backgroundColor: '#121212'}}>
                <Reveal>
                    <Stack justifyContent="center" alignItems="center">
                        <Typography fontSize={{xs: '40px' , sm: '50px',lg: '60px'}} fontWeight={700}>
                            Latest News.
                        </Typography>
                        <Typography variant="caption" letterSpacing={5}>Check out some of our News</Typography>
                    </Stack>
                </Reveal>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    rowSpacing={{ xs: 3, sm: 3, lg: 4 }}
                    columnSpacing={{ xs: 2, sm: 3, lg: 4 }}
                    style={{padding: '20px'}}
                >
                    {data.map((item) => {
                        return(
                            <Grid
                                key={item.id} style={{ display: 'flex' }} item xs={10} sm={4} lg={3.75}
                            >
                                <BlogsCard data={data} />
                            </Grid>
                        )
                    })}
                </Grid>
                <BottomLine />
            </Box>
        </Element>
    );
}

const data = [ "h","h","h"]
 
export default Blogs;