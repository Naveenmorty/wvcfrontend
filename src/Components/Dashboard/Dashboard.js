import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useNavigate } from 'react-router-dom';
import { Grid, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import { PrimaryColor, SecondaryColor, boxShadow } from '../Styles/Style'
import FundraiserTable from './FundraiserTable';
import Link from '@mui/material/Link';
import Title from './Title';
import DonorTable from './DonorsTable';
import Topcard from './Topcard';
import DonorChart from './DonorChart';
import FundraiserChart from './FundraiserChart';
import Copyright from './Copyright';
import Header from './Header';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export default function Dashboard() {
    const navigate = useNavigate()
    const FundraiserClick = () => {
        navigate('/fundraisers');
    }
    const DonorClick = () => {
        navigate('/donors');
    }
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header/>
                <Box component="main" sx={{ flexGrow: 1, p: 3,minHeight: 'calc(100vh - 50px)',}}>
                    <DrawerHeader />
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Topcard />
                        </Grid>
                        <Grid item xs={12} md={12} lg={4}>
                            <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px', p: 2 }}>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={2} sx={{ mb: 1 }}>
                                    <Title>Recent Fundraisers</Title>
                                    <Link onClick={FundraiserClick} sx={{ cursor: 'pointer', fontSize: 14, fontWeight: 400 }}>See All</Link>
                                </Stack>
                                <FundraiserTable />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={12} lg={8}>
                            <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px', p: 2 }}>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={2} sx={{ mb: 1 }}>
                                    <Title>Recent Donors</Title>
                                    <Link onClick={DonorClick} sx={{ cursor: 'pointer', fontSize: 14, fontWeight: 400 }}>See All</Link>
                                </Stack>
                                <DonorTable />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6.5}>
                            <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px', p: 2,height:'100%',}}>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={2} sx={{ mb: 1 }}>
                                    <Title>Donor by Month</Title>
                                </Stack>
                                <DonorChart />
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={12} lg={5.5}>
                            <Card sx={{ boxShadow: `${boxShadow}`, 
                            borderRadius: '4px', 
                            p: 2,
                            height:'100%',
                            }}>
                                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={2} sx={{ mb: 1 }}>
                                    <Title>Overall Fundraisers</Title>
                                </Stack>
                                <FundraiserChart />
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright />
        </>
    );
}