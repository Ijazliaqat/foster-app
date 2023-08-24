import React from "react";
import { Button, Grid, Menu, MenuItem, Stack } from "@mui/material";
import { carerTypeData, statutoryAccordionData, carerNameData } from "./index";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AccordianList from "@root/components/AccordianList";

const StatutoryChecksList = () => {
  const [carerType, setCarerType] = React.useState<null | HTMLElement>(null);
  const open = Boolean(carerType);
  const handleCarerType = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCarerType(event.currentTarget);
  };
  //Handling Button Dropdown
  const carerTypeMenuItemClick = (items: any) => {
    setCarerType(null);
  };
  //Handling Carer Name Sorting
  const handleCarerName = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCarerType(event.currentTarget);
  };
  //Handling Button Dropdown
  const carerNameMenuItemClick = (items: any) => {
    setCarerType(null);
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="end"
        gap={2}
      >
        {/* Carer Type Dropdown */}
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleCarerType}
          startIcon={<SwapVertIcon />}
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          sx={{ px: 1 }}
        >
          Carer Type
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={carerType}
          open={open}
          onClose={() => setCarerType(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {carerTypeData.map((item: any) => (
            <MenuItem
              key={item.id}
              onClick={() => carerTypeMenuItemClick(item)}
              sx={{
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              {item.value}
            </MenuItem>
          ))}
        </Menu>
        {/* Carer Name Dropdown */}
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleCarerName}
          startIcon={<SwapVertIcon />}
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          sx={{ px: 1 }}
        >
          Carer Name
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={carerType}
          open={open}
          onClose={() => setCarerType(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          {carerNameData.map((item: any) => (
            <MenuItem
              key={item.id}
              onClick={() => carerNameMenuItemClick(item)}
              sx={{
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              {item.value}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
      {/* Global Accordian Component */}
      <Grid container>
        {statutoryAccordionData.map((item: any) => (
          <Grid item xs={12} key={item.title}>
            <AccordianList title={item.title} component={item.component} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StatutoryChecksList;
