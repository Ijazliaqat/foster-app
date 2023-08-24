import { Box, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

let Silver = "#A4B0C1";
let Bronze = "#A46628";
let Gold = "#FFBA01";

export default function SingleLevel({ levelName, children, isBadge }: any) {
  const theme = useTheme();
  const router = useRouter();
  let { fosterChildId } = router.query;

  const el = (
    <Box
      sx={{
        borderRadius: "50%",
        border: "1px solid transparent",
        textAlign: "center",
        width: "120px",
        height: "120px",
        backgroundColor:
          levelName == "Silver"
            ? Silver
            : levelName == "Bronze"
            ? Bronze
            : Gold,
        padding: "4px",
      }}
    >
      {children}
      <Typography
        sx={{
          fontSize: "12px",
          marginTop: "0px",
          marginBottom: "2px",
          color: "#FFFFFF",
        }}
        variant="subtitle1"
        className="title"
      >
        {levelName} Level
      </Typography>
    </Box>
  );

  return isBadge ? (
    el
  ) : (
    <>
      <Box sx={{ display: "flex" }}>
        <Box
          onClick={() => {
            router.push(
              `/foster-child/education-records/independence-packs-life-skill-assessment/add-independence-pack/${levelName}?fosterChildId=${fosterChildId}`
            );
          }}
          sx={{
            padding: "9px 30px",
            background: "#FFFFFF",
            border: "1px solid #000000",
            borderRadius: "10px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "700",
            }}
            variant="subtitle1"
            className="title"
          >
            {levelName} Level
          </Typography>
          {el}
        </Box>
      </Box>
    </>
  );
}
