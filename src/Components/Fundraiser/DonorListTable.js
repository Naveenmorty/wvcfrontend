import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Stack, Typography, Card } from '@mui/material'
import { PrimaryColor } from '../Styles/Style';
import { boxShadow } from '../Styles/Style';
import CustomPagination from '../CustomPagination';

const columns = [
    { field: 'firstName', headerName: 'Donor First Name', sortable: true, flex: 1, minWidth: 110, },
    { field: 'lastName', headerName: 'Donor Last Name ', sortable: false, flex: 1 },
    {
        field: 'donatedDate', headerName: 'Donated Date', sortable: false, flex: 1
    },
    {
        field: 'activity', headerName: 'Activity', sortable: false, flex: 1
    },
    {
        field: 'amount', headerName: 'Donated Amount', sortable: false, flex: 1
    },

];

const rows = [
    { id: 1, firstName: 'Guy  ', lastName: 'Hawkins', donatedDate: '2023-10-28', activity: 'Activity 1', amount: '$10.00' },
    { id: 2, firstName: 'Guy  ', lastName: 'Hawkins', donatedDate: '2023-10-28', activity: 'Activity 1', amount: '$10.00' },
    { id: 3, firstName: 'Guy  ', lastName: 'Hawkins', donatedDate: '2023-10-28', activity: 'Activity 1', amount: '$10.00' },
    { id: 4, firstName: 'Guy  ', lastName: 'Hawkins', donatedDate: '2023-10-28', activity: 'Activity 1', amount: '$10.00' },
    { id: 5, firstName: 'Guy  ', lastName: 'Hawkins', donatedDate: '2023-10-28', activity: 'Activity 1', amount: '$10.00' },

];


export default function DonorListTable() {
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
            <Box>
                <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px', p: 2 }}>
                    <Typography mb={1.5} component={'p'} sx={{ fontSize: 16, fontWeight: 600, color: PrimaryColor }}>List of Donors</Typography>
                    <DataGrid className='dataTable-css'
                        sx={{ border: 0, fontSize: 14 }}
                        rows={rows.slice(pagination.page * pagination.pageSize, (pagination.page + 1) * pagination.pageSize)}
                        columns={columns}
                        disableColumnMenu
                        pageSize={pagination.pageSize}
                        rowsPerPageOptions={[]}
                        pagination
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
            </Box>
        </>
    );
}
