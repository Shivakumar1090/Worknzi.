import { Box, Fade, useScrollTrigger } from "@mui/material";
import PropTypes from 'prop-types';

const ScrollTop = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
  
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#BackToTop',
        );
    
        if (anchor) {
            anchor.scrollIntoView({
            block: 'center',
            });
        }
    };
  
    return (
      <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
      </Fade>
    );
}
  
ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,

    window: PropTypes.func,
};

export default ScrollTop;