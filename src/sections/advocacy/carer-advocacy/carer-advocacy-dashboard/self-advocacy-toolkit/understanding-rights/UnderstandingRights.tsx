import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { UnderstandingRightsTabs } from ".";
import VericalTabs from "@root/components/VericalTabs";

const UnderstandingRights = ({ setPageTitle }: any) => {
  return (
    <VericalTabs tabsDataArray={UnderstandingRightsTabs} setActiveTab={setPageTitle}>
      {UnderstandingRightsTabs?.map((item: any) => (
        <Fragment key={item?.index}>
          <Box>{item?.innerData && item?.innerData}</Box>
        </Fragment>
      ))}
    </VericalTabs>
  );
};

export default UnderstandingRights;
