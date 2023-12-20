import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'FirstName', headerName: 'First Name', sortable: false, flex: 1, },
    { field: 'LastName', headerName: 'Last Name', sortable: false, flex: 1, },
    { field: 'TransactionID', headerName: 'Transaction ID', sortable: false, flex: 1, },
    { field: 'Campaign', headerName: 'Campaign', sortable: false, flex: 1, },
    { field: 'Activity', headerName: 'Activity', sortable: false, flex: 1, },
    { field: 'Amount', headerName: 'Amount', sortable: false, flex: 1, },
];

const rows = [
    { id: 1, FirstName: 'John Doe', LastName: 'John Doe', TransactionID: '763953', Campaign: 'Campaign 1', Activity: 'Activity 1',Amount:'$ 85'},
    { id: 2, FirstName: 'John Doe', LastName: 'John Doe', TransactionID: '763953', Campaign: 'Campaign 1', Activity: 'Activity 1',Amount:'$ 85'},
    { id: 3, FirstName: 'John Doe', LastName: 'John Doe', TransactionID: '763953', Campaign: 'Campaign 1', Activity: 'Activity 1',Amount:'$ 85'},
    { id: 4, FirstName: 'John Doe', LastName: 'John Doe', TransactionID: '763953', Campaign: 'Campaign 1', Activity: 'Activity 1',Amount:'$ 85'},
    { id: 5, FirstName: 'John Doe', LastName: 'John Doe', TransactionID: '763953', Campaign: 'Campaign 1', Activity: 'Activity 1',Amount:'$ 85'},
];

export default function DonorTable() {
    return (
        <div style={{ width: '100%' }}>
            <DataGrid className='dataTable-css withoutPagination'
                sx={{ border: 0 }}
                rows={rows}
                columns={columns}
                disableColumnMenu
                disableSelectionOnClick
            />
        </div>
    );
}
