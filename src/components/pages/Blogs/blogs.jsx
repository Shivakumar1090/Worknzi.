import { Box, Grid, Stack, Typography } from "@mui/material";
import BlogsCard from "./card";
import BottomLine from "../../utilities/bottomline";

const Blogs = () => {
    return ( 
        <Box sx={{backgroundColor: '#121212'}}>
            <Stack justifyContent="center" alignItems="center">
                <Typography fontSize={{xs: '40px' , sm: '50px',lg: '60px'}} fontWeight={700}>
                    Latest News.
                </Typography>
                <Typography variant="caption" letterSpacing={5}>Check out some of our News</Typography>
            </Stack>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={{ xs: 3, sm: 3, lg: 5 }}
                columnSpacing={{ xs: 2, sm: 3, lg: 2 }}
                style={{padding: '20px'}}
            >
                {data.map((item) => {
                    return(
                        <Grid
                            key={item._id} style={{ display: 'flex' }} item xs={6} sm={4} lg={3}
                        >
                            <BlogsCard data={data} />
                        </Grid>
                    )
                })}
            </Grid>
            <BottomLine />
        </Box>
    );
}

const data = [ "h","h","h","h"]
 
export default Blogs;