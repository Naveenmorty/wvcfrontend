import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box, Card } from '@mui/material'
import previewIcon from '../Assets/Images/preview.svg';
import { Active, InActive, Status } from '../Styles/Status';
import { PrimaryColor, boxShadow, statusModal } from '../Styles/Style';
import CustomPagination from '../CustomPagination';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowDown from '../Assets/Images/Arrow_Down.svg';
import CheckIcon from '../Assets/Images/CheckIcon.svg';


function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box>
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
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    Published
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Unpublished
                    <Box component={'img'} src={CheckIcon} />
                </MenuItem>
            </Menu>
        </React.Fragment >
    );
}

export default function CampaignsTable() {
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

    const columns = [
        { field: 'Campaigns', headerName: 'Campaigns', sortable: true, flex: 1, minWidth: 110, },
        { field: 'StartDate', headerName: 'Start Date', sortable: false, flex: 1, minWidth: 110, },
        { field: 'EndDate', headerName: 'End Date', sortable: false, flex: 1, minWidth: 110, },
        { field: 'NoofActivity', headerName: 'No of Activity', sortable: false, flex: 1, minWidth: 110, },
        {
            field: 'TotalFundRaised', headerName: 'Total Fund Raised', sortable: false, flex: 1, minWidth: 110,
        },
        {
            field: 'NoOfFundraisers', headerName: 'No Of Fundraisers ', sortable: false, flex: 1, minWidth: 110,
        },
        {
            field: 'GoalAmount', headerName: 'Goal Amount', sortable: false, flex: 1,
            minWidth: 110,
            // headerAlign: 'right',
            // align: 'right',
        },
        {
            field: 'status', headerName: 'Status', sortable: false, flex: 1.3, minWidth: 110,
            renderCell: ({ row }) => (
                <>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                        <Box>
                            {/* {row.id % 2 == 1 ? <Status /> : <InActive />} */}
                            <Status />
                            {/* {row.status} */}
                        </Box>
                        <Box>
                            <AccountMenu />
                        </Box>
                    </Box>
                </>

            ),
        },
    ];

    const rows = [
        {
            id: 1,
            Campaigns: 'Campaign 1',
            StartDate: '09/01/2022',
            EndDate: '09/01/2022',
            NoofActivity: 5,
            TotalFundRaised: '$9.00k',
            NoOfFundraisers: 300,
            GoalAmount: '$20k',
            status: 'Publish'
        },
        {
            id: 2,
            Campaigns: 'Campaign 3',
            StartDate: '09/01/2022',
            EndDate: '09/01/2022',
            NoofActivity: 15,
            TotalFundRaised: '$19.00k',
            NoOfFundraisers: 300,
            GoalAmount: '$20k',
            status: 'Publish'
        },
        {
            id: 3,
            Campaigns: 'Campaign 2',
            StartDate: '09/01/2022',
            EndDate: '09/01/2022',
            NoofActivity: 10,
            TotalFundRaised: '$29.00k',
            NoOfFundraisers: 300,
            GoalAmount: '$30k',
            status: 'Publish'
        },
        {
            id: 4,
            Campaigns: 'Campaign 4',
            StartDate: '09/01/2022',
            EndDate: '09/01/2022',
            NoofActivity: 8,
            TotalFundRaised: '$7.00k',
            NoOfFundraisers: 300,
            GoalAmount: '$50k',
            status: 'Publish'
        },

    ];



    return (
        <>
            <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px', p: 2 }}>
                <DataGrid className='dataTable-css'
                    sx={{ border: 0 }}
                    rows={rows.slice(pagination.page * pagination.pageSize, (pagination.page + 1) * pagination.pageSize)}
                    columns={columns}
                    disableColumnMenu
                    pageSize={pagination.pageSize}
                    rowsPerPageOptions={[]}
                    pagination
                    hideScrollbar={true}
                    // rowSelection={false}
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
            </Card>
        </>
    );
}
