import { Box, Card, Grid, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import ChildInfoTabs from "../child-info-tabs/ChildInfoTabs";
import { useTheme } from "@mui/material";
import { useChildInfoTabs } from "../child-info-tabs/useChildInfoTabs";
// import { TABSDATAARRY } from "../child-info-tabs";

const ChildInfo = () => {
  // const { TABSDATAARRY } = useChildInfoTabs();
  const {currentTab,handleTabChange,TABSDATAARRY} = useChildInfoTabs()
  const theme = useTheme();
  return (
    <Box>
      <ChildInfoTabs tabsDataArray={TABSDATAARRY} currentTab={currentTab} handleTabChange={handleTabChange}>
        {TABSDATAARRY?.map((item) => (
          <Fragment key={item.index}>
            <Grid container spacing={2} minHeight={"230px"}>
              <Box sx={{ width: "100%" }}>{item.component}</Box>
            </Grid>
          </Fragment>
        ))}
      </ChildInfoTabs>
    </Box>
  );
};

export default ChildInfo;

