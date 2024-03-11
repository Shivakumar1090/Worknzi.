import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const WorkCard = ({data,id}) => {
    const {img,name,link} = data[id];
    const [isHover,setIshover] = useState(false);

    return ( 
        <Box 
            sx={container}
            component={motion.div}
            onMouseEnter={() => setIshover(true)}
            onMouseLeave={() => setIshover(false)}
        >
            <motion.img 
                whileHover={{scale: 1.1,opacity: 0.5}}
                initial={{scale: 1.2}}
                src={img} 
                alt="" 
                style={{objectFit: 'contain',width: '100%'}}
            />
            {isHover && 
                <Box sx={hovercontainer}>
                    <Typography fontSize={{xs: '15px',sm: '30px',lg: '50px'}} fontWeight={600} gutterBottom>{name}</Typography>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button sx={button}>Link</Button>
                    </a>
                </Box>
            }
        </Box>
    );
}

const hovercontainer = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    textAlign: 'center',
}

const container = {
    margin: 'auto',
    width: {xs: '100%', sm: '85%',md: '80%'},
    overflow: 'hidden',
    position: 'relative',
}

const button = {
    fontSize: {xs: '10px',sm: '13px',lg: '15px'},
    border: "3px solid #fff",
    borderRadius: '50px',
    padding: {xs: '2px',sm: '5px',lg: '10px'},
    fontWeight: 400,
    width: {xs: '50px',sm: '120px',lg: '150px'},
    "&:hover" : {
        background: '#66FCF1',
        color: '#000',
        border: "3px solid #66FCF1",
    }
}

export default WorkCard;