import { Typography } from "@mui/material";

const CardCaption = ({children,color,fontWeight}) => {
  
    return ( 
        <Typography
            variant="body2"
            fontSize={{xs: '10px',sm: '12px'}}
            color={color}
            fontWeight={fontWeight}
        >
            {children}
        </Typography>
     );
}
 
export default CardCaption;