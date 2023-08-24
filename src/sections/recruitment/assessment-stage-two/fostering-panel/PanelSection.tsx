import { Box, Button, Card, Grid } from "@mui/material";
import React, { useState } from "react";

export default function PanelSection() {
  let [tab, setTab] = useState(0);

  return (
    <Card sx={{ p: 2 }}>
      <Grid container spacing={4}>
        <Grid item sm={12} xs={12} md={5} lg={3}>
          <Box>
            <Button
              onClick={() => {
                setTab(0);
              }}
              sx={{
                mb: 2,
                color: "white",
                width: "100%",
                height: "80px",
                display: "block",
                background:
                  "linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)",
                boxShadow: "2px 4px 7px rgba(14, 145, 140, 0.2)",
                borderRadius: "10px",
              }}
            >
              Pannel Tools
            </Button>
            <Button
              onClick={() => {
                setTab(1);
              }}
              sx={{
                color: "white",
                width: "100%",
                height: "80px",
                display: "block",
                background:
                  "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
                boxShadow: "2px 4px 7px rgba(14, 145, 140, 0.2)",
                borderRadius: "10px",
              }}
            >
              Panel Evaluation Forms
            </Button>
          </Box>
        </Grid>
        <Grid item sm={12} md={7} lg={9}>
          <Box
            sx={{
              p: 1,
              boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
              borderRadius: "10px",
              borderTop: tab == 0 ? "10px solid #2CB764" : "10px solid #F6830F",
            }}
          >
            <Grid container spacing={2}>
              {[
                "Panel Calendar",
                "Panel Setup",
                "Panel Actions/Comments",
                "Panel Agenda",
                "Panel Minutes - Administrator",
                "Panel Minutes - Chair",
                "Panel Minutes - ADM Approval",
                "Panel Checklist",
              ].map((item, i: any) => {
                return (
                  <Grid key={i} item xs={12} md={6} lg={4} xl={3}>
                    <Button
                      sx={{
                        color: tab == 1 ? "#F6830F" : "",
                        textAlign: "center",
                        width: "100%",
                        height: "100%",
                        padding: "20px 0px",
                        boxShadow: "0px 0px 7px 3px rgba(14, 145, 140, 0.2)",
                        borderRadius: "10px",
                        wordBreak: "break-word",
                      }}
                    >
                      {item}
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
