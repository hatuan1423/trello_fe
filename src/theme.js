import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    trelloCustom: {
        appBarHeight: '48px',
        boardBarHeight: '58px'
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