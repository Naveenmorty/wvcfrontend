import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Grid, ListItemText, Stack } from '@mui/material';
import card1 from '../Assets/Images/noun-campaign.svg';
import card2 from '../Assets/Images/noun-finance-raise.svg'
import card3 from '../Assets/Images/noun-finance-raise1.svg'
import card4 from '../Assets/Images/noun-donation.svg'
import { PrimaryColor, SecondaryColor, boxShadow } from '../Styles/Style'

const cardData = [
    {
        title: 'Total Campaigns',
        secondary: '02',
        bgColor: '#E7EDF6',
        image: card1,
    },
    {
        title: 'Total Fund Raised',
        secondary: '$ 80k',
        bgColor: '#E9F7E6',
        image: card2,
    },
    {
        title: 'Fund Raised this Month',
        secondary: '$ 12.8k',
        bgColor: '#FFF0E6',
        image: card3,
    },
    {
        title: 'Total Donors',
        secondary: '180',
        bgColor: '#FFF0E6',
        image: card4,
    },
];
export default function Topcard() {
    return (
        <Grid container spacing={2.5}>
            {cardData.map((card, index) => (
                <Grid key={index} item xs={6} md={6} lg={3}>
                    <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px',height:'100%'}}>
                        <CardContent sx={{'&:last-child':{paddingBottom:'16px'}}}>
                            <Stack direction={'row'} alignItems={'center'}>
                                <ListItemText
                                    primary={card.title}
                                    secondary={card.secondary}
                                    primaryTypographyProps={{
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        color: `${SecondaryColor}`,
                                        lineHeight: '20px',
                                    }}
                                    secondaryTypographyProps={{
                                        color: `${PrimaryColor}`,
                                        fontSize: '30px',
                                        fontWeight: '600',
                                    }}
                                />
                                <Avatar sx={{ bgcolor: card.bgColor, width: '72px', height: '72px' }}>
                                    <Box component={'img'} src={card.image} alt={`card ${index + 1}`} />
                                </Avatar>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}