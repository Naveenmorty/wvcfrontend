import React from 'react'
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import dashboardIcon from '../Assets/Images/dashboard-black.svg';
import fundraiserIcon from '../Assets/Images/crowdsource-black.svg';
import donorIcon from '../Assets/Images/volunteer-black.svg';
import transactionIcon from '../Assets/Images/paid-black.svg';
import campaignIcon from '../Assets/Images/category-black.svg';
import { useNavigate,useLocation } from 'react-router-dom';
import dashboardIconw from '../Assets/Images/dashboard-white.svg';
import fundraiserIconw from '../Assets/Images/crowdsource-white.svg';
import donorIconw from '../Assets/Images/volunteer-white.svg';
import transactionIconw from '../Assets/Images/paid-white.svg';
import campaignIconw from '../Assets/Images/category-white.svg';
import { PrimaryColor, menuButton } from '../Styles/Style';


export default function Sidebar() {
    const navigate = useNavigate()
    const router = useLocation();

    const dashboardPage = () => {
        navigate('/dashboard')
    }
    const FundraiserClick = () => {
        navigate('/fundraisers');
    }
    const DonorClick = () => {
        navigate('/donors');
    }
    const TransactionsClick = () => {
        navigate('/transactions');
    }
    const CampaignsClick = () => {
        navigate('/campaigns');
    }


    return (
        <>
            <ListItemButton theme={menuButton}
                onClick={() => { dashboardPage() }}
                selected={router.pathname === '/dashboard' ? true : false}
                style={router.pathname === '/dashboard' ? { backgroundColor: `${PrimaryColor}` } : { backgroundColor: '' }}>
                <ListItemIcon>
                    <Box component={'img'} alt='Dashboard' src={router.pathname === '/dashboard' ? dashboardIconw : dashboardIcon} />
                </ListItemIcon>
                <ListItemText sx={router.pathname === '/dashboard' ? { color: '#fff' } : { color: `${PrimaryColor}` }} primary="Dashboard" />
            </ListItemButton>


            <ListItemButton theme={menuButton}
                onClick={() => { FundraiserClick() }}
                selected={router.pathname === '/fundraisers' ? true : false}
                style={router.pathname === '/fundraisers' ? { backgroundColor: `${PrimaryColor}` } : { backgroundColor: '' }}>
                <ListItemIcon>
                    <Box component={'img'} alt='Fund' src={router.pathname === '/fundraisers' ? fundraiserIconw : fundraiserIcon} />
                </ListItemIcon>
                <ListItemText sx={router.pathname === '/fundraisers' ? { color: '#fff' } : { color: `${PrimaryColor}` }} primary="Fundraisers" />
            </ListItemButton>
            <ListItemButton theme={menuButton}
                onClick={() => { DonorClick() }}
                selected={router.pathname === '/donors' ? true : false}
                style={router.pathname === '/donors' ? { backgroundColor: `${PrimaryColor}` } : { backgroundColor: '' }}>
                <ListItemIcon>
                    <Box component={'img'} alt='Donor' src={router.pathname === '/donors' ? donorIconw : donorIcon} />
                </ListItemIcon>
                <ListItemText sx={router.pathname === '/donors' ? { color: '#fff' } : { color: `${PrimaryColor}` }} primary="Donors" />
            </ListItemButton>
            <ListItemButton theme={menuButton}
                onClick={() => { TransactionsClick() }}
                selected={router.pathname === '/transactions' ? true : false}
                style={router.pathname === '/transactions' ? { backgroundColor: `${PrimaryColor}` } : { backgroundColor: '' }}>
                <ListItemIcon>
                    <Box component={'img'} alt='Transaction' src={router.pathname === '/transactions' ? transactionIconw : transactionIcon} />
                </ListItemIcon>
                <ListItemText sx={router.pathname === '/transactions' ? { color: '#fff' } : { color: `${PrimaryColor}` }} primary="Transactions" />
            </ListItemButton>
            <ListItemButton theme={menuButton}
                onClick={() => { CampaignsClick() }}
                selected={router.pathname === '/campaigns' ? true : false}
                style={router.pathname === '/campaigns' ? { backgroundColor: `${PrimaryColor}` } : { backgroundColor: '' }}>
                <ListItemIcon>
                    <Box component={'img'} alt='Campaign' src={router.pathname === '/campaigns' ? campaignIconw : campaignIcon} />
                </ListItemIcon>
                <ListItemText sx={router.pathname === '/campaigns' ? { color: '#fff' } : { color: `${PrimaryColor}` }} primary="Campaigns" />
            </ListItemButton>
            {/* <ListItemButton theme={menuButton}
            >
                <ListItemIcon>
                    <Box component={'img'} src={router.pathname === '/users' ? userIconw : userIcon}/>
                </ListItemIcon>
                <ListItemText sx={router.pathname === '/users' ? { color: '#fff' } : { color: `${PrimaryColor}`}} primary="Users" />
            </ListItemButton> */}
        </>
    );
}