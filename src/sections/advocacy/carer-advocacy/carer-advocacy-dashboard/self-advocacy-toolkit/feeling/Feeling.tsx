import React, { Fragment } from "react";
import { FeelingTabs } from ".";
import { Box } from "@mui/material";
import VericalTabs from "@root/components/VericalTabs";

const Feeling = ({ setPageTitle }: any) => {
  return (
    <VericalTabs tabsDataArray={FeelingTabs} setActiveTab={setPageTitle}>
      {FeelingTabs?.map((item: any) => (
        <Fragment key={item?.index}>
          <Box>{item?.innerData && item?.innerData}</Box>
        </Fragment>
      ))}
    </VericalTabs>
  );
};

export default Feeling;
