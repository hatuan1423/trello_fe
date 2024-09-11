import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    trelloCustom: {
        appBarHeight: '58px',
        boardBarHeight: '60px'
    },
    colorSchemes: {
        dark: {
            palette: {
                primary: teal,
                secondary: deepOrange
            }
        },
        light: {
            palette: {
                primary: cyan,
                secondary: orange
            }
        }
    },
})

export default theme;