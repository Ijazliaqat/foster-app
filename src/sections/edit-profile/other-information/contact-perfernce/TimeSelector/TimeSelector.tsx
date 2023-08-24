import React, { FC, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs, { Dayjs } from "dayjs";
import { DesktopTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";
const TimeSelector: FC<any> = ({
  timeValues,
  setTimeValues,
  contactPrefernceGenInfos,
  openTimeRangeModel,
  closeTimeRangeModel,
  saveToTime,
}) => {
  // const [timeVales, setValue] = React.useState<{
  //   from: Dayjs | null;
  //   to: Dayjs | null;
  // }>({ from: dayjs(new Date()), to: dayjs(new Date()) });
  const setFromValue = (newValue: any) => {
    setTimeValues((pre: any) => ({ ...pre, from: newValue }));
  };
  const setToValue = (newValue: any) => {
    console.log({ newValue });
    console.log(dayjs(newValue).format("LT"));
    setTimeValues((pre: any) => ({ ...pre, to: newValue }));
  };
  return (
    <>
      <Grid item container sm={12}>
        <Grid
          item
          sm={6}
          container
          sx={{ border: "1px solid black", padding: 0.5, borderRadius: "5px" }}
        >
          <Grid
            item
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p>
              {timeValues.fromString}{" "}
              {timeValues.fromString === "--" ? "--" : "to"}{" "}
              {timeValues.toString}
            </p>
          </Grid>
          <Grid item>
            <IconButton onClick={openTimeRangeModel}>
              <AccessTimeFilledIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Modal
          open={contactPrefernceGenInfos.timeRangeModel}
          onClose={closeTimeRangeModel}
        >
          <Grid
            container
            sx={{
              background: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: "40%",
              padding: "1em",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Grid item container>
                <Grid item sm={6} sx={{ padding: "1em" }}>
                  <DesktopTimePicker
                    label="From"
                    value={timeValues.from}
                    onChange={setFromValue}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item sm={6} sx={{ padding: "1em" }}>
                  <DesktopTimePicker
                    label="To"
                    value={timeValues.to}
                    onChange={setToValue}
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item sm={12} sx={{ padding: "0 1em" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={saveToTime}
                  >
                    Confirm
                  </Button>
                </Grid>
              </Grid>
            </LocalizationProvider>
          </Grid>
        </Modal>
      </Grid>
    </>
  );
};

export default TimeSelector;
