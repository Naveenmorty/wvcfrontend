import React from 'react'
import { Card, Box, Typography, Grid } from '@mui/material'
import { PrimaryColor, SecondaryColor, boxShadow } from '../Styles/Style'

function ProfileInformation() {
    return (
        <>
            <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px', p: 2, position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: 4, background: ' #1049A9' }}></Box>
                <Typography mb={1.5} component={'p'} sx={{ fontSize: 16, fontWeight: 600, color: PrimaryColor }}>Profile Information</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: SecondaryColor, }}>First Name</Typography></Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: PrimaryColor, }}>Darlene</Typography></Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: SecondaryColor, }}>Last Name</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: PrimaryColor, }}>Robertson</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: SecondaryColor, }}>Email </Typography>
                    </Grid>
                    <Grid item xs={6}> <
                        Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: PrimaryColor, }}>darlene@gmail.com</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: SecondaryColor, }}>Phone</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: PrimaryColor, }}>988 754 7587</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: SecondaryColor, }}>Address</Typography></Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: PrimaryColor, }}>111 Chyna Plaza, Grand Rapids, France, 86858-4080</Typography>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default ProfileInformation