import React from "react";
import router from "next/router";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useUpcomingMeeting } from "./useUpcomingMeeting";
import { Box, Button, Card, ListItemAvatar, Typography } from "@mui/material";

// ============================================================================================

export default function UpcomingMeetings() {
const { theme,notifications,handleExpand,expand} = useUpcomingMeeting();
  return (
    <Card sx={styles.card}>
      <Box sx={styles.header}>
        <Typography variant="h6" component="h6" sx={{ color: theme.palette.primary.main, py: 1.5, px: 1.5, fontSize: "18px !important" }}>
          Upcoming Meetings
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{ color: "#23183D", fontSize: "14px !important", cursor: "pointer", py: 1.5, px: 1.5 }}
          onClick={() => {
            router.push("/advocacy/carer/upload-meeting");
          }}
        >
          view all
        </Typography>
      </Box>
      <ul style={styles?.listContainer}>
        {notifications.map((data: any, index: number) => (
          <li key={index} style={{ display: "flex", alignItems: "baseline", margin: "5px 0px" }}>
            <ListItemAvatar sx={styles?.listItemAvatar("#0E918C")} />
            <Typography sx={{ fontSize: "16px", fontWeight: 500, paddingBottom: "10px" }} component="p">
              {data?.title}
            </Typography>
          </li>
        ))}
      </ul>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={handleExpand}>
          {expand ? "less" : "more"}
          {expand ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </Box>
    </Card>
  );
}

// ============================================================================
const styles = {
  listContainer: { width: "100%", padding: "20px", height: "13rem", overflow: "auto" },
  nextLinkContainer: { textDecoration: "none", display: "block" },
  listItemAvatar: (background: any) => ({
    background: background,
    width: "13px",
    height: "13px",
    borderRadius: 1,
  }),
  card: {
    boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    height: "19.3rem",
  },
  header: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid #0E918C", opacity: "0.5px" },
};
