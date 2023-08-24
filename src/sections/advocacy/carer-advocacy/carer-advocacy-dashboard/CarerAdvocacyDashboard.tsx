import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { CarerAdvocacyWidgets } from ".";
import { Box, Grid, Typography } from "@mui/material";

// =======================================================================

const CarerAdvocacyDashboard = () => {
  const router = useRouter();
  return (
    <>
      <Grid container spacing={2} style={{ paddingTop: "20px" }}>
        {CarerAdvocacyWidgets.map((card, index) => (
          <Grid item xl={3} lg={4} md={6} xs={12} key={index}>
            <Box
              sx={styles.wrapper}
              style={{
                backgroundColor: card.bgColor,
              }}
              onClick={() => {
                router.push(card.link);
              }}
            >
              <Typography variant="h6" component="h6" sx={{ color: "#FFFFFF", fontSize: "16px !important" }}>
                {card.title}
              </Typography>
              <Typography variant="h6" component="span" sx={{ flexShrink: 0 }}>
                <Image src={card.icon} alt="" width={40} height={40} />
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CarerAdvocacyDashboard;

// ==========================================================================
const styles = {
  wrapper: {
    padding: "20px",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2px",
    minHeight: "90px",
  },
};
