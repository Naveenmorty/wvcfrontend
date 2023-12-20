import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Avatar, Box, Card, IconButton } from '@mui/material'
import previewIcon from '../Assets/Images/preview.svg';
import { Active, InActive, Status } from '../Styles/Status';
import { PrimaryColor, boxShadow, statusModal } from '../Styles/Style';
import FundraiserUser from './FundraiserUser';
import CustomPagination from '../CustomPagination';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowDown from '../Assets/Images/Arrow_Down.svg';
import CheckIcon from '../Assets/Images/CheckIcon.svg';


export default function FundraiserTable() {
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

    const [showDetailsTable, setDetailsTable] = useState(false);
    const handleDetailsTableClick = () => {
        setDetailsTable(true);
    };
    if (showDetailsTable) {
        return (
            <FundraiserUser />
        );
    }


    const AccountMenu = () => {
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
                        Active
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        Inactive
                        <Box component={'img'} src={CheckIcon} />
                    </MenuItem>
                </Menu>
            </React.Fragment >
        );
    }

    const columns = [
        { field: 'firstName', headerName: 'First Name', sortable: true, flex: 1, minWidth: 110, headerClassName: 'sortable-column' },
        { field: 'lastName', headerName: 'Last Name', sortable: false, flex: 1, minWidth: 110, },
        {
            field: 'email', headerName: 'Email', sortable: false, flex: 1, minWidth: 110,
        },
        {
            field: 'phone', headerName: 'Phone Number', sortable: false, flex: 1, minWidth: 110,
        },
        {
            field: 'noOfCampaigns', headerName: 'No. of Campaigns', sortable: false, flex: 1,
            minWidth: 110,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'status', headerName: 'Status', sortable: false, flex: 1.2, minWidth: 110,
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
        {
            field: 'action', headerName: 'Action', sortable: false, flex: 1, minWidth: 110,
            headerAlign: 'center', align: 'center',
            renderCell: (params) => {
                // console.log(params.id);
                return <>
                    <Box onClick={handleDetailsTableClick} sx={{ cursor: 'pointer' }} component={'img'} src={previewIcon} alt='previewIcon' />
                </>
            }
        },
    ];

    const rows = [
        { id: 1, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: 9999999999, noOfCampaigns: '06', status: 'Inactive', action: 'Action' },
        { id: 2, firstName: 'Mike', lastName: 'Joe', email: 'Annette@gmail.com', phone: 9999999999, noOfCampaigns: '08', status: 'Active', action: 'Action' },
        { id: 3, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: 9999999999, noOfCampaigns: '06', status: 'Inactive', action: 'Action' },
        { id: 4, firstName: 'Mike', lastName: 'Joe', email: 'Annette@gmail.com', phone: 9999999999, noOfCampaigns: '08', status: 'Active', action: 'Action' },
        { id: 5, firstName: 'Mike', lastName: 'Joe', email: 'Annette@gmail.com', phone: 9999999999, noOfCampaigns: '08', status: 'Active', action: 'Action' },
        { id: 6, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: 9999999999, noOfCampaigns: '06', status: 'Inactive', action: 'Action' },
        { id: 7, firstName: 'Mike', lastName: 'Joe', email: 'Annette@gmail.com', phone: 9999999999, noOfCampaigns: '08', status: 'Active', action: 'Action' },
        { id: 8, firstName: 'Mike', lastName: 'Joe', email: 'Annette@gmail.com', phone: 9999999999, noOfCampaigns: '08', status: 'Active', action: 'Action' },
        { id: 9, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: 9999999999, noOfCampaigns: '06', status: 'Inactive', action: 'Action' },
        { id: 10, firstName: 'Mike', lastName: 'Joe', email: 'Annette@gmail.com', phone: 9999999999, noOfCampaigns: '08', status: 'Active', action: 'Action' },
        { id: 11, firstName: 'Mike', lastName: 'Joe', email: 'Annette@gmail.com', phone: 9999999999, noOfCampaigns: '08', status: 'Active', action: 'Action' },
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
                    // onRowClick={handleDetailsTableClick}
                    // disableRowSelectionOnClick={true}
                    hideScrollbar={true}
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
