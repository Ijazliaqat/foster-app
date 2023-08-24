import { Grid, Typography, useTheme } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import React from "react";

export default function FormNotificationExtension() {
  const theme = useTheme();
  return (
    <Grid
      container
      border={1}
      borderRadius={1}
      p={2}
      borderColor={theme.palette.primary.main}
      marginLeft="1.6rem"
    >
      <Grid item xs={11} mb={2}>
        <Typography
          variant="body2"
          component="p"
          color={theme.palette.primary.main}
        >
          Notification
        </Typography>
      </Grid>
      <Grid item lg={6} mb={2}>
        <Typography>Select User the be Notified</Typography>
        <RHFSelect name="userToNotify" size="small" />
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Enter Additional Email Addresses to be notified:
        </Typography>
        <Typography>
          {`(`} Email Addresses should be separated by commas. For example
          john@domain.com , Pete@domain.com {`)`}
        </Typography>
        <RHFTextField name="emailsToNotify" size="small" multiline />
      </Grid>
    </Grid>
  );
}
