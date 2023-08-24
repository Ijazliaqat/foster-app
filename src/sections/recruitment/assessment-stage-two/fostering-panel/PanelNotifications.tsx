import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import { useTheme } from "@emotion/react";

export default function PanelNotifications() {
  let [expand, setExpand] = useState(false);
  const theme: any = useTheme();

  return (
    <Card
      sx={{
        p: 1,
        boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{ color: theme.palette.primary.main }}
      >
        Panel Notifications
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              name="faisal"
              onChange={(e) => {
                console.log("aa", e.target.checked);
              }}
            />
          }
          label="This is panel upcoming event"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="faisal"
              onChange={(e) => {
                console.log("aa", e.target.checked);
              }}
            />
          }
          label="This panel evaluation form is pending"
        />
        <FormControlLabel
          control={
            <Checkbox
              name="faisal"
              onChange={(e) => {
                console.log("aa", e.target.checked);
              }}
            />
          }
          label="This panel task is pending"
        />
        {expand ? (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  name="faisal"
                  onChange={(e) => {
                    console.log("aa", e.target.checked);
                  }}
                />
              }
              label="This panel task is pending"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="faisal"
                  onChange={(e) => {
                    console.log("aa", e.target.checked);
                  }}
                />
              }
              label="This panel task is pending"
            />
          </>
        ) : (
          ""
        )}
      </FormGroup>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? (
            <>
              Less <ExpandLess />
            </>
          ) : (
            <>
              More <ExpandMore />
            </>
          )}
        </Button>
      </Box>
    </Card>
  );
}
