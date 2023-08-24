import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import AdvocateDirectory from "@root/sections/advocacy/advocate-directory/AdvocateDirectory";

// ==============================================================
const PAGE_TITLE = "Foster Carers";

AdvocacyPage.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          href: "/",
        },
        {
            name: "IFA Advocacy",
            href: "/advocacy",
          },
        {
          name: "Contact Directory",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

export default function AdvocacyPage() {
  return (
    <Page title={PAGE_TITLE}>
      <AdvocateDirectory />
    </Page>
  );
}
