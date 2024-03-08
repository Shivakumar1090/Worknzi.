import { Box, Button, Stack, Typography } from "@mui/material";
import fbicon from "../../../Assets/icons/accounts/fb.png";
import instaicon from "../../../Assets/icons/accounts/insta.png";

const Inquiry = () => {
    return ( 
        <Stack spacing={3} alignItems="center" textAlign="center" height='40vh' justifyContent="center">
            <Typography variant="h4" fontWeight={600}>Have any project in mind ?</Typography>
            <Stack spacing={2} direction="row">
                <img src={fbicon} alt="" style={{width: '30px',height: '30px'}}/>
                <img src={instaicon} alt="" style={{width: '30px',height: '30px'}}/>
            </Stack>
            <Button sx={button}>Make inquiry</Button>
        </Stack>
    );
}

const button = {
    border: "3px solid #fff",
    borderRadius: '50px',
    padding: '10px',
    fontWeight: 400,
    width: '150px',
}
 
export default Inquiry;