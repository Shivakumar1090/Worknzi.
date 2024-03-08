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
import { FadeVaraint } from '../Animations/variants';

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
            <IconButton onClick={handleDrawerToggle} sx={{position: 'absolute',right: 10,top: 10}}>
                <CloseIcon color='primary' style={{fontSize: '30px'}}/>
            </IconButton>
            <Stack spacing={3} alignItems="center">
                {navItems.map((item) => (
                    <Typography fontSize="20px" onClick={handleDrawerToggle} fontWeight={200}>{item}</Typography>
                ))}
          </Stack>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return ( 
        <Box 
            sx={navbar_cont}
            component={motion.div}
            variants={FadeVaraint}
            initial="hidden"
            animate="visible"
           
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
                            sx={{
                                color: '#fff',
                                textTransform: 'capitalize', 
                                fontWeight : currentTab === item ? 400 : 300,
                                fontSize: currentTab === item ? "15px" : "13px"
                            }}
                            value={item}
                            to={item}
                            label={item}
                        />
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
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', background: "rgba(0,0,0,0.8)", paddingTop: '10%', width: drawerWidth },
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
    position: 'static'
}


Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const NavItem = ({navtext}) => {
    return(
        <Typography 
            variant="text" 
            fontSize='15px' 
            color="#000"
            sx={{':hover' : {color: '#8247FF'}, marginRight: '30px',cursor: 'pointer',fontWeight: '500'}} 
        >
            {navtext}
        </Typography>
    )
}
 
export default Navbar;