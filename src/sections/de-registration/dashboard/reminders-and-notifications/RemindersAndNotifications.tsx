import { Box, Card, Typography, styled } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import { remaindersAndNotificationsData } from '.';
import Image from 'next/image';
import Link from 'next/link';

const RemindersAndNotifications = () => {
    const StyledCard = styled(Card)(({ background, border }: { background: string, border: string }) => ({
        background: background,
        border: border,
        padding: "10px",
        minHeight: "98px",
        minWidth: "233px",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        borderRadius: "11px",
        // flexWrap: "wrap",
        justifyContent: "space-between"
    }));
    return (
        <>
            <Typography variant='h5' sx={{ fontSize: "16px", m: "10px", mb: 0 }}>Reminders & Notifications</Typography>

            <Grid container spacing={2} sx={{ padding: "10px" }}>
                {remaindersAndNotificationsData.map((item: any) => (
                    <Grid item xs={12} md={6} lg={6} xl={6} key={item.id}>
                        <StyledCard background={item?.background} border={item?.border}>
                            {/* <Box sx={{ display: "flex", justifyContent: "space-between", }}> */}
                            <Box sx={{ mr: "8px" }}>
                                <Image src={item?.img} alt={''} />
                            </Box>
                            <Box>
                                <Typography style={{ color: `${item?.titleColor}` }}>{item?.title}</Typography>
                                <Typography style={{ color: `${item?.discriptionColor}` }}>{item?.discription}</Typography>
                                <Link href={''} style={{ color: `${item?.linkColor}` }}>{item?.link}</Link>
                            </Box>
                            {/* </Box> */}

                        </StyledCard>

                    </Grid>
                ))}
            </Grid >
        </>

    )
}

export default RemindersAndNotifications

