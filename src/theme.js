import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#66FCF1",
        },
       
    },
    typography: {
        fontFamily: "Poppins",
        allVariants: {
            color: "#fff",
        },
        caption : {
            color: '#66FCF1',
            textTransform: 'uppercase'
        },
        body2: {
            fontWeight: 200,
            fontSize: "10px",
            letterSpacing: 1.2,
            lineHeight: 1.7,
        }
    },
});

export default theme;