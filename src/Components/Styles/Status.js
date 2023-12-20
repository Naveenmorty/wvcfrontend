import React from 'react'
import { Box, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';


export function Status() {
    const styleBox={
        px: 1, 
        py: 0.5, 
        bgcolor: '#F6FCF4', 
        borderRadius: '20px', 
        width: 'fit-content', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    }

    const styleIconActive={
        color:'#1EB100',
        fontSize:13,
        mr:1
    }
    const textStyle={
        color: '#65676B', 
        fontSize: 14
    }

    return (
        <>
            <Box sx={styleBox} >
                <CircleIcon sx={styleIconActive}/>
                <Typography variant='span' sx={textStyle}>Active</Typography>
            </Box>
        </>
    )
}


// export function Active() {
//     return (
//         <>
//             <Box sx={{ px: 1, py: 0.5, bgcolor: '#F6FCF4', borderRadius: '20px', width: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
//                 <Typography variant='span' sx={{ width: 12, height: 12, display: 'inline-block', borderRadius: '50%', bgcolor: '#1EB100', marginRight: '8px' }}></Typography>
//                 <Typography variant='span' sx={{ color: '#65676B', fontSize: 14 }}>Active</Typography>
//             </Box>
//         </>
//     )
// }
// export function InActive() {
//     return (
//         <>
//             <Box sx={{ px: 1, py: 0.5, bgcolor: '#FDE6E8', borderRadius: '20px', width: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
//                 <Typography variant='span' sx={{ width: 12, height: 12, display: 'inline-block', borderRadius: '50%', bgcolor: '#D30519', marginRight: '8px' }}></Typography>
//                 <Typography variant='span' sx={{ color: '#65676B', fontSize: 14 }}>Inactive</Typography>
//             </Box>
//         </>
//     )
// }

// function Status() {
//     return (
//         <div>
//             <Active />
//             <InActive />
//         </div>
//     )
// }

