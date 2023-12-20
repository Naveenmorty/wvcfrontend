import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, } from '@mui/material/styles';
import { Grid, } from '@mui/material';
import FundraiserTable from './FundraiserTable';
import Header from '../Dashboard/Header';
import Copyright from '../Dashboard/Copyright';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));
export default function Fundraiser() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header />
                <Box 
                 component="main"
                 sx={{
                     flexGrow: 1,
                     p:3,
                     width: '100%',
                     overflow: 'auto',
                     minHeight: 'calc(100vh - 50px)',
                 }}
                >
                    <DrawerHeader />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                                <FundraiserTable />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright/>
        </>
    )
}