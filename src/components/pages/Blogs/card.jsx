import { Box, Stack } from "@mui/material";
import CardHeading from "../../utilities/Card/cardHeading";
import CardCaption from "../../utilities/Card/cardCaption";
import Reveal from "../../utilities/revealAnimation";

const BlogsCard = ({id,data}) => {
    const {title,desc,img,} = data[id];
    return ( 
        <Box>
            <Reveal>
                <Box height={{xs: '250px' , md: '300px',lg: '320px',xl: '340px'}}>
                    <img src={img} alt="" style={{height: '100%',width: '100%',objectFit:"cover"}}/>
                </Box>
                <Stack spacing={2} padding="5% 10% 0% 5%">
                    <Box>
                        <CardHeading>{title}</CardHeading>
                        <CardCaption>{desc}</CardCaption>
                    </Box>
                    {/* <Button sx={button}>Read more.</Button> */}
                </Stack>
            </Reveal>
        </Box>
     );
}
 
// const button = {
//     border: "solid #fff",
//     borderWidth: {xs: '2px',sm: '3px'},
//     borderRadius: {xs: '30px',sm: '50x'},
//     padding: {xs: '5px',sm: '10px'},
//     fontWeight: 400,
//     width: '120px',
//     textTransform: 'capitalize',
// }

export default BlogsCard;