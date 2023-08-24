import { Box, Card, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import Cover from "@root/assets/img/ifaAvatar.png";
import { HEADERDATARRAY } from "./";

export default function CarerDetailsHeader() {
  const theme = useTheme();

  return (
    <Card sx={{ backgroundColor: theme.palette.primary.main, padding: 2 }}>
      <Grid container>
        <Grid
          xs={12}
          md={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Image src={Cover} alt={"Cover"} width={120} height={120} />
        </Grid>
        <Grid item xs={12} md={8} color={theme.palette.primary.contrastText}>
          <Grid container columnSpacing={2}>
            {HEADERDATARRAY.map((item: any, index: any) => (
              <Grid item xs={12} md={6} key={index}>
                <Typography variant={"body1"} textTransform={"capitalize"}>
                  <Typography component={"span"} fontWeight={700}>
                    {item?.span}{" "}
                  </Typography>
                  {item?.body}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
