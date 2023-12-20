// CustomPagination.js
import React from 'react';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import arrowLeft from './Assets/Images/Arrow_Left.svg';
import arrowRight from './Assets/Images/Arrow_Right.svg';
import { PrimaryColor } from './Styles/Style';

const CustomPagination = ({ pagination, onPageChange, totalRows }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <Box sx={{ color: `${PrimaryColor}`, fontWeight: 600, fontSize: 14 }}>
        Page {pagination.page + 1} of {Math.ceil(totalRows / pagination.pageSize)}
      </Box>
      <Pagination
        count={Math.ceil(totalRows / pagination.pageSize)}
        boundaryCount={1}
        siblingCount={0}
        page={pagination.page + 1}
        onChange={(event, page) => onPageChange(page - 1)}
        renderItem={(item) => (
          <PaginationItem
            component="div"
            {...item}
            slots={{
              previous: () => (
                <>
                  <img alt="left" src={arrowLeft} />
                  <span>&nbsp;&nbsp; Previous</span>
                </>
              ),
              next: () => (
                <>
                  <span>Next &nbsp;&nbsp;</span>
                  <img src={arrowRight} alt="right" />
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
};

export default CustomPagination;
