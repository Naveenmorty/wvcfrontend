import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Stack, Typography, Item } from '@mui/material';
import { PrimaryColor} from '../Styles/Style'
import BackArrow from '../Assets/Images/Arrow_Left.svg';
import { IconButton } from '@mui/material';
import CampaignDetail from './CampaignDetail';
import DonorListTable from './DonorListTable';

export default function CampaignDonorList() {
    return (
        <>
                    {/* <Box mb={1}>
                        <IconButton aria-label="back">
                            <Box component={'img'} src={BackArrow} alt='Back' onClick={navigateToBack}></Box>
                        </IconButton>
                        <Typography component={'span'} sx={{ color: PrimaryColor, fontWeight: 600, fontSize: 18 }}>Campaign 1</Typography>
                    </Box> */}
                    <Grid container spacing={2.5}>
                        <Grid item xs={12} md={9} >
                            <DonorListTable />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <CampaignDetail />
                        </Grid>
                    </Grid>
        </>
    )
}