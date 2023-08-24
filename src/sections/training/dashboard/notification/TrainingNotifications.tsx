import React from "react";
import { Box, Card, Divider, FormGroup, Typography } from "@mui/material";
import Image from "next/image";
import { TASKSDATA } from ".";
import { useTrainingNotifications } from "./useTrainingNotifications";

export default function TrainingNotifications() {
  const { theme } = useTrainingNotifications();

  return (
    <Card
      sx={{
        height: "286px",
        overflow: "scroll",
        boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
        borderRadius: "10px",
        padding: "5px",
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{
          fontSize: "18px",
          fontWeight: "600",
          padding: "16px",
          paddingBottom: "0",
          color: theme.palette.primary.main,
        }}
      >
        Training Notification
      </Typography>
      <FormGroup>
        {TASKSDATA?.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 1,
              }}
            >
              <Image src={item.img} alt="icon" />

              <Box sx={{ fontSize: "14px", fontWeight: "500", pl: 2 }}>
                {item.title}
              </Box>

              <Typography
                sx={{
                  color: theme.palette.black,
                  fontSize: "14px",
                  fontWeight: "500",
                  pl: 1,
                }}
              >
                {item?.time}
              </Typography>
            </Box>
            {TASKSDATA.length - 1 !== index && <Divider />}
          </Box>
        ))}
      </FormGroup>
    </Card>
  );
}
