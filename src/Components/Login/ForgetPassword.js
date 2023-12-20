import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { inputTextFieldStyle, buttonContained, PrimaryColor, SecondaryColor, formControlStyle } from '../Styles/Style';
import { Button, Grid, Link, List, Stack, Typography } from '@mui/material';
import brandLogo from '../Assets/Images/wv-brand.png';
import { useNavigate } from 'react-router-dom';



export default function ForgetPassword() {
    const navigate = useNavigate()
    const handleInstructionClick = () => {
        navigate('/instruction')
    }
    const handleBackClick = () => {
        navigate('/')
    }
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
                <Typography variant="h5" sx={{ color: `${PrimaryColor}`, fontWeight: 600, mt: 8, }}>Reset Password</Typography>
                <Typography variant="body1" sx={{ color: `${PrimaryColor}`,fontSize:18,mt:2.5}}>Enter the email address associated with your account, and we’ll send you a link to reset instructions.</Typography>
                <TextField theme={inputTextFieldStyle}
                    sx={{ mt: 3 }}
                    fullWidth
                    id="filled-basic"
                    label="Email address"
                    variant="filled" />
                <Box sx={{ pt: 4, width: '100%' }}>
                    <Button theme={buttonContained} onClick={handleInstructionClick} fullWidth variant="outlined">Send Instructions</Button>
                    <Typography sx={{ mt: 2.5, textAlign: 'center' }}><Link sx={{ color: '#1049A9', cursor: 'pointer', fontSize: '18px' }} onClick={handleBackClick} underline="none">Back to Login</Link></Typography>
                </Box>
            </Box>
        </Box>
    );
}