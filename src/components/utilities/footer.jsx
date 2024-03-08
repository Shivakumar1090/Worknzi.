import { Box, Stack, Typography } from "@mui/material";
import Logo from "./logo";

const Footer = () => {
    return ( 
        <Box display="flex" justifyContent="space-around" margin="50px 0px 20px">
            <Stack spacing={2}>
                <Logo />
                <Typography>We are more than a digital agency</Typography>
                <Box sx={line}/>
            </Stack>
            <Stack direction='row' spacing={10}>
                <Stack spacing={1}>
                    <Typography fontWeight={600}>Contact us</Typography>
                    <Typography>89898989899</Typography>
                    <Typography>shiva@gmail.com</Typography>
                    <Typography>mbnr telangana</Typography>
                </Stack>
                <Stack spacing={1}>
                    <Typography fontWeight={600}>Our Services</Typography>
                    <Typography>Service 01</Typography>
                    <Typography>Service 02</Typography>
                    <Typography>Service 03</Typography>
                    <Typography>Service 01</Typography>
                    <Typography>Service 02</Typography>
                    <Typography>Service 03</Typography>
                </Stack>
                <Stack spacing={1}>
                    <Typography fontWeight={600}>About us</Typography>
                    <Typography>About</Typography>
                    <Typography>Blog</Typography>
                    <Typography>Home</Typography>
                </Stack>
            </Stack>
        </Box>
    );
}

const line = {
    border: '2px solid #66FCF1',
    width: '50%',
}
 
export default Footer;