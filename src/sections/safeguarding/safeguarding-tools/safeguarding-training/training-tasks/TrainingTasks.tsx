import React from "react";
import {
  Box,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { TASKSDATA } from ".";

export default function TrainingTasks() {
  const theme: any = useTheme();

  return (
    <Card
      sx={{
        height: "286px",
        overflow: "scroll",
        boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{ color: "#212529", fontWeight: "600", p: 1, pb: 0 }}
      >
        Tasks
      </Typography>
      <FormGroup>
        {TASKSDATA?.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1 }}
            >
              <FormControlLabel
                sx={{ width: "70%" }}
                control={
                  <Checkbox
                    name="faisal"
                    size="small"
                    onChange={(e) => {
                      console.log("aa", e.target.checked);
                    }}
                  />
                }
                label={item?.title}
              />
              <Typography sx={{ color: theme.palette.black, fontSize: "14px", fontWeight: "500" }}>
                {item?.date}
              </Typography>
            </Box>
            {TASKSDATA.length - 1 !== index && <Divider />}
          </Box>
        ))}
      </FormGroup>
    </Card>
  );
}
