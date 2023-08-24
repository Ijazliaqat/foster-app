import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { BACKGROUND_CHECKS, RIGHT_WORD, ID_DATA } from "./BackgroundCheckData";
import Image from "next/image";

const BackgroundChecks = () => {
  const theme: any = useTheme();
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1 }}
        component={"p"}
      >
        DBS
      </Typography>
      <Grid container>
        {BACKGROUND_CHECKS?.map((item: any) => (
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
                  key={title.title}
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
      {/* Right to work section started*/}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 5.5 }}
      >
        Right To Work
      </Typography>
      <Grid container>
        {RIGHT_WORD?.map((item: any) => (
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
      {/* ID Upload Section Started */}
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 1, mt: 5 }}
      >
        ID Upload (Passport/DL)
      </Typography>
      {ID_DATA.map((item: any) => (
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

export default BackgroundChecks;
