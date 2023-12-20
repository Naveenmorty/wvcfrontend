import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box, Stack, Typography, Card } from '@mui/material'
import { PrimaryColor } from '../Styles/Style';
import { boxShadow } from '../Styles/Style';
import CampaignDonorList from './CampaignDonorList';
import CustomPagination from '../CustomPagination';

const columns = [
    { field: 'campaign', headerName: 'Campaigns', sortable: true, flex: 1, minWidth: 110,headerClassName: 'sortable-column' },
    { field: 'joiningDate', headerName: 'Date of Joining', sortable: false, flex: 1,minWidth: 110 },
    {
        field: 'donorCount', headerName: 'No. of Donors', sortable: false, flex: 1,minWidth: 110,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'fundRaised', headerName: 'Fund Raised', sortable: false, flex: 1,minWidth: 110,
        headerAlign: 'right',
        align: 'right',
    },

];

const rows = [
    { id: 1, campaign: 'Campaign 1 ', joiningDate: '2021-10-28', donorCount: '10', fundRaised: '$ 124' },
    { id: 2, campaign: 'Campaign  2', joiningDate: '2021-10-28', donorCount: '10', fundRaised: '$ 250' },
    { id: 3, campaign: 'Campaign  3', joiningDate: '2021-10-28', donorCount: '06', fundRaised: '$ 300' },
    { id: 4, campaign: 'Campaign  4', joiningDate: '2021-10-28', donorCount: '10', fundRaised: '$ 124' },
    { id: 5, campaign: 'Campaign  5', joiningDate: '2021-10-28', donorCount: '10', fundRaised: '$ 224' },

];


export default function CampaignListTable() {
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
            <CampaignDonorList />
        );
    }
    return (
        <>
            <Box sx={{ mt: 2.5 }}>
                <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px', p: 2 }}>
                    <Typography mb={1.5} component={'p'} sx={{ fontSize: 16, fontWeight: 600, color: PrimaryColor }}>List of Campaigns</Typography>
                    <DataGrid className='dataTable-css'
                        sx={{ border: 0, fontSize: 14 }}
                        rows={rows.slice(pagination.page * pagination.pageSize, (pagination.page + 1) * pagination.pageSize)}
                        columns={columns}
                        disableColumnMenu
                        pageSize={pagination.pageSize}
                        rowsPerPageOptions={[]}
                        pagination
                        onRowClick={handleDetailsTableClick}
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
