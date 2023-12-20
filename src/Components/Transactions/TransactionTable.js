import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import CustomPagination from '../CustomPagination';
import { statusModal } from '../Styles/Style';
import ArrowDown from '../Assets/Images/Arrow_Down.svg'
import { Box, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Searchicon from '../Assets/Images/SearchIcon.svg';
import CheckIcon from '../Assets/Images/CheckIcon.svg'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        //   marginLeft: theme.spacing(3),
        //   width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    right: 0,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1),
        // vertical padding + font size from searchIcon
        paddingRight: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        border: '1px solid #B6B7BA',
        borderRadius: 4,
        fontSize: 14,
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
}));

const data = [
    'Jane Cooper',
    'Leslie Alexander',
    'James Willam',
    'Brooklyn',
    'Cameron',
    'Jane Cooper',
    'Leslie Alexander',
    'James Willam',
    'Brooklyn',
];
const highlightMatch = (text, query) => {
    const lowerText = text.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerText.indexOf(lowerQuery);

    if (index !== -1) {
        return (
            <>
                {text.substring(0, index)}
                <strong>{text.substring(index, index + query.length)}</strong>
                {text.substring(index + query.length)}
            </>
        );
    }
    return text;
};
function AccountMenu() {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredItems = data.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const boxHeight = filteredItems.length <= 3 ? 'auto' : '180px';
    const boxHeightParent = filteredItems.length <= 3 ? 'auto' : '250px';
    return (
        <React.Fragment>
            <Box sx={{ ml: 2 }}>
                <Box sx={{ width: 27, height: 30, display: 'flex', alignItems: 'center' }} onClick={handleClick}>
                    <Box component={'img'} src={ArrowDown} alt='down arrow' sx={{ cursor: 'pointer' }} />
                </Box>
            </Box>
            <Menu
                theme={statusModal}
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        // width: '230px',
                        height: boxHeightParent,
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Search sx={{ mb: 1 }}>
                    <SearchIconWrapper>
                        <img src={Searchicon} alt='search' />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleSearchChange}
                    />

                </Search>
                <Box sx={{ overflowY: 'scroll', overflowX: 'hidden', height: boxHeight }} className="customScrollContainer">
                    {filteredItems.length === 0 ? (
                        <Typography variant="body2">
                            No results found for "{searchQuery}".
                        </Typography>
                    ) : (
                        filteredItems.map((item, index) => (
                            <MenuItem key={index}>
                                <Typography noWrap>
                                    {highlightMatch(item, searchQuery)}
                                </Typography>
                                <Box component={'img'} src={CheckIcon} />
                            </MenuItem>
                        ))
                    )}
                </Box>
            </Menu>
        </React.Fragment >
    );
}

const columns = [
    { field: 'TransID', headerName: 'Trans. ID', sortable: true, flex: 0.5, minWidth: 110, headerClassName: 'sortable-column' },
    { field: 'TransDate', headerName: 'Trans. Date', sortable: false, flex: 1, minWidth: 110, },
    {
        field: 'DonorFirstName', headerName: 'Donor’s First Name', sortable: false, flex: 1, minWidth: 110,
    },
    {
        field: 'DonorLastName', headerName: 'Donor’s Last Name', sortable: false, flex: 1, minWidth: 110,
    },
    {
        field: 'Campaigns', headerName: 'Campaigns', sortable: false, flex: 1, minWidth: 110,
    },
    {
        field: 'Activity', headerName: 'Activity', sortable: false, flex: 1, minWidth: 110,
    },
    {
        field: 'ReferredBy', headerName: 'Referred By', sortable: true, flex: 1.5, minWidth: 110, headerClassName: 'sortable-column',
        renderCell: ({ row }) => (
            <>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                    <Box>
                        {row.ReferredBy}
                    </Box>
                    <Box>
                        <AccountMenu />
                    </Box>
                </Box>
            </>

        ),
    },
    {
        field: 'TotalAmount', headerName: 'Total Amount', sortable: false, flex: 1,
        minWidth: 90,
        headerAlign: 'center',
        align: 'right',
    },
];


const rows = [
    {
        id: 1,
        TransID: '726738',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Darlene Robertson',
        TotalAmount: '$74.00',
    },
    {
        id: 2,
        TransID: '472726',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Darlene Robertson',
        TotalAmount: '$74.00',
    },
    {
        id: 3,
        TransID: '763953',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Jane Cooper',
        TotalAmount: '$74.00',
    },
    {
        id: 4,
        TransID: '976383',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Jane Cooper',
        TotalAmount: '$74.00',
    },
    {
        id: 5,
        TransID: '267473',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Jane Cooper',
        TotalAmount: '$74.00',
    },
    {
        id: 6,
        TransID: '267473',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Jane Cooper',
        TotalAmount: '$74.00',
    },
    {
        id: 7,
        TransID: '267473',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Jane Cooper',
        TotalAmount: '$74.00',
    },
    {
        id: 8,
        TransID: '267473',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Jane Cooper',
        TotalAmount: '$74.00',
    },
    {
        id: 9,
        TransID: '267473',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Jane Cooper',
        TotalAmount: '$74.00',
    },
    {
        id: 10,
        TransID: '267473',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Jane Cooper',
        TotalAmount: '$74.00',
    },
    {
        id: 11,
        TransID: '267500',
        TransDate: '09/01/2023',
        DonorFirstName: 'Leslie',
        DonorLastName: 'Alexander',
        Campaigns: 'Campaign 2',
        Activity: 'Activity 2',
        ReferredBy: 'Jane Cooper',
        TotalAmount: '$74.00',
    },
];

export default function TransactionTable() {
    const [pagination, setPagination] = React.useState({
        page: 0,
        pageSize: 10,
    });


    const handlePageChange = (newPage) => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            page: newPage,
        }));
    };

    return (
        <>
            <div style={{ width: '100%' }}>
                <DataGrid className='dataTable-css'
                    sx={{ border: 0 }}
                    rows={rows.slice(pagination.page * pagination.pageSize, (pagination.page + 1) * pagination.pageSize)}
                    columns={columns}
                    disableColumnMenu
                    pageSize={pagination.pageSize}
                    rowsPerPageOptions={[]}
                    pagination
                    disableSelectionOnClick
                    // onRowClick={handleDetailsTableClick}
                    components={{
                        Pagination: () => (
                            <CustomPagination
                                pagination={pagination}
                                onPageChange={handlePageChange}
                                totalRows={rows.length}
                            />
                        ),
                    }}

                />
            </div>
        </>
    );
}
