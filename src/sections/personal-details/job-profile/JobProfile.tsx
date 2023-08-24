import CustomCard from "@root/components/CustomCard";
import React from "react";
import { JOBPROFILE_DATA } from "./JobProfileData";
import { Box, Divider, Typography } from "@mui/material";

const JobProfile = () => {
  return (
    <CustomCard
      title="Job Profile"
      divider
      titleTypographyProps={{ variant: "subtitle1" }}
    >
      {JOBPROFILE_DATA.map((item: any) => (
        <Box key={item.id} sx={styles.rootWrapper}>
          <Typography variant="subtitle2" component={"p"} sx={styles.labels}>
            {item.label}
          </Typography>
          <Typography variant="subtitle2" component={"p"} sx={styles.title}>
            {item.title}
          </Typography>
          <Divider sx={styles.divider} />
        </Box>
      ))}
    </CustomCard>
  );
};

export default JobProfile;

//styling
const styles: any = {
  rootWrapper: () => ({
    p: "10px 0 0 0",
  }),
  labels: (theme: any) => ({
    color: theme.palette.grey[600],
  }),
  title: (theme: any) => ({
    color: theme.palette.grey[600],
    fontWeight: 400,
    textTransform: "unset",
  }),
  divider: () => ({
    mt: 1,
  }),
};
