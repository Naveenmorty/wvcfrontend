import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { inputTextFieldStyle, buttonContained, PrimaryColor, SecondaryColor, formControlStyle } from '../Styles/Style';
import { Button, Grid, Link, List, Stack, Typography } from '@mui/material';
import brandLogo from '../Assets/Images/wv-brand.png';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

const loginCheckBox = createTheme({
    components: {
        MuiFormControlLabel: {
            styleOverrides: {
                root: {
                    '& .MuiCheckbox-root .MuiSvgIcon-root': {
                        fill: '#B6B7BA',
                    },
                    '& .Mui-checked .MuiSvgIcon-root': {
                        fill: '#1049A9',
                    },
                    '& .MuiFormControlLabel-label': {
                        color: `${SecondaryColor}`, cursor: 'pointer', fontSize: '18px'
                    },

                },
            },
        },
    },
});


export default function NewPassword() {
    const navigate = useNavigate()
    const handleDashboardClick = () => {
        navigate('/dashboard')
    }

    const [showPassword1, setShowPassword1] = React.useState(false);
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleMouseDownPassword1 = (event) => {
        event.preventDefault();
    };
    const [showPassword2, setShowPassword2] = React.useState(false);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };
    return (
        <Box
            display={'flex'}
            height={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
            component="form"
            autoComplete="off"
        >
            <Box sx={{ backgroundColor: '#fff', p: 5 }} maxWidth={'400px'}>
                <Box component={'img'} alt='World Vision' src={brandLogo} display={'block'} margin={'auto'} />
                <Typography variant="h5" sx={{ color: `${PrimaryColor}`, fontWeight: 600, mt: 8, }}>Create New Password</Typography>
                <Typography variant="body1" sx={{ color: `${PrimaryColor}`, fontSize: 18, mt: 2.5 }}>Protect your account by choosing a unique and strong password. Your security is our priority.</Typography>
                <FormControl theme={formControlStyle} sx={{ mt: 3 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">New Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={showPassword1 ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword1}
                                    onMouseDown={handleMouseDownPassword1}
                                    edge="end"
                                >
                                    {showPassword1 ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl theme={formControlStyle} sx={{ mt: 3 }} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={showPassword2 ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword2}
                                    onMouseDown={handleMouseDownPassword2}
                                    edge="end"
                                >
                                    {showPassword2 ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>


                <Box sx={{ pt: 3, width: '100%' }}>
                    <Button theme={buttonContained} onClick={handleDashboardClick} fullWidth variant="outlined">Continue</Button>
                </Box>
            </Box>
        </Box>
    );
}