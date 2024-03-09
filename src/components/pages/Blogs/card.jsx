import { Box, Button, Stack } from "@mui/material";
import BlogImg from "../../../Assets/images/blog.png";
import CardHeading from "../../utilities/Card/cardHeading";
import CardCaption from "../../utilities/Card/cardCaption";

const BlogsCard = () => {
    return ( 
        <Box>
            <Box height='300px'>
                <img src={BlogImg} alt="" style={{height: '100%',width: '100%',objectFit:"cover"}}/>
            </Box>
            <Stack spacing={2} padding="5% 10% 0% 5%">
                <Box>
                    <CardHeading>Future Concept</CardHeading>
                    <CardCaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam purus urna,</CardCaption>
                </Box>
                <Button sx={button}>Read more.</Button>
            </Stack>
        </Box>
     );
}
 
const button = {
    border: "3px solid #fff",
    borderRadius: '50px',
    padding: '10px',
    fontWeight: 400,
    width: '120px',
    textTransform: 'capitalize',
}

export default BlogsCard;