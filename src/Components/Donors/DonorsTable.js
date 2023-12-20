import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import { boxShadow } from '../Styles/Style';
import DetailsTable from './DetailsTable';
import CustomPagination from '../CustomPagination';

const columns = [
    { field: 'firstName', headerName: 'First Name', sortable: true, flex: 1, minWidth: 110, headerClassName: 'sortable-column'},
    { field: 'lastName', headerName: 'Last Name', sortable: false, flex: 1, minWidth: 110, },
    {
        field: 'email', headerName: 'Email', sortable: false, flex: 1, minWidth: 110,
    },
    {
        field: 'phone', headerName: 'Phone Number', sortable: false, flex: 1, minWidth: 110,
    },
    {
        field: 'noOfCampaigns', headerName: 'No. of Campaigns', sortable: false, flex: 1, minWidth: 110,
        headerAlign: 'center',
        align: 'center',
    },
];

const rows = [
    { id: 1, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 2, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 3, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 4, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 5, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 6, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 7, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 8, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 9, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 10, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
    { id: 11, firstName: 'John', lastName: 'Snow', email: 'Darlene@gmail.com', phone: '(808) 555-0111', noOfCampaigns: '06', },
];

export default function DonorsTable() {

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
    const [selectedId, setSelectedId] = useState(null);
    // const navigate = useNavigate();
    const handleDetailsTableClick = (params) => {
        const id = params.row.id;
        setSelectedId(id);
        // navigate(`/donor/details`);
        setDetailsTable(true);
    };
    if (showDetailsTable) {
        return (
            <DetailsTable selectedId={selectedId}/>
        );
    }

    return (
        <>
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
                        onRowClick={handleDetailsTableClick}
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
