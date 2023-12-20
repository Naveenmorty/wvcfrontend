import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {SecondaryColor} from '../Styles/Style'
import { Divider } from '@mui/material';

export default function Copyright() {
    return (
        <Box>
            <Divider/>
            <Typography textAlign={'center'} py={1.5} mb={0} sx={{color:`${SecondaryColor}`}} variant="caption" display="block" gutterBottom>© 2023 World Vision Canada. All rights reserved.</Typography>
        </Box>
    );
}