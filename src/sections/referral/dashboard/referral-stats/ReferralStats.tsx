import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { statsData } from ".";

const CustomBox = ({
  position = "relative",
  height = "100px",
  width = "100px",
  sx = {},
  children,
}: any) => {
  return (
    <Box
      height={height}
      position={position}
      width={width}
      sx={{
        ...sx,
        borderRadius: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

const ReferralStats = () => {
  const theme: any = useTheme();

  return (
    <Card sx={{ ...styles.cardStyles }}>
      <Typography
        position={"absolute"}
        variant="h6"
        component="h6"
        sx={{ color: theme.palette.primary.main, mb: 1 }}
      >
        Referral Stats
      </Typography>
      <Box
        sx={{
          mx: "auto",
          width: "98%",
          height: "100%",
          overflowX: "auto",
        }}
      >
        <Box display="flex" justifyContent={"center"} width={"600px"} sx={{ m: "40px auto 0px" }}>
          {statsData.map((data, i) => (
            <CustomBox
              key={i}
              sx={{ ...data.sx, border: `${data.sx.borderWidth} solid ${data.sx.color}` }}
            >
              <Typography sx={{ ...data.titleSx, textTransform: "capitalize", mt: "5px" }}>
                {data.title}
              </Typography>
              <Typography sx={{ fontWeight: 600, fontSize: i === 2 ? "30px" : "24px" }}>
                {data.count}
              </Typography>
            </CustomBox>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default ReferralStats;

//Styles-------------------------
const styles = {
  cardStyles: {
    position: "relative",
    p: 1.5,
    height: "275px",
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
  },
  commonStyles: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
  },
};
