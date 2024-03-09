import { Box, Grid } from "@mui/material";
import Header from "../../utilities/Header/header";
import ServiceCard from "./card";
import BottomLine from "../../utilities/bottomline";
import { ServicesData } from "./data";

const Services = () => {
    return ( 
        <Box alignItems="center" margin="auto" width={{xs: '90%' ,sm: '85%', md: '80%',lg: '80%'}}>
            <Header 
                heading="Services"
                body="our services for clients"
            />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={{ xs: 3, sm: 3, lg: 5 }}
                columnSpacing={{ xs: 2, sm: 3, lg: 5 }}
                style={{marginTop: '20px'}}
            >
                {ServicesData.map((item) => {
                    return(
                        <Grid
                            key={item.id} style={{ display: 'flex' }} item xs={6} sm={4} lg={3.5}
                        >
                            <ServiceCard data={ServicesData} id={item.id} />
                        </Grid>
                    )
                })}
            </Grid>
            <BottomLine />
        </Box>
    );
}
 
export default Services;