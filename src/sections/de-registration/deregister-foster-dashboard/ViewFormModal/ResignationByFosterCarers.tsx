import {
  Box,
  ThemeProvider,
  Typography,
  createTheme,
  Grid,
} from "@mui/material";
import React from "react";

const theme = createTheme({
  typography: {
    fontSize: 14, // default font size
    body2: {
      lineHeight: "25px",
    },
  },
});

const ResignationByFosterCarers = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="body1" sx={{ fontWeight: "700", marginBottom: 3 }}>
          Letter of Resignation for Foster Carer with no children in Placement
        </Typography>
        <Typography
          variant="body2"
          align="right"
          sx={{ fontWeight: "600", marginBottom: 3 }}
        >
          Date: November 15, 2012
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2">
              To:
              <br />
              [Recipient Name]
              <br />
              [Title]
              <br />
              [Street Address]
              <br />
              [City, Postcode]
              <br />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              From:
              <br />
              [Recipient Name]
              <br />
              [Title]
              <br />
              [Street Address]
              <br />
              [City, Postcode]
              <br />
            </Typography>
          </Grid>
        </Grid>

        <br />
        <Typography variant="body1" sx={{ fontWeight: "700" }}>
          Dear [Recipient Name]
        </Typography>
        <Box sx={{ padding: 1 }}>
          <Typography variant="body2">
            This is to formally advice you that I am giving [insert Independent
            Fostering Agency&apos;s name] 28 days notice of my resignation, as
            required under the Fostering Regulation 2011 28 (13) with effect
            from [insert date]
          </Typography>
          <br />
          <Typography variant="body2">Your Sincerely,</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default ResignationByFosterCarers;
