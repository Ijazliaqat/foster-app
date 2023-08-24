import React from "react";
import { Avatar, Box, Card, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { MarketingData } from ".";
import MarketingCalendar from "./calendar/MarketingCalendar";
import UpCommingMarketingEvents from "./upcomming-marketing-events/UpcommingMarketingEvents";
import MarketingTasks from "./marketing-tasks/MarketingTasks";
import dynamic from "next/dynamic";

const MarketingTrandsNoSSR = dynamic(
  () => import("./marketing-trands/MarketingTrands"),
  { ssr: false }
);

const Marketing = () => {
  return (
    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 4, md: 6 }}
        minHeight={"100px"}
        alignItems={"center"}
      >
        {MarketingData.map((item: any, i: any) => {
          return (
            <Grid key={i} item xs={12} lg={4}>
              <Box sx={(theme) => styles.marketingCard(theme, item.bgColor)}>
                <Link href={`${item.link}`} style={{ textDecoration: "none" }}>
                  <Box sx={(theme) => styles.marketingCardContent(theme)}>
                    <Typography sx={(theme) => styles.cardText(theme)}>
                      {item.title}
                    </Typography>
                    <Box sx={{ padding: "5px 14px" }}>
                      <Image
                        src={item.image}
                        width={90}
                        height={90}
                        alt="image"
                      />
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={3} sx={{ padding: "20px 0" }}>
        <Grid item xs={12} lg={8}>
          <Typography sx={(theme) => styles.title(theme)}>
            Marketing Trends
          </Typography>
          <Card
            sx={{
              boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
              borderRadius: "10px",
              height:"24rem",
            }}
          >
           <Box sx={{paddingRight:"50px"}}><MarketingTrandsNoSSR /></Box> 
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography sx={(theme) => styles.title(theme)}>
            Marketing Calendar
          </Typography>
          <MarketingCalendar />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Typography sx={(theme) => styles.title(theme)}>
            Marketing Tasks
          </Typography>
          <MarketingTasks />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography sx={(theme) => styles.title(theme)}>
            Upcoming Marketing Events
          </Typography>
          <UpCommingMarketingEvents />
        </Grid>
      </Grid>
    </>
  );
};

export default Marketing;
//style
const styles = {
  marketingCard: (theme: any, background: any) => ({
    background: background,
    borderRadius: "10px",
  }),
  marketingCardContent: (theme: any) => ({
    display: "flex",
    justifyContent: "space-between",
  }),
  cardText: (theme: any) => ({
    [theme.breakpoints.up("xs")]: {
      display: "flex",
      fontSize: "18px",
      fontWeight: "600",
      padding: "0px 20px",
      alignItems: "center",
      color:
        theme.palette.mode === "light"
          ? theme.palette.common.white
          : theme.palette.grey[800],
    },
  }),
  title: (theme: any) => ({
    color: theme.palette.primary.main,
    variant: "body2",
    fontSize: "18px",
    fontWeight: 700,
    padding: "2px 0",
  }),
};
