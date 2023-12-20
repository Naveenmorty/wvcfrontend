import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { inputTextFieldStyle, buttonContained, PrimaryColor, SecondaryColor, formControlStyle } from '../Styles/Style';
import {Avatar, Button, Grid, Link, List, Stack, Typography } from '@mui/material';
import mail from '../Assets/Images/mail.svg';
import { useNavigate } from 'react-router-dom';



export default function Instruction() {
    const navigate = useNavigate()
    const handleResetPassClick = () => {
        navigate('/reset-password')
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
                <Box display={'flex'} justifyContent={'center'}>
                <Avatar sx={{ bgcolor: '#E7EDF6', width: '110px', height: '110px' }}>
                    <Box component={'img'} src={mail}></Box>
                </Avatar>
                </Box>
                <Typography variant="h5" sx={{ color: `${PrimaryColor}`, fontWeight: 600, mt: 8, textAlign: 'center' }}>Mail Sent</Typography>
                <Typography variant="body1" sx={{ color: `${PrimaryColor}`, fontSize: 18, mt: 2.5 }}>Instruction has been sent to your associated mail address. Check you inbox and follow the instructions to reset password. <Link sx={{ color: '#1049A9', cursor: 'pointer', fontSize: '16px' }}>Go to Mail</Link></Typography>

                <Box sx={{ pt: 4, width: '100%' }}>
                    <Button theme={buttonContained} onClick={handleResetPassClick} fullWidth variant="outlined">Continue</Button>
                </Box>
            </Box>
        </Box>
    );
}