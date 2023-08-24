import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useSupportCarersCard } from './useSupportCarersCard';

export default function SupportCarersCard (props: any) {
    const { title, bgColor, link } = props
    const {navigate} = useSupportCarersCard();
    return (
        <Card sx={{ display: "flex", flexDirection: "column", justifyContent: 'space-between', maxWidth: 350, flexGrow: 1 , backgroundColor:bgColor, color:"#fff"}}>
            <CardContent sx={{ width: "90%" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Button
                    sx={{ display: "flex", alignContent: 'center', gap: 0.5, color: "#fff"}}
                    size="small"
                    onClick={()=>{ navigate.push("support-carers"+link)}}
                >
                    More
                    <ExpandCircleDownIcon fontSize="small" />
                </Button>
            </CardActions>
        </Card>
    )
}
