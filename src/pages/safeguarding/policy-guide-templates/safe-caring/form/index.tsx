// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import AddCaringPolicyForm from "@root/sections/safeguarding/policy-guide-templates/safe-caring/add-safe-caring/addCaringPolicyForm";
import { Box, Card } from "@mui/material";

// ----------------------------------------------------------------------
// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Safeguarding Panel",
    href: "/safeguarding",
  },
  {
    name: "Agency Safeguarding Policy List",
    href: "/safeguarding/policy-guide-templates/safe-caring",
  },
];

const PAGE_TITLE = "Add Agency Safeguarding Policy";

// ----------------------------------------------------------------------

AddCaringPolicy.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AddCaringPolicy() {
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <AddCaringPolicyForm />
      </Card>
    </Page>
  );
}
