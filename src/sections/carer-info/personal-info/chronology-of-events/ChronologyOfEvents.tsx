import * as React from "react";
import { accordionData } from "./index";
import { Box, Button, Grid } from "@mui/material";
import AccordianList from "@root/components/AccordianList";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ChronologyOfEvents = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "12px", justifyContent: "end" }}>
        <Button variant="contained">
          <ImportExportIcon /> Sort By <ArrowDropDownIcon />
        </Button>
      </Box>
      <Grid container>
        {accordionData.map((item: any) => (
          <Grid item xs={12} key={item.title}>
            <AccordianList title={item.title} component={item.component} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ChronologyOfEvents;
