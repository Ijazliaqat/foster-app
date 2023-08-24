import React from "react";
import {
  Box,
  Button,
  Card,
  FormGroup,
  ListItem,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import useUpcommingMarketingEvents from "./useUpcommingMarketingEvents";


export default function UpCommingMarketingEvents() {
  const { notifications,handleExpand, expand,theme} = useUpcommingMarketingEvents()


  return (
    <Card
      sx={{
        py: 1.5,
        px: 1,
        boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "20.5rem",
      }}
    >
      <FormGroup>
        <Box sx={styles.box}>
          {notifications.map((data: any, i: number) => (
            <>
              <ListItem key={i} sx={styles?.listItemContainer(theme)}>
                <ListItemAvatar sx={(theme) => styles?.listItemAvatar(theme)} />
                <Typography fontSize={15} fontWeight={500}>
                  {data?.title}
                </Typography>
              </ListItem>
            </>
          ))}
        </Box>
      </FormGroup>
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

const styles = {
  box: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "300px",
    overflow: "scroll",
  },
  listItemContainer: (theme: any) => ({
    ":hover": {
      background:
        theme.palette.mode === "light"
          ? theme.palette.grey[300]
          : theme.palette.grey[900],
      borderRadius: 1,
    },
  }),
  listItemAvatar: (theme: any) => ({
    background: theme.palette.primary.main,
    width: "12px",
    height: "12px",
    borderRadius: 1,
  }),
};
