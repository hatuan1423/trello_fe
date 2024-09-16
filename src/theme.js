import { createTheme } from '@mui/material/styles';

const APP_BAR_HEIGHT = "58px"
const BOARD_BAR_HEIGHT = "60px"
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const theme = createTheme({
    trello: {
        appBarHeight: APP_BAR_HEIGHT,
        boardBarHeight: BOARD_BAR_HEIGHT,
        boardContentHeight: BOARD_CONTENT_HEIGHT
    },
    colorSchemes: {
        dark: {
        },
        light: {
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
                    '*::-webkit-scrollbar-thumb:hover': {
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
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem"
                }
            }
        }
        ,
        MuiTypography: {
            styleOverrides: {
                root: {
                    '&.MuiTypography-body1': {
                        fontSize: "0.875rem"
                    }
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    overflow: "unset"
                }
            }
        }
    }
})

export default theme;