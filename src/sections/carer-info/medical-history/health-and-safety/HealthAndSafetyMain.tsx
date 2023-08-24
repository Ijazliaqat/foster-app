import React from "react";
import { HealthAndSafetyTable } from "./health-and-safety-table/HealthAndSafetyTable";

import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";

export const HealthAndSafetyMain = () => {
  const PAGE_TILE = "Health & Safety";
  return (
    <>
      <Page title={PAGE_TILE}>
        <HealthAndSafetyTable />
      </Page>
    </>
  );
};
