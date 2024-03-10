import { Typography } from "@mui/material";

const CardCaption = ({children,color,fontWeight}) => {
  
    return ( 
        <Typography
            variant="body2"
            fontSize={{xs: '11px',sm: '12px',lg: '13px'}}
            color={color}
            fontWeight={fontWeight}
        >
            {children}
        </Typography>
     );
}
 
export default CardCaption;