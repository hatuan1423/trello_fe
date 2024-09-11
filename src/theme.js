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
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    '*::-webkit-scrollbar': {
                        width: '5px',
                        height: '5px'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#ccc',
                        borderRadius: '5px'
                    }
                    ,
                    '*::-webkit-scrollbar-hover': {
                        backgroundColor: '#900',
                        borderRadius: '5px'
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: ({ theme }) => ({
                    color: theme.palette.primary.main,
                    fontSize: "0.875rem",
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.primary.light
                    },
                    '&:hover': {
                        '.MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.primary.main
                        }
                    },
                    '& fieldset': {
                        borderWidth: '1px !important'
                    }
                })
            }
        }
    }
})

export default theme;