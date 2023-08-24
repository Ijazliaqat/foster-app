import React from 'react'
import {
  Box,
  Card,
  FormGroup,
  ListItem,
  Typography,
} from "@mui/material";
import { MarketingTask } from '.';
const MarketingTasks = () => {
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
      minHeight: "22.5",
    }}
  >
    <FormGroup>
      <Box sx={styles.box}>
        {MarketingTask.map((data: any, i: number) => (
          <>
            <ListItem key={i}>
            <Typography fontSize={15} fontWeight={500} sx={{pr:1}}>
                {data?.id}.
              </Typography>
              <Typography fontSize={15} fontWeight={500}>
                {data?.title}
              </Typography>
            </ListItem>
          </>
        ))}
      </Box>
    </FormGroup>
  </Card>
  )
}

export default MarketingTasks
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
