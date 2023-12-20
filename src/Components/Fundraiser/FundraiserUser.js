import * as React from 'react';
import { useState } from 'react';
import { Grid, Box, Stack, Typography, Item } from '@mui/material';
import UserTiles from '../Fundraiser/UserTiles';
import CampaignListTable from './CampaignListTable';
import ProfileInformation from './ProfileInformation';
import { PrimaryColor, boxShadow } from '../Styles/Style';
import leftArrow from '../Assets/Images/Arrow_Left.svg';
import FundraiserTable from './FundraiserTable';

export default function FundraiserUser() {
    const [showFundraiserTable, setFundraiserTable] = useState(false);
    const handleFundraiserTableClick = () => {
        setFundraiserTable(true);
    };
    if (showFundraiserTable) {
        return (
           <FundraiserTable/>
        );
    }
    return (
        <>
            <Stack direction={'row'} spacing={1} mb={1} onClick={handleFundraiserTableClick} sx={{ cursor: 'pointer', display: 'inline-flex' }}>
                <Box component={'img'} src={leftArrow} />
                <Typography sx={{ color: `${PrimaryColor}`, fontSize: 18, fontWeight: 600 }}>Darlene Robertson</Typography>
            </Stack>
            <Grid container spacing={2.5}>
                <Grid item xs={12} md={9} >
                    <UserTiles />
                    <CampaignListTable />
                </Grid>
                <Grid item xs={12} md={3}>
                    <ProfileInformation />
                </Grid>
            </Grid>
        </>
    )
}