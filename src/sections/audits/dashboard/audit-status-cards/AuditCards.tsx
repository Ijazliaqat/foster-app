import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuditCards = ({ data }: any) => {
  return (
    <Link href={data?.link} style={{ textDecoration: "none" }}>
      <Box sx={styles.cardStyle(data?.bgColor)}>
        <Box display="flex" justifyContent="space-between">
          <Typography sx={{ fontSize: "19px", fontWeight: "600", color: "#fff" }}>
            {data?.title}
          </Typography>
          <Image src={data?.icon} alt="icon" />
        </Box>
      </Box>
    </Link>
  );
};

export default AuditCards;

const styles = {
  cardStyle: (color: string) => ({
    background: `${color}`,
    boxShadow: "2px 4px 7px rgba(14, 145, 140, 0.25)",
    borderRadius: "10px",
    padding: "25px 24px 40px 25px",
    cursor: "pointer",
  }),
};
