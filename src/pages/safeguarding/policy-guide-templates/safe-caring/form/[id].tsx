// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import AddCaringPolicyForm from "@root/sections/safeguarding/policy-guide-templates/safe-caring/add-safe-caring/addCaringPolicyForm";
import { Box, Card } from "@mui/material";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <Card sx={{ p: 2 }}>
        <AddCaringPolicyForm action={action} id={id}  />
      </Card>
    </Page>
  );
}
