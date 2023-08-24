import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import heroCircles from "@root/assets/svg/hero-circles.svg";
import Image from "next/image";

const HeroSection = ({ mainTitle, description }: any) => {
  const theme: any = useTheme();
  return (
    <Box sx={styles.header}>
      <Image
        src={heroCircles}
        alt="hero-circles"
        style={styles.firstBgCircle}
      />
      <Box sx={styles.headerText}>
        <Typography
          variant="h2"
          sx={{ mb: 1, fontSize: { xs: "26px", sm: "46px" } }}
        >
          {mainTitle}
        </Typography>
        <Typography variant="subtitle2">{description}</Typography>
      </Box>
      <Box sx={styles.wrapper}>
        <Image
          src={heroCircles}
          alt="hero-circles"
          style={styles.secondBgCircle}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;

const styles: any = {
  header: (theme: any) => ({
    width: "100%",
    height: { xs: "200px", sm: "350px" },
    background: "linear-gradient(90deg, #0E918C 0%, #0EADA7 100%)",
    clipPath: "ellipse(71% 59% at 50% 40%)",
    position: "relative",
  }),
  firstBgCircle: {
    position: "absolute",
    top: "20%",
    left: "5%",
  },
  headerText: (theme: any) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: theme.palette.grey[0],
    width: "100%",
  }),
  wrapper: {
    display: { xs: "none", md: "block" },
  },
  secondBgCircle: {
    position: "absolute",
    top: "20%",
    right: "15%",
    rotate: "150deg",
  },
};
