import React from 'react'
import { Box, Container, Grid, Typography, useTheme } from '@mui/material'

import Link from 'next/link'
import Image from 'next/image'

import { ExpandableCardsData, policyGuidelineCardsData } from '.'
import ExpandableCard from './ExpandableCards/ExpandableCard'

const Dashboard = () => {
    const theme = useTheme();
    return (
        <Container maxWidth="xl" sx={{ pt: "20px" }}>
            <Grid container spacing="60px">
                {policyGuidelineCardsData.map((card, index) => (
                    <Grid item xl={3} lg={4} md={6} xs={12} key={index}>
                        <Link href={card.link} style={{ all: "unset" }}>
                            <Box sx={styles.policyCardsWrapper(theme)}>
                                <Box sx={{ flexBasis: "75%" }}>
                                    <Typography sx={styles.cardsText}>{card.title}
                                    </Typography>
                                </Box>
                                <Box sx={{ flexBasis: "content" }}>{card.icon}</Box>
                            </Box>
                        </Link>
                    </Grid>))}
            </Grid>
            <Grid container spacing={3} py="60px">
                {ExpandableCardsData.map((data: any, index: number) => (
                    <Grid item lg={4} md={6} xs={12} key={index}>
                        <ExpandableCard
                            img={data.img}
                            title={data.title}
                            color={data.color}
                            subData={data.subData}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Dashboard

const styles = {
    policyCardsWrapper: (theme: any) => ({
        background: theme.palette.primary.main, borderRadius: "10px", boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)", display: "flex", justifyContent: "space-between", padding: "15px", minHeight: "130px", height: "100%", cursor: "pointer"
    }),
    cardsText: {
        color: "white", fontSize: "18px", fontWeight: "600", paddingTop: "25px"
    }
}



