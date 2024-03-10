import { Typography } from "@mui/material";

const CardHeading = ({color,children}) => {
    return ( 
        <Typography
            fontSize={{xs: '15px',sm: "20px", md: '22px',lg: '24px'}} 
            fontWeight={600} 
            gutterBottom
            color={color}
        >
            {children}
        </Typography>
     );
}
 
export default CardHeading;