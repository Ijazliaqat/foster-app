import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import status from "../../../../../assets/svg/training/status.svg";
import mandatory from "../../../../../assets/svg/training/mandatory.svg";
import demoImage from "../../../../../assets/svg/training/courseList.svg";

const CourseListCard = ({
  handleClick = () => { },
  desc = "",
  coverImage = demoImage,
  isStatus = false,
  isMandatory = false,
  maxWidth = '100%',
}: any) => {
  const theme = useTheme();
  return (
    <Box sx={styles.card(maxWidth)} onClick={handleClick}>
      <Box sx={styles.imageWrapper}>
        <Image
          src={coverImage}
          alt="image"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <Box sx={styles.status}>
          {isStatus && <Image src={status} alt="image" />}
        </Box>
        <Box sx={styles.mandatory}>
          {isMandatory && <Image src={mandatory} alt="image" />}
        </Box>
      </Box>
      <Typography sx={styles.cardDescription(theme)}>
        {desc}
      </Typography>
    </Box>
  );
};

export default CourseListCard;
const styles = {
  card: (maxWidth: string) => ({
    borderRadius: "10px",
    boxShadow: "0px 4px 20px rgba(131, 164, 249, 0.25)",
    maxWidth: maxWidth ? maxWidth : "100%",
    cursor: 'pointer'
  }),
  cardContent: {},
  cardDescription: (theme: any) => ({
    fontWeight: 500,
    fontSize: "14px",
    padding: "24px 26px",
    textAlign: "center",
    wordWrap: "break-word",
  }),
  imageWrapper: {
    width: "100%",
    position: "relative",
    height: "100%",
    flex: "1", // Add this line
  },
  status: {
    position: "absolute",
    top: "-5px",
    left: "6px",
  },
  mandatory: {
    position: "absolute",
    top: "5px",
    right: "6px",
  },
};
