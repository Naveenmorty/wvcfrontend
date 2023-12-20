import React from 'react'
import { Card, Box, Typography, Grid } from '@mui/material'
import { PrimaryColor, SecondaryColor, boxShadow } from '../Styles/Style'

function CampaignDetail() {
    return (
        <>
            <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px', p: 2, position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, height: '100%', width: 4, background: ' #1049A9' }}></Box>
                <Typography mb={1.5} component={'p'} sx={{ fontSize: 16, fontWeight: 600, color: PrimaryColor }}>Campaign Details</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: SecondaryColor, }}>Date of Joining</Typography></Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: PrimaryColor, }}>2021-10-28</Typography></Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: SecondaryColor, }}>No. of Donors</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: PrimaryColor, }}>12</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: SecondaryColor, }}>Fund Raised </Typography>
                    </Grid>
                    <Grid item xs={6}> <
                        Typography component={'span'} sx={{ fontSize: 14, display: 'inline-block', fontWeight: 400, color: PrimaryColor, }}>$ 124</Typography>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default CampaignDetail