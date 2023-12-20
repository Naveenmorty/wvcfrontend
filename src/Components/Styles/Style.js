import { createTheme } from '@mui/material/styles';

const bgPrimaryColor = "#E86100"
const bgSecondaryColor = "#EAEBEE"
const btnSecondaryColor = "#1049A9"
const textSecondaryColor = "#65676B"
const PrimaryColor = "#17191F"
const SecondaryColor = "#65676B"
const errorColor = "#D30519";

const boxShadow = "0px 1px 3px 0px rgba(0, 0, 0, 0.10)";


const menuButton = createTheme({
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    marginBottom: 10,
                    '&.Mui-selected': {
                        backgroundColor: `${PrimaryColor}`,
                        borderRadius: '12px',
                    },
                    '&.Mui-selected:hover': {
                        backgroundColor: `${PrimaryColor}`,
                    },
                    '& .MuiListItemIcon-root': {
                        minWidth: '45px',
                    },
                },
            },
        },
    },
});


const buttonOutlined = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: `${bgSecondaryColor}`,
                    textTransform: 'none',
                    color: `${PrimaryColor}`,
                    padding: '8px 20px',
                    fontSize: '16px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    fontFamily: 'Hanken Grotesk',
                    boxShadow: 'none',
                    border: `1px solid ${bgSecondaryColor}`,
                    '&:hover': {
                        boxShadow: 'none',
                        backgroundColor: `${bgSecondaryColor}`,
                        border: `1px solid ${bgSecondaryColor}`,
                    },
                    '&.Mui-disabled': {
                        backgroundColor: `${bgSecondaryColor}`,
                        opacity: 0.4,
                        color: `${PrimaryColor}`,
                        border: `1px solid ${bgSecondaryColor}`,
                    },
                },
            },
        },
    },
});

const buttonContained = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: `${btnSecondaryColor}`,
                    textTransform: 'none',
                    color: '#fff',
                    padding: '8px 20px',
                    fontSize: '16px',
                    borderRadius: '12px',
                    fontWeight: '600',
                    fontFamily: 'Hanken Grotesk',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: 'none',
                        backgroundColor: `${btnSecondaryColor}`,
                    },
                    '&.Mui-disabled': {
                        backgroundColor: `${btnSecondaryColor}`,
                        opacity: 0.4,
                        color: '#fff',
                        border: `1px solid ${btnSecondaryColor}`,
                    },
                },
            },
        },
    },
});



// TeritaryBtnOutlined 
const teritaryBtnOutlined = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: `#FFF`,
                    textTransform: 'none',
                    color: `${PrimaryColor}`,
                    padding: '8px 12px',
                    fontSize: '14px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontFamily: 'Hanken Grotesk',
                    boxShadow: 'none',
                    border: `1px solid #B6B7BA`,
                    '&:hover': {
                        boxShadow: 'none',
                        backgroundColor: `${bgSecondaryColor}`,
                        border: `1px solid ${bgSecondaryColor}`,
                    },
                    '&.Mui-disabled': {
                        backgroundColor: `${bgSecondaryColor}`,
                        opacity: 0.4,
                        color: `${PrimaryColor}`,
                        border: `1px solid ${bgSecondaryColor}`,
                    },
                },
            },
        },
    },
});


// textfield css
const inputTextFieldStyle = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: `${SecondaryColor}`,
                        fontSize: 18,
                    },
                    '& label.Mui-focused': {
                        color: `${SecondaryColor}`,
                    },
                    '& label.Mui-error': {
                        color: `${errorColor}`,
                    },
                    '& .MuiFilledInput-root': {
                        backgroundColor: '#fff',
                        borderRadius: 12,
                        border: '1px solid #B6B7BA',
                        color: `${PrimaryColor}`,
                        fontSize: 18,
                        '&:before': {
                            display: 'none',
                        },
                        '&:after': {
                            display: 'none',
                        },
                        '&:hover': {
                            backgroundColor: '#fff',
                        },
                    },
                    '& .MuiFilledInput-root.Mui-focused': {
                        border: '1px solid #1049A9',
                    },
                },
            },
        },
    },
});

const formControlStyle = createTheme({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    '& label': {
                        color: `${SecondaryColor}`,
                        fontSize: 18,
                    },
                    '& label.Mui-focused': {
                        color: `${SecondaryColor}`,
                    },
                    '& label.Mui-error': {
                        color: `${errorColor}`,
                    },
                    '& .MuiFilledInput-root': {
                        backgroundColor: '#fff',
                        borderRadius: 12,
                        border: '1px solid #B6B7BA',
                        color: `${PrimaryColor}`,
                        fontSize: 18,
                        '&:before': {
                            display: 'none',
                            // border: 'none',
                            // right: '8px',
                            // left: 'auto',
                            // content: `"*"`,
                            // top: '3px',
                            // color: `${errorColor}`,
                            // fontSize:18,
                            // transition: 'unset',
                        },
                        '&:after': {
                            display: 'none',
                        },
                        '&:hover': {
                            backgroundColor: '#fff',
                        },
                    },
                    '& .MuiFilledInput-root.Mui-focused': {
                        border: '1px solid #1049A9',
                    },
                },
            },
        },
    },
});


const statusModal = createTheme({
    components: {
        MuiMenu: {
            styleOverrides: {
                root: {
                    '& .MuiPaper-root': {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.10)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                        boxShadow: 'none',
                        borderRadius: 8,
                        border: '1px solid #b6b7ba',
                        padding: 12,
                        minWidth: 180,
                        maxWidth: 230,
                    },
                    '& .MuiPaper-root:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 12,
                        height: 12,
                        border: '1px solid #b6b7ba',
                        borderBottom: 0,
                        borderRight: 0,
                        backgroundColor: '#fff',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                    '& .MuiMenu-list': {
                        paddingTop: 0,
                        paddingBottom: 0,
                    },
                    '& .MuiMenu-list .MuiMenuItem-root': {
                        fontSize: 14, 
                        color: `${PrimaryColor}`, 
                        justifyContent: 'space-between',
                        paddingLeft:0,
                        paddingRight:0,
                        paddingTop:8,
                        paddingBottom:8,
                        '&:hover': { backgroundColor: 'transparent' }, 
                    },
                    '& .MuiMenu-list .MuiMenuItem-root .MuiTypography-root':{
                        fontSize: 14, 
                        color: `${PrimaryColor}`,
                    }
                },
            },
        },
    },
});

export { bgPrimaryColor, bgSecondaryColor, btnSecondaryColor, textSecondaryColor, PrimaryColor, SecondaryColor, errorColor, boxShadow };
export { menuButton, buttonContained, buttonOutlined, inputTextFieldStyle, formControlStyle, teritaryBtnOutlined, statusModal };