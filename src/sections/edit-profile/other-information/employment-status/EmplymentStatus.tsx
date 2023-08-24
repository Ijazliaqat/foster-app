import React, { FC, useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import PayForm from "./pay-form/PayForm";
import LimitedCompany from "./limited-company/LimitedCompany";
import SelfEmployed from "./self-employed/SelfEmployed";
import UmberllaCompany from "./umbrella-company/UmbrellaCompany";

const EmplymentStatus: FC<any> = ({ activateNextForm }) => {
  const theme: any = useTheme();
  const [employmentStatus, setEmploymentStatus] = useState("paye");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmploymentStatus((event.target as HTMLInputElement).value);
  };
  return (
    <Grid container justifyContent="center">
      {/* Top Headings  */}
      <Grid container item xs={12}>
        <Grid item sx={{ padding: "0.5em" }}>
          <Typography
            variant="formTopHeading"
            sx={{ color: theme.palette.primary.main }}
          >
            Employment Status
          </Typography>
          <Typography sx={{ fontWeight: 600, color: "black" }}>
            Select Candidate’s employment status
          </Typography>
        </Grid>
      </Grid>
      <Grid item sm={12} sx={{ padding: "0.5em" }}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={employmentStatus}
            onChange={handleChange}
          >
            <FormControlLabel value="paye" control={<Radio />} label="PAYE" />
            <FormControlLabel
              value="limitedCom"
              control={<Radio />}
              label="Limited Company"
            />
            <FormControlLabel
              value="self"
              control={<Radio />}
              label="Self Employed ( Sole Trader )"
            />
            <FormControlLabel
              value="umbrella"
              control={<Radio />}
              label="Umbrella Company"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item sm={12} container sx={{ padding: "0.5em" }}>
        {employmentStatus === "paye" && (
          <PayForm setEmploymentStatus={setEmploymentStatus} />
        )}
        {employmentStatus === "limitedCom" && (
          <LimitedCompany setEmploymentStatus={setEmploymentStatus} />
        )}
        {employmentStatus === "self" && (
          <SelfEmployed setEmploymentStatus={setEmploymentStatus} />
        )}
        {employmentStatus === "umbrella" && (
          <UmberllaCompany activateNextForm={activateNextForm} />
        )}
      </Grid>
    </Grid>
  );
};

export default EmplymentStatus;
