import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { PrimaryColor, } from '../Styles/Style'

function Title(props) {
    return (
        <Typography component="h6" variant="h6"
        sx={{ fontSize:16,fontWeight:500,color:`${PrimaryColor}`}}
        >
            {props.children}
        </Typography>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};

export default Title;