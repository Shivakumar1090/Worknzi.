import MenuIcon from '@mui/icons-material/Menu';
import { 
    Box, 
    Drawer, 
    IconButton, 
    Stack, 
    Tab, 
    Tabs, 
    Typography, } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Logo from "./logo";
import PropTypes from 'prop-types';
import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const navItems = ['Home', 'Services', 'Work','About', 'Testimonials','Contact'];
const drawerWidth = "100%";

const Navbar = (props) => {
    const { window } = props;
    const [currentTab, setCurrentTab] = useState("Home");
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box>
            <Stack direction="row" justifyContent="space-between"alignItems="center">
                <Typography fontSize="20px" color="#000" fontWeight={700}>Menu</Typography>
                <IconButton onClick={handleDrawerToggle} >
                    <CloseIcon color='primary' style={{fontSize: '20px',background: '#000',padding: '5px',borderRadius: '5px'}}/>
                </IconButton>
            </Stack>
            <Stack spacing={2} alignItems="left" padding="10%">
                {navItems.map((item) => (
                    <Link 
                        smooth={true}
                        to={item}
                    >
                        <Typography fontSize="18px" color="#000" onClick={handleDrawerToggle} fontWeight={500}>{item}</Typography>
                    </Link>
                ))}
          </Stack>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return ( 
        <Box
            id="BackToTop" 
            sx={navbar_cont}
            component={motion.div}
        >
            <Logo />
            <Box sx={{display: {xs: 'none', md: 'inline'}}}>
                <Tabs
                    indicatorColor="secondary"
                    value={currentTab}
                    onChange={(event, newval) => setCurrentTab(newval)}
                    role="navigation"
                    
                >
                    {navItems.map(item => (
                        <Tab
                            disableRipple
                            value={item}
                            label={
                                <Typography
                                    sx={{
                                        color: currentTab === item ? "#fff" : '#d9d9d9',
                                        textTransform: 'capitalize', 
                                        fontWeight : currentTab === item ? 400 : 300,
                                        fontSize: currentTab === item ? "18px" : "15px"
                                    }}
                                    onClick={handleDrawerToggle}
                                >
                                    <Link
                                        to={item} // Scroll to the corresponding element ID
                                        smooth={true}
                                    >
                                        {item}
                                    </Link>
                                </Typography>
                            }
                        >
                        </Tab>
                    ))}
                </Tabs>
            </Box>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
            >
                <MenuIcon color='primary'/>
            </IconButton>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    margin: 'auto',
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', background: "rgba(102, 252, 242,0.95)", padding: '5%', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

const navbar_cont = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    // position: 'rel'
}


Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

// const NavItem = ({navtext}) => {
//     return(
//         <Typography 
//             variant="text" 
//             fontSize='15px' 
//             color="#000"
//             sx={{':hover' : {color: '#8247FF'}, marginRight: '30px',cursor: 'pointer',fontWeight: '500'}} 
//         >
//             {navtext}
//         </Typography>
//     )
// }
 
export default Navbar;