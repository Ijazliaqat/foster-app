import LicenceDisableTable from "./third-party-licence-disable-table/LicenceDisableTable";
import ThirdPartyLicenceTable from "./third-party-licence-table/ThirdPartyLicenceTable";

export const accordianData = [
  {
    title: "Manage Third Party License",
    component: <ThirdPartyLicenceTable />,
  },
  {
    title: "Manage Third Party License ( disable )",
    component: <LicenceDisableTable />,
  },
];
