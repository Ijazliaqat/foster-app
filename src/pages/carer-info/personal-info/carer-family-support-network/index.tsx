// components
import Page from "@root/components/Page";
// layout
import Layout from "@root/layouts";
//  @mui icons
import HomeIcon from "@mui/icons-material/Home";
import CarerFamilySupportNetworkTable from "@root/sections/carer-info/personal-info/carer-family-support-network/CarerFamilySupportNetworkTable";
import usePath from "@root/hooks/usePath";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------
const PAGE_TITLE = "Family Support Network";

CarerFamilySupportNetwork.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function CarerFamilySupportNetwork() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: makePath({
        path: "/carer-info",
      }),
    },
    {
      name: "Member Details",
      href: "",
    },
  ];

  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <CarerFamilySupportNetworkTable />
    </Page>
  );
}
