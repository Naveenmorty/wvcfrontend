import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import { PrimaryColor, boxShadow } from '../Styles/Style';
import DonorTable from '../Donors/DonorsTable';
import leftArrow from '../Assets/Images/Arrow_Left.svg';
import CustomPagination from '../CustomPagination';

const columns = [
    { field: 'Campaigns', headerName: 'Campaigns', sortable: true, flex: 1, minWidth: 110, headerClassName: 'sortable-column'},
    { field: 'Activity', headerName: 'Activity', sortable: false, flex: 1, minWidth: 110, },
    {
        field: 'DonatedDate', headerName: 'Donated Date', sortable: false, flex: 1, minWidth: 110,
    },
    {
        field: 'ReferredBy', headerName: 'Referred By', sortable: false, flex: 1, minWidth: 110,
    },
    {
        field: 'TotalAmount', headerName: 'Total Amount', sortable: false, flex: 1, minWidth: 110,
        headerAlign: 'right',
        align: 'right',
    },
];

const rows = [
    { id: 1, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 2, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 3, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 4, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 5, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 6, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 7, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 8, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 9, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 10, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
    { id: 11, Campaigns: 'Campaign 1', Activity: 'Activity 1', DonatedDate: '2023-10-28', ReferredBy: '(808) 555-0111', TotalAmount: '$84.00', },
];


export default function DetailsTable({ selectedId }) {
    // const [details, setDetails] = useState(null);
    // useEffect(() => {
    // }, [selectedId]);
    // if (!details) {
    //     return <div>Loading...</div>;
    // }

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

    const [showDonorTable, setDonorTable] = useState(false);
    const handleDonorTableClick = () => {
        setDonorTable(true);
    };
    if (showDonorTable) {
        return (
            <DonorTable />
        );
    }

    return (
        <>
            <Stack direction={'row'} spacing={1} mb={1} onClick={handleDonorTableClick} sx={{ cursor: 'pointer', display: 'inline-flex' }}>
                <Box component={'img'} src={leftArrow} />
                <Typography sx={{ color: `${PrimaryColor}`, fontSize: 18, fontWeight: 600 }}>{selectedId} Floyd Miles</Typography>
            </Stack>

            <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px', p: 2 }}>
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
                        // onRowClick={handleRowClick}
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
            </Card>
        </>
    );
}
