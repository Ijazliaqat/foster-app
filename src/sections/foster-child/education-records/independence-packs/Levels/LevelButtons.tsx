import React from "react";
import BronzeLevel from "@root/assets/svg/bronze-level";
import SilverLevel from "@root/assets/svg/silver-level";
import GoldLevel from "@root/assets/svg/gold-level";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

export default function LevelButtons() {
  const router = useRouter();
  let { fosterChildId } = router.query;
  return (
    <div>
      <Box sx={{ mt: 6, mb: 4 }}>
        <Button
          onClick={() => {
            router.push(
              `/foster-child/education-records/independence-packs-life-skill-assessment/add-independence-pack/Bronze?fosterChildId=${fosterChildId}`
            );
          }}
          sx={{
            mr: 2,
            mt: 1,
            color: "#A46628",
            fontWeight: "700",
            fontSize: "16px",
            background: "#FFFFFF",
            border: "1px solid #A46628",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
            "&:hover": {
              background: "#FFFFFF",
              border: "1px solid #A46628",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            },
          }}
          variant="outlined"
          startIcon={<BronzeLevel width="23" height="33" color={"#A46628"} />}
        >
          Bronze Level
        </Button>
        <Button
          onClick={() => {
            router.push(
              `/foster-child/education-records/independence-packs-life-skill-assessment/add-independence-pack/Silver?fosterChildId=${fosterChildId}`
            );
          }}
          sx={{
            mr: 2,
            mt: 1,
            color: "#A4B0C1",
            fontWeight: "700",
            fontSize: "16px",
            background: "#FFFFFF",
            border: "1px solid #A4B0C1",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
            "&:hover": {
              background: "#FFFFFF",
              border: "1px solid #A4B0C1",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            },
          }}
          variant="outlined"
          startIcon={<SilverLevel />}
        >
          Silver Level
        </Button>
        <Button
          onClick={() => {
            router.push(
              `/foster-child/education-records/independence-packs-life-skill-assessment/add-independence-pack/Gold?fosterChildId=${fosterChildId}`
            );
          }}
          sx={{
            color: "#FFBA01",
            fontWeight: "700",
            mt: 1,
            fontSize: "16px",
            background: "#FFFFFF",
            border: "1px solid #FFBA01",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px",
            "&:hover": {
              background: "#FFFFFF",
              border: "1px solid #FFBA01",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            },
          }}
          variant="outlined"
          startIcon={<GoldLevel />}
        >
          Gold Level
        </Button>
      </Box>
    </div>
  );
}
