import { Box } from "@mui/material";
import Header from "../../utilities/Header/header";
import BottomLine from "../../utilities/bottomline";
import { Element } from "react-scroll";

const Work = () => {
    return ( 
        <Element name="Work">
            <Box  margin="auto" width={{xs: '90%' ,sm: '85%', md: '80%',lg: '80%'}}>
                <Header 
                    heading="Work"
                    body="Thinks we have made"
                />
                <BottomLine />
            </Box>
        </Element>
     );
}
 
export default Work;