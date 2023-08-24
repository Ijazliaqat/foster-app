import { Grid, Typography } from "@mui/material";
import React from "react";

export const HeadingWithDisc: React.FC<{
  heading: string;
  des: string;
  com: JSX.Element;
}> = ({ heading, des, com }) => {
  return (
    <>
      <Typography sx={{ fontWeight: "500", margin: "0.5em 0" }}>
        {heading}
      </Typography>
      <Typography>{des}</Typography>
      {com}
    </>
  );
};

export const DotedHeadingWithDisc: React.FC<{
  heading: string;
  des: string;
}> = ({ heading, des }) => {
  return (
    <>
      <Grid container sx={{ padding: "0 0.6em" }}>
        <Grid item>
          <ul>
            <li>
              <Typography sx={{ fontWeight: "400", margin: "0.5em 0" }}>
                {heading}
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
      <Grid item>
        <Typography>{des}</Typography>
      </Grid>
    </>
  );
};
