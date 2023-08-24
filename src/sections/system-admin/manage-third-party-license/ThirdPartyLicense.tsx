import React from "react";
import { Grid } from "@mui/material";
import CustomAccordian from "@root/components/CustomAccordian";
import { accordianData } from ".";
import { useRouter } from "next/router";

const ThirdPartyLicense = () => {
  const route = useRouter();
  return (
    <Grid>
      <CustomAccordian
        addShowBtn
        data={accordianData}
        handleRowAdd={(item: any) =>
          route.push({
            pathname: `/system-admin/manage-third-party-license/third-party-license-form`,
          })
        }
      />
    </Grid>
  );
};

export default ThirdPartyLicense;