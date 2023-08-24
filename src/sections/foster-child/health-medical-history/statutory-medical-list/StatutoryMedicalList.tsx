import React from "react";
import { Button, Grid, Menu, MenuItem, Stack } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AccordianList from "@root/components/AccordianList";
import { sortTypeData, statutoryMedicalListAccordionData } from ".";
import { useStatutoryMedicalList } from "./useStatutoryMedicalList";

const StatutoryMedicalList = () => {
  const {
    open,
    sortType,
    setSortType,
    handleSortType,
    sortTypeMenuItemClick,
    sortArray,
    sortOrder,
    setSortOrder,
  } = useStatutoryMedicalList();
  return (
    <>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="end"
        gap={2}
      >
        {/* <Button
          variant="contained"
          sx={{ px: 0 }}
          onClick={() => window.print()}
        >
          <LocalPrintshopIcon />
        </Button>
        <Button variant="contained" sx={{ px: 0 }}>
          <OpenInNewIcon />
        </Button> */}
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleSortType}
          startIcon={<SwapVertIcon />}
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
          sx={{ px: 1 }}
        >
          Sort Type
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={sortType}
          open={open}
          onClose={() => setSortType(null)}
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
          {sortTypeData.map((item: any) => (
            <MenuItem
              key={item?.title}
              onClick={() => sortTypeMenuItemClick(item?.value)}
              sx={{
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              {item?.title}
            </MenuItem>
          ))}
        </Menu>
      </Stack>
      {/* Global Accordian Component */}
      <Grid container>
        {sortArray(statutoryMedicalListAccordionData, "title", sortOrder).map(
          (item: any) => (
            <Grid item xs={12} key={item?.id}>
              <AccordianList title={item?.title} component={item?.component} />
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};

export default StatutoryMedicalList;
