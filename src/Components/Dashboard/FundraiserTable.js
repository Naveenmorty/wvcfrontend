import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'Name', headerName: 'Name', sortable: false, flex: 1, },
    { field: 'Campaign', headerName: 'Campaign', sortable: false, flex: 1, },
];

const rows = [
    { id: 1, Name: 'John Doe', Campaign: 'Campaign 1' },
    { id: 2, Name: 'Jane Doe', Campaign: 'Campaign 2' },
    { id: 3, Name: 'Jane Doe', Campaign: 'Campaign 3' },
    { id: 4, Name: 'Jane Doe', Campaign: 'Campaign 4' },
    { id: 5, Name: 'Jane Doe', Campaign: 'Campaign 5' },
  ];

export default function FundraiserTable() {
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
