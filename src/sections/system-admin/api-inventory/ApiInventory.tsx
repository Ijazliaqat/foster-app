import React from "react";
import CustomAccordian from "@root/components/CustomAccordian";
import { accordianData } from ".";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";

const ApiInventoryTable = () => {
  const route = useRouter();
  return (
    <Grid>
      <CustomAccordian addShowBtn data={accordianData} handleRowAdd={(item: any) => route.push({ pathname: `/system-admin/api-inventory/api-inventory-form`, query: { name: item.formName, action: "add" } })}/>
    </Grid>
  );
};

export default ApiInventoryTable;
