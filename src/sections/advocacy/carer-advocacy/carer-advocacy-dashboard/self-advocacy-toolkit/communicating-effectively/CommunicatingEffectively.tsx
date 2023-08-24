import React, { Fragment } from "react";
import { Box } from "@mui/material";
import { COMMUNICATINGTABSDATA } from ".";
import VericalTabs from "@root/components/VericalTabs";

// ===========================================================

const CommunicatingEffectively = ({ setPageTitle }: any) => {

  return (
    <VericalTabs tabsDataArray={COMMUNICATINGTABSDATA} setActiveTab={setPageTitle}>
      {COMMUNICATINGTABSDATA?.map((item: any) => (
        <Fragment key={item?.index}>
          <Box>{item?.innerData && item?.innerData}</Box>
        </Fragment>
      ))}
    </VericalTabs>
  );
};

export default CommunicatingEffectively;
