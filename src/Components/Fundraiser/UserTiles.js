import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Avatar, Grid, ListItemText, Stack } from '@mui/material';
import card1 from '../Assets/Images/noun-campaign.svg';
import card2 from '../Assets/Images/noun-finance-raise.svg'
import card4 from '../Assets/Images/noun-donation.svg'
import { PrimaryColor, SecondaryColor, boxShadow } from '../Styles/Style'

const cardData = [
    {
        title: 'Campaigns Enrolled',
        secondary: '04',
        bgColor: '#E7EDF6',
        image: card1,
    },
    {
        title: 'Total Fund Raised',
        secondary: '$ 207',
        bgColor: '#E9F7E6',
        image: card2,
    },
    {
        title: 'Donors Referred',
        secondary: '56',
        bgColor: '#FFF0E6',
        image: card4,
    },
];
export default function UserTiles() {
    return (
        <Grid container spacing={2.5}>
            {cardData.map((card, index) => (
                <Grid key={index} item xs={6} md={4}>
                    <Card sx={{ boxShadow: `${boxShadow}`, borderRadius: '4px' }}>
                        <CardContent sx={{'&:last-child':{paddingBottom:'16px'}}}>
                            <Stack direction={'row'} alignItems={'center'}>
                                <ListItemText
                                    primary={card.title}
                                    secondary={card.secondary}
                                    primaryTypographyProps={{
                                        fontSize: '16px',
                                        fontWeight: '400',
                                        color: `${SecondaryColor}`,
                                        lineHeight: 2,
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