import { createTheme } from '@mui/material';
import {red} from '@mui/material/colors';
const appBarTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#ceb888',
        },
        secondary: {
            main: '#1E1E1E',
        },
        text: {
            primary: '#ffffff',
        }
    },
});

export default appBarTheme;

