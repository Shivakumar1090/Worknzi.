import { Box } from "@mui/material";

const CardLine = ({border}) => {
    return ( 
        <Box border={border ? border : '2px solid #66FCF1'} sx={line}/>
     );
}

const line = {
    // border: '2px solid #66FCF1',
    marginBottom: {xs: '10px',sm: '15px',md: '20px'},
    borderWidth: {xs: '1px',sm : '2px'},
    width: {xs: '30%',md: '40%',},
}
 
export default CardLine;