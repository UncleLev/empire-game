import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#b71f1f',
        },
        // secondary: {
        //     main: ,
        // },
    },
    typography: {
        fontFamily: `"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif`,
        fontSize: 14,
    },
});

export default theme;
