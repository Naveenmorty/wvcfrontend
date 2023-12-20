import React from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Sidebar from './Sidebar';
import OurLogo from '../Assets/Images/worldvisionLogo.svg'


import { PrimaryColor, boxShadow } from '../Styles/Style'
import AccountMenu from './AccountMenu';

const drawerWidth = 225;

const openedMixin = (theme) => ({
    width: drawerWidth,
    // paddingLeft: '20px',
    // paddingRight: '20px',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    '& .MuiList-root': {
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingTop: '20px',
    },
});

const closedMixin = (theme) => ({
    paddingLeft: '5px',
    paddingRight: '5px',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.10)',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        // width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),

        }),
    }),
);

export default function Header() {
    const router = useLocation();
    const headerName = router.pathname.split('/')[1];
    // const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <AppBar position="fixed" open={open} sx={{ backgroundColor: '#FFF', boxShadow: `${boxShadow}` }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                width: '225px',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        // sx={{
                        //     marginRight: 5,
                        //     ...(open && { display: 'none' }),
                        //     '&:hover': {
                        //         backgroundColor: 'transparent',
                        //     },
                        // }}
                        >
                            {/* <MenuIcon /> */}
                            <Box component={'img'} alt='world vision' src={OurLogo} />
                        </IconButton>
                        <Typography sx={{ color: `${PrimaryColor}`, fontSize: 24, fontWeight: 600 }} variant="h6" noWrap component="div">{headerName?.charAt(0).toUpperCase() + headerName?.slice(1)}</Typography>
                    </Box>
                    <Box>
                        <AccountMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    {/* <Box component={'img'} src={OurLogo}/> */}
                    <IconButton onClick={handleDrawerClose}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}>
                        {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
                        <Box component={'img'} alt='world vision' src={OurLogo} />
                    </IconButton>
                </DrawerHeader>
                {/* <Divider /> */}
                <List component="nav" aria-label="main mailbox folders">
                    <Sidebar />
                </List>
            </Drawer>
        </>
    );
}