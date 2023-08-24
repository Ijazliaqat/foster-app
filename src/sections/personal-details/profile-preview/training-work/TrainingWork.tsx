import React from "react";
import {
  TRAINING_CERTIFICATE,
  UPLOADID_DATA,
  SPECIALITIES,
} from "./TrainingWorkData";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import TrainingWorkTable from "./TrainingWorkTable";
import WorkExperienceTable from "./WorkExperienceTable";

const TrainingWork = () => {
  const theme: any = useTheme();
  return (
    <>
      {/* Training Certificates Section Started */}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1 }}
        component={"p"}
      >
        Training Certificates
      </Typography>
      <Grid container>
        {TRAINING_CERTIFICATE?.map((item: any) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Box
              key={item.id}
              sx={{
                p: "10px 0 0 0",
              }}
            >
              <Typography
                component={"p"}
                variant="subtitle2"
                sx={{ color: theme.palette.grey[600], mb: 0.5 }}
              >
                {item.label}
              </Typography>
              <Typography
                component={"p"}
                variant="body2"
                sx={{
                  color: theme.palette.grey[600],
                  fontWeight: 400,
                  textTransform: "unset",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              {item.sublist?.map((title: any) => (
                <Box
                  key={title.id}
                  sx={{ display: "flex", gap: 0.5, cursor: "pointer" }}
                >
                  <Image src={title.icon} alt="icon" width={24} height={20} />
                  <Typography
                    component={"p"}
                    variant="body2"
                    sx={{
                      color: theme.palette.grey[600],
                      fontWeight: 400,
                      textTransform: "unset",
                    }}
                  >
                    {title.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      {/* Addtional Training Details */}
      <TrainingWorkTable />
      {/* Work Experience */}
      <WorkExperienceTable />
      {/* Specialities Section Started */}
      <Typography
        component={"p"}
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2, mt: 5 }}
      >
        Specialities
      </Typography>
      <Grid container rowSpacing={1}>
        {SPECIALITIES?.map((item: any) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Typography
              component={"p"}
              variant="body2"
              sx={{ color: theme.palette.grey[600] }}
            >
              {item.title}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {/* ID Upload Section Started */}
      <Typography
        component={"p"}
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 5 }}
      >
        ID Upload (Passport/DL)
      </Typography>
      {UPLOADID_DATA.map((item: any) => (
        <Box
          key={item.id}
          sx={{
            p: "10px 0 0 0",
          }}
        >
          <Typography
            component={"p"}
            variant="subtitle2"
            sx={{ color: theme.palette.grey[600], mb: 1 }}
          >
            {item.label}
          </Typography>
          <Box sx={{ display: "flex", gap: 0.5, cursor: "pointer" }}>
            <Image src={item.icon} alt="icon" width={24} height={22} />
            <Typography
              component={"p"}
              variant="body2"
              sx={{
                color: theme.palette.grey[600],
                fontWeight: 400,
                textTransform: "unset",
                mb: 1,
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default TrainingWork;
