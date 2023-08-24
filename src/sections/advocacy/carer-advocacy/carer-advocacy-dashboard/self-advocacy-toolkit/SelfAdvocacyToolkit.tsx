import React from "react";
import Image from "next/image";
import router from "next/router";
import { SelfAdvocacyWidgets, data } from ".";
import { Box, Card, Grid, Typography } from "@mui/material";

// ===================================================================================================

const SelfAdvocacyToolkit = () => {
  return (
    <>
      <Grid container spacing={2}>
        {data.map((obj, i) => (
          <Grid item sm={12} md={obj.gridLength} key={i}>
            <Card sx={{ ...styles.card }}>
              <Typography variant="h4" sx={styles.title(obj.color)}>
                {obj.title}
              </Typography>
              <Typography variant="h6" sx={styles.description(obj.color)}>
                {obj.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} style={{ paddingBlock: "30px" }}>
        {SelfAdvocacyWidgets.map((card, index) => (
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
              <Typography variant="h6" component="h6" sx={{ color: "#FFFFFF", fontSize: "16px !important", mt: 2 }}>
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

export default SelfAdvocacyToolkit;

// =========================================================================

const styles = {
  card: {
    px: 1.5,
    py: 1,
    height: "100%",
  },
  title: (color: string) => ({ color, fontSize: "24px !important", fontWeight: 600 }),
  description: (color: string) => ({ color, fontSize: "16px !important", fontWeight: 500 }),
  wrapper: {
    gap: "2px",
    padding: "20px",
    display: "flex",
    cursor: "pointer",
    minHeight: "100px",
    borderRadius: "10px",
    justifyContent: "space-between",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
  },
};
